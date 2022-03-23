import { Subscription } from 'rxjs';
import * as json0 from 'ot-json0';
import { nanoid } from 'nanoid';
import { debounce } from 'throttle-debounce';
import { Module } from '../types/module';
import { EventEmitter } from '../utils/event-emitter';
import { getTextLength, getStartIndex } from '../utils/json0';
import { Block } from '../types/block';
import { EditorController, Source } from '../types/editor';
import { Op, JSON0, UpdateOp, AddOp, RemoveOp } from '../types/history';
import { EditorEvents, EventSources, HistoryType } from '../constants';
import { copyObject } from '../utils/object';
import { CaretPosition } from '../types/caret';

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
      .select<{ payload: Op | Op[]; source: Source }>(EditorEvents.EVENT_EDITOR_CHANGE)
      .subscribe(({ payload, source }) => {
        if (source === EventSources.USER) {
          if (this.isUpdating) return;
          if (Array.isArray(payload)) {
            setTimeout(() => {
              payload.forEach((op) => {
                this.record(op);
              });
            }, 20);
          } else {
            setTimeout(() => this.record(payload), 20);
          }
        }
        if (source === EventSources.COLLABORATOR) {
          if (Array.isArray(payload)) {
            this.transformMultiLineOp(payload);
          } else {
            this.transform(payload);
          }
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
    const position = this.editor.getCaretPosition();
    if (position) {
      op.position = position;
    }

    this.tmpUndo.push(op);
    if (force) {
      this.optimizeOp();
    } else {
      this.debouncedOptimizeOp();
    }
  }

  // Deleting the operation history to avoid interfering with each other's changes during collaborative editing.
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

  // Deleting the operation history to avoid interfering with each other's changes during collaborative editing.
  transformMultiLineOp(transformOps: Op[]) {
    const ids = transformOps.map((v) => v.blockId);

    this.stack.undo = this.stack.undo
      .map((ops) => {
        return ops.filter((op) => {
          return !ids.includes(op.blockId);
        });
      })
      .filter((ops) => ops.length > 0);
    this.stack.redo = this.stack.redo
      .map((ops) => {
        return ops.filter((op) => {
          return !ids.includes(op.blockId);
        });
      })
      .filter((ops) => ops.length > 0);
  }

  optimizeOp() {
    if (this.tmpUndo.length < 1) return;
    let optimizedUndo: Op[] = [];
    const updateOps = this.tmpUndo
      .filter((tmp) => tmp.type === HistoryType.UPDATE_CONTENTS)
      .reverse();
    const otherOps = this.tmpUndo.filter((tmp) => tmp.type !== HistoryType.UPDATE_CONTENTS);
    otherOps.forEach((tmp) => {
      const index = optimizedUndo.findIndex(
        (v) => v.blockId === tmp.blockId && v.type === tmp.type,
      );
      if (index === -1) {
        optimizedUndo.push(tmp);
        return;
      }
    });
    updateOps.forEach((tmp) => {
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
      this.editor.blur();
      const affectedIds: string[] = [];
      const addOps: AddOp[] = ops.filter((v) => v.type === HistoryType.ADD_BLOCK) as AddOp[];
      const removeOps: RemoveOp[] = ops.filter(
        (v) => v.type === HistoryType.REMOVE_BLOCK,
      ) as RemoveOp[];
      const updateOps: UpdateOp[] = ops.filter(
        (v) => v.type === HistoryType.UPDATE_CONTENTS,
      ) as UpdateOp[];

      updateOps.forEach((op, i) => {
        this.executeJson0(op.blockId, op.undo);
        affectedIds.push(op.blockId);
        if (i === updateOps.length - 1 && addOps.length < 1 && removeOps.length < 1) {
          this.moveCaret(op.undo, op.position, 'undo');
        }
      });

      addOps.forEach((op, i) => {
        this.editor.deleteBlock(op.blockId);
        affectedIds.push(op.blockId);
        if (i === 0 && removeOps.length < 1) {
          setTimeout(() => {
            const textIndex = this.editor.getBlockLength(op.prevBlockId ?? '') ?? 0;
            this.editor.setCaretPosition({
              blockId: op.prevBlockId,
              index: textIndex,
            });
            this.editor.updateCaretRect();
          }, 10);
        }
      });

      removeOps.forEach((op, i) => {
        if (op.prevBlockId) {
          this.editor.createBlock(copyObject(op.block), op.prevBlockId);
        } else {
          this.editor.createBlock(copyObject(op.block), op.prevBlockId, 'prepend');
        }

        affectedIds.push(op.blockId);
        if (i === removeOps.length - 1) {
          setTimeout(() => {
            const textIndex = this.editor.getBlockLength(op.blockId) ?? 0;
            this.editor.setCaretPosition({
              blockId: op.blockId,
              index: textIndex,
            });
            this.editor.updateCaretRect();
          }, 10);
        }
      });

      this.stack.redo.push(ops);
      this.editor.render(affectedIds);
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
      this.editor.blur();
      const affectedIds: string[] = [];
      const addOps: AddOp[] = ops.filter((v) => v.type === HistoryType.ADD_BLOCK) as AddOp[];
      const removeOps: RemoveOp[] = ops.filter(
        (v) => v.type === HistoryType.REMOVE_BLOCK,
      ) as RemoveOp[];
      const updateOps: UpdateOp[] = ops.filter(
        (v) => v.type === HistoryType.UPDATE_CONTENTS,
      ) as UpdateOp[];

      removeOps.forEach((op, i) => {
        this.editor.deleteBlock(op.blockId);
        affectedIds.push(op.blockId);
        if (i === 0 && addOps.length < 1 && updateOps.length < 1) {
          setTimeout(() => {
            const blocks = this.editor.getBlocks();
            const focusBlockId = op.prevBlockId ?? blocks[0].id;
            const textIndex = this.editor.getBlockLength(focusBlockId) ?? 0;
            this.editor.setCaretPosition({
              blockId: focusBlockId,
              index: textIndex,
            });
            this.editor.updateCaretRect();
          }, 10);
        }
      });

      addOps.forEach((op, i) => {
        this.editor.createBlock(copyObject(op.block), op.prevBlockId);
        affectedIds.push(op.blockId);
        if (i === addOps.length - 1 && updateOps.length < 1) {
          setTimeout(() => {
            const textIndex = this.editor.getBlockLength(op.blockId) ?? 0;
            this.editor.setCaretPosition({
              blockId: op.blockId,
              index: textIndex,
            });
            this.editor.updateCaretRect();
          }, 10);
        }
      });

      updateOps.forEach((op, i) => {
        switch (op.type) {
          case HistoryType.UPDATE_CONTENTS: {
            this.executeJson0(op.blockId, op.redo);
            affectedIds.push(op.blockId);
            if (i === updateOps.length - 1) {
              this.moveCaret(op.redo, op.position, 'redo');
            }
            break;
          }
        }
      });
      this.stack.undo.push(ops);
      this.editor.render(affectedIds);
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
  }

  moveCaret(ops: JSON0[], position?: CaretPosition, type: 'undo' | 'redo' = 'undo') {
    if (!position) return;

    let affectedLength = type === 'undo' ? getTextLength(ops) : 0;
    let positionIndex = position.index ?? 0;
    let positionLength = position.length ?? 0;

    setTimeout(() => {
      const blockLength = this.editor.getBlockLength(position.blockId) ?? 0;

      if (positionIndex + affectedLength + positionLength > blockLength) {
        affectedLength = 0;
      }
      if (positionIndex + positionLength > blockLength) {
        positionLength = 0;
      }
      this.editor.setCaretPosition({
        blockId: position.blockId,
        index: positionIndex + affectedLength,
        length: positionLength,
      });
      this.editor.updateCaretRect();
    }, 20);
  }
}
