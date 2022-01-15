import { Subscription } from 'rxjs';
import * as json0 from 'ot-json0';
import { nanoid } from 'nanoid';
import { debounce } from 'throttle-debounce';
import { Module } from '../types/module';
import { EventEmitter } from '../utils/event-emitter';
import { getTextLength, getStartIndex } from '../utils/json0';
import { Block } from '../types/block';
import { EditorController, Source } from '../types/editor';
import { Op, JSON0, UpdateOp } from '../types/history';
import { EditorEvents, EventSources, HistoryType } from '../constants';

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
      .select<{ payload: Op; source: Source }>(EditorEvents.EVENT_EDITOR_CHANGE)
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

    const caret = this.editor.getCaretPosition();
    if (caret && caret.blockId === transformOp.blockId) {
      if (transformOp.type === HistoryType.UPDATE_CONTENTS && transformOp.redo) {
        this.editor.blur();
        const block = this.editor.getBlock(caret.blockId);
        const affectedLength = getTextLength(transformOp.redo);
        const startIndex = block ? getStartIndex(block.contents, transformOp.redo) : 0;

        setTimeout(() => {
          if (startIndex > caret.index) {
            this.editor.setCaretPosition({ ...caret });
          } else {
            this.editor.setCaretPosition({ ...caret, index: caret.index + affectedLength });
            this.editor.updateCaretRect();
          }
        }, 10);
      }
    }
  }

  optimizeOp() {
    if (this.tmpUndo.length < 1) return;
    let optimizedUndo: Op[] = [];
    this.tmpUndo.reverse().forEach((tmp) => {
      const index = optimizedUndo.findIndex(
        (v) => v.blockId === tmp.blockId && v.type === tmp.type,
      );
      if (index === -1) {
        optimizedUndo.push(tmp);
        return;
      }
      if (
        tmp.type === HistoryType.UPDATE_CONTENTS &&
        optimizedUndo[index].type === HistoryType.UPDATE_CONTENTS
      ) {
        if ((optimizedUndo[index] as UpdateOp).undo && tmp.undo) {
          (optimizedUndo[index] as UpdateOp).undo = json0.type.compose(
            (optimizedUndo[index] as UpdateOp).undo,
            tmp.undo,
          );
        }
        if ((optimizedUndo[index] as UpdateOp).redo && tmp.redo) {
          (optimizedUndo[index] as UpdateOp).redo = json0.type.compose(
            tmp.redo,
            (optimizedUndo[index] as UpdateOp).redo,
          );
        }
      }
    });
    this.tmpUndo = [];
    this.stack.undo.push(optimizedUndo);

    if (this.stack.undo.length > this.options.maxStack) {
      this.stack.undo.shift();
    }
  }

  undo() {
    if (this.tmpUndo.length > 0) {
      this.optimizeOp();
    }
    const ops = this.stack.undo.pop();
    if (ops && ops.length > 0) {
      this.isUpdating = true;
      ops.forEach((op) => {
        switch (op.type) {
          case HistoryType.UPDATE_CONTENTS: {
            this.executeJson0(op.blockId, op.undo);
            this.transformCaret(op.blockId, op.undo);
            break;
          }
        }
      });
      this.stack.redo.push(ops);
      this.isUpdating = false;
    }
  }

  redo() {
    if (this.tmpUndo.length > 0) {
      this.optimizeOp();
    }
    const ops = this.stack.redo.pop();
    if (ops && ops.length > 0) {
      this.isUpdating = true;
      ops.forEach((op) => {
        switch (op.type) {
          case HistoryType.UPDATE_CONTENTS: {
            this.executeJson0(op.blockId, op.redo);
            this.transformCaret(op.blockId, op.redo);
            console.log('update_block', op.blockId);
            break;
          }
          case HistoryType.ADD_BLOCK: {
            console.log('add_block', op.blockId);
            break;
          }
        }
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
    const block = this.editor.getBlock(blockId);
    if (!caret || !block) return;
    this.editor.blur();
    setTimeout(() => {
      const affectedLength = getTextLength(ops);
      const startIndex = block ? getStartIndex(block.contents, ops) : 0;
      this.editor.setCaretPosition({
        blockId: block.id,
        index: affectedLength > 0 ? startIndex + affectedLength : startIndex,
        length: 0,
      });
      this.editor.updateCaretRect();
    }, 10);
  }
}
