import { Subscription } from 'rxjs';
import * as json0 from 'ot-json0';
import { nanoid } from 'nanoid';
import { debounce } from 'throttle-debounce';
import { Module } from '../types/module';
import { EventEmitter } from '../utils/event-emitter';
import { getTextLength } from '../utils/json0';
import { Block } from '../types/block';
import { EditorController, Source } from '../types/editor';
import { Op, JSON0 } from '../types/history';
import { EditorEvents, EventSources } from '../constants';

interface Props {
  eventEmitter: EventEmitter;
  editor: EditorController;
  options: {
    maxStack: number;
    delay: number;
  };
}

interface Stack {
  undo: Op[][];
  redo: Op[][];
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
  private isUpdating = false;

  constructor({ eventEmitter, editor, options }: Props) {
    this.subs = new Subscription();
    this.editor = editor;
    this.options = { ...defaultOptions, ...options };
    this.eventEmitter = eventEmitter;
  }

  onInit() {
    this.eventEmitter.info('init history module');

    const sub = this.eventEmitter
      .on<{ payload: Op; source: Source }>(EditorEvents.EVENT_EDITOR_CHANGE)
      .subscribe(({ payload, source }) => {
        if (this.isUpdating) return;
        if (source === EventSources.USER) {
          this.record(payload);
        }
        if (source === EventSources.COLLABORATOR) {
          this.transform(payload);
        }
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

  transform(transformOp: Op) {
    this.stack.undo = this.stack.undo
      .map((ops) => {
        return ops.filter((op) => {
          return transformOp.blockId !== op.blockId;
        });
      })
      .filter((ops) => ops.length > 0);
    this.stack.redo = this.stack.redo
      .map((ops) => {
        return ops.filter((op) => {
          return transformOp.blockId !== op.blockId;
        });
      })
      .filter((ops) => ops.length > 0);

    // const caret = this.editor.getCaretPosition();
    // if (caret && caret.blockId === transformOp.blockId) {
    //   if (
    //     transformOp.redo &&
    //     transformOp.redo[0] === 'contents' &&
    //     transformOp.redo[2] == 'text' &&
    //     typeof transformOp.redo[3] === 'object'
    //   ) {
    //     const es = (transformOp.redo[3] as JSONOpComponent).es;
    //     if (!es) return;
    //     const opLength =
    //       es.length === 1
    //         ? (es[0] as string).length
    //         : es.length === 2
    //         ? (es[1] as string).length
    //         : 0;
    //     const opIndex = es.length === 1 ? 0 : es.length === 2 ? es[0] : 0;
    //     const index = caret.index < opIndex ? caret.index : caret.index + opLength;
    //     this.editor.blur();
    //     setTimeout(() => {
    //       this.editor.setCaretPosition({
    //         ...caret,
    //         index,
    //       });
    //     }, 10);
    //   }
    // }
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
          undo: json0.type.compose(optimizedUndo[index].undo, tmp.undo),
        };
      }
      if (optimizedUndo[index].redo && tmp.redo) {
        optimizedUndo[index] = {
          ...optimizedUndo[index],
          redo: json0.type.compose(tmp.redo, optimizedUndo[index].redo),
        };
      }
    });
    this.tmpUndo = [];
    this.stack.undo.push(optimizedUndo);
    if (this.stack.undo.length > this.options.maxStack) {
      this.stack.undo.shift();
    }
  }

  undo() {
    const ops = this.stack.undo.pop();
    if (ops && ops.length > 0) {
      this.isUpdating = true;
      ops.forEach((op) => {
        if (!op.undo) return;

        this.executeJson0(op.blockId, op.undo);
        this.transformCaret(op.blockId, op.undo);
      });
      this.stack.redo.push(ops);
      this.isUpdating = false;
    }
  }

  redo() {
    const ops = this.stack.redo.pop();
    if (ops && ops.length > 0) {
      this.isUpdating = true;
      ops.forEach((op) => {
        if (!op.redo) return;
        this.executeJson0(op.blockId, op.redo);
        this.transformCaret(op.blockId, op.redo);
      });
      this.stack.undo.push(ops);
      this.isUpdating = false;
    }
  }

  executeJson0(blockId: string, ops: JSON0[]) {
    const block = this.editor.getBlock(blockId);
    if (!block) return;
    const updatedBlock: Block = json0.type.apply(block, ops);

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
      EventSources.USER,
    );
    this.editor.render([block.id]);
  }

  transformCaret(blockId: string, ops: JSON0[]) {
    const caret = this.editor.getCaretPosition();
    if (!caret || blockId !== caret.blockId) return;
    this.editor.blur();
    setTimeout(() => {
      const affectedLength = getTextLength(ops);
      this.editor.setCaretPosition({ ...caret, index: caret.index + affectedLength });
      this.editor.updateCaretRect();
    }, 10);
  }
}
