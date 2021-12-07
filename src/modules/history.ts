import { Subscription } from 'rxjs';
import * as json1 from 'ot-json1';
import { debounce } from 'throttle-debounce';
import { Module } from '../types/module';
import { EventEmitter } from '../utils/event-emitter';
import { Block } from '../types/block';
import { EditorController } from '../types/editor';
import { Op, JSONOpComponent, JSONOpList } from '../types/history';
import { EditorEvents, EventSources } from '../constants';
import { nanoid } from 'nanoid';

interface Props {
  eventEmitter: EventEmitter;
  editor: EditorController;
  options: {
    maxStack: number;
    delay: number;
  };
}

interface Stack {
  undo: Op[];
  redo: Op[];
}

const defaultOptions = {
  maxStack: 50,
  delay: 1000,
};

export class HistoryModule implements Module {
  private eventEmitter;
  private editor: EditorController;
  private options: Props['options'];
  private subs: Subscription;
  private stack: Stack = {
    undo: [],
    redo: [],
  };
  private tmpUndo: Op[] = [];
  private debouncedOptimizeOp = () => {};

  constructor({ eventEmitter, editor, options }: Props) {
    this.subs = new Subscription();
    this.editor = editor;
    this.options = { ...defaultOptions, ...options };
    this.eventEmitter = eventEmitter;
  }

  onInit() {
    this.eventEmitter.info('init history module');

    const sub = this.eventEmitter.on<Op>(EditorEvents.EVENT_EDITOR_CHANGE).subscribe((op) => {
      if (op.source !== EventSources.USER) return;
      this.record(op);
    });
    this.subs.add(sub);

    this.debouncedOptimizeOp = debounce(this.options.delay, () => {
      this.optimizeOp();
    });
  }

  onDestroy() {
    this.eventEmitter.info('destroy history module');
    this.subs.unsubscribe();
    this.stack = {
      undo: [],
      redo: [],
    };
    this.tmpUndo = [];
  }

  record(op: Op, force = false) {
    this.stack.redo = [];
    this.tmpUndo.push(op);
    if (force) {
      this.optimizeOp();
    } else {
      this.debouncedOptimizeOp();
    }
  }

  optimizeOp() {
    if (this.tmpUndo.length < 1) return;
    let optimizedUndo: Op[] = [];
    this.tmpUndo.reverse().forEach((tmp) => {
      const index = optimizedUndo.findIndex((v) => v.blockId === tmp.blockId);
      if (index === -1) {
        optimizedUndo.push(tmp);
        return;
      }
      if (optimizedUndo[index].undo && tmp.undo) {
        optimizedUndo[index] = {
          ...optimizedUndo[index],
          undo: json1.type.compose(optimizedUndo[index].undo, tmp.undo),
        };
      }
      if (optimizedUndo[index].redo && tmp.redo) {
        optimizedUndo[index] = {
          ...optimizedUndo[index],
          redo: json1.type.compose(tmp.redo, optimizedUndo[index].redo),
        };
      }
    });
    this.tmpUndo = [];
    this.stack.undo.push(...optimizedUndo);
    if (this.stack.undo.length > this.options.maxStack) {
      this.stack.undo.shift();
    }
  }

  undo() {
    const op = this.stack.undo.pop();
    if (!op) return;
    if (op.undo) {
      this.executeJson1(op.blockId, op.undo);
      this.stack.redo.push(op);
    }
  }

  redo() {
    const op = this.stack.redo.pop();
    if (!op) return;
    if (op.redo) {
      this.executeJson1(op.blockId, op.redo);
      this.stack.undo.push(op);
    }
  }

  executeJson1(blockId: string, ops: JSONOpList) {
    const block = this.editor.getBlock(blockId);
    if (!block) return;
    const updatedBlock: Block = json1.type.apply(block, ops);

    this.editor.updateBlock(
      {
        ...updatedBlock,
        contents: updatedBlock.contents.map((content) => {
          return {
            id: content.id ?? nanoid(),
            attributes: content.attributes ?? {},
            text: content.text ?? '',
            type: content.type ?? 'TEXT',
            isEmbed: content.isEmbed ?? false,
          };
        }),
      },
      EventSources.API,
    );
    this.editor.render([block.id]);

    this.editor.blur();
    setTimeout(() => {
      const caretIndex = this.getCaretIndex(block, ops);
      this.editor.setCaretPosition({ blockId: block.id, index: caretIndex });
      this.editor.updateCaretRect();
    }, 10);
  }

  getCaretIndex(block: Block, ops: JSONOpList = []): number {
    let caretIndex = 0;
    let [blockKey, index, inlineKey, op] = ops;
    if (blockKey !== 'contents') return caretIndex;

    if (Array.isArray(ops[ops.length - 1])) {
      [index, inlineKey, op] = ops[ops.length - 1] as JSONOpList;
    }

    for (let i = 0; i < block.contents.length; i++) {
      if (index === i) {
        const es = (op as JSONOpComponent)?.es;
        if (es && es.length > 0) {
          es.forEach((v) => {
            if (typeof v === 'number') {
              caretIndex += v;
            }
            if (typeof v === 'string') {
              caretIndex += v.length;
            }
          });
        }
        break;
      }
      if (block.contents[i].isEmbed) {
        caretIndex++;
      } else {
        caretIndex += block.contents[i].text.length;
      }
    }
    return caretIndex;
  }
}
