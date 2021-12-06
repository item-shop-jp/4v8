import { Subscription } from 'rxjs';
import * as json1 from 'ot-json1';
import { Module } from '../types/module';
import { EventEmitter } from '../utils/event-emitter';
import { Block } from '../types/block';
import { EditorController } from '../types/editor';
import { Op, JSONOpComponent } from '../types/history';
import { EditorEvents, EventSources } from '../constants';
import { nanoid } from 'nanoid';

interface Props {
  eventEmitter: EventEmitter;
  editor: EditorController;
}

interface Stack {
  undo: Op[];
  redo: Op[];
}

export class HistoryModule implements Module {
  private eventEmitter;
  private editor: EditorController;
  private subs: Subscription;
  private stack: Stack = {
    undo: [],
    redo: [],
  };

  constructor({ eventEmitter, editor }: Props) {
    this.subs = new Subscription();
    this.editor = editor;
    this.eventEmitter = eventEmitter;
  }

  onInit() {
    this.eventEmitter.info('init history module');

    const sub = this.eventEmitter.on<Op>(EditorEvents.EVENT_EDITOR_CHANGE).subscribe((op) => {
      if (op.source !== EventSources.USER) return;
      this.record(op);
    });
    this.subs.add(sub);
  }

  onDestroy() {
    this.eventEmitter.info('destroy history module');
    this.subs.unsubscribe();
  }

  record(op: Op) {
    this.stack.undo.push(op);
    this.stack.redo = [];
  }

  undo() {
    const op = this.stack.undo.pop();
    if (!op) return;
    if ((op.ops ?? []).length > 0) {
      console.log('undo');
      const ops = json1.type.invert(op.ops);
      this.executeJson1(op.blockId, ops);
      this.stack.redo.push({ ...op, ops });
    }
  }

  redo() {
    const op = this.stack.redo.pop();
    if (!op) return;
    if ((op.ops ?? []).length > 0) {
      console.log('redo');
      const ops = json1.type.invert(op.ops);
      this.executeJson1(op.blockId, ops);
      this.stack.undo.push({ ...op, ops });
    }
  }

  executeJson1(blockId: string, ops: Op['ops']) {
    const block = this.editor.getBlock(blockId);
    if (!block) return;
    const updatedBlock: Block = json1.type.apply(block, ops);
    this.editor.updateBlock(
      {
        ...updatedBlock,
        contents: updatedBlock.contents.map((content) => {
          return { ...content, id: content.id ?? nanoid() };
        }),
      },
      EventSources.API,
    );
    this.editor.render([block.id]);
    console.log(JSON.stringify(ops));

    const caretIndex = this.getCaretIndex(block, ops);
    setTimeout(() => {
      this.editor.setCaretPosition({ blockId: block.id, index: caretIndex });
      this.editor.updateCaretRect();
    }, 10);
  }

  getCaretIndex(block: Block, ops: Op['ops'] = []): number {
    const [blockKey, index, inlineKey, op] = ops;
    if (blockKey !== 'contents' || inlineKey !== 'text') return 0;
    let caretIndex = 0;
    for (let i = 0; i < block.contents.length; i++) {
      if (index === i) {
        const es = (op as JSONOpComponent)?.es;
        if (es) {
          const [inlineIndex, inlineText] = es;
          if (typeof inlineIndex === 'number') {
            caretIndex += inlineIndex;
          }
          if (typeof inlineText === 'string') {
            caretIndex += inlineText.length;
          }
          console.log('es', inlineIndex, inlineText);
        }
        break;
      }
      if (block.contents[i].isEmbed) {
        caretIndex++;
      } else {
        caretIndex += block.contents[i].text.length;
      }
    }
    console.log(caretIndex);
    return caretIndex;
  }
}
