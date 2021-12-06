import { Subscription } from 'rxjs';
import * as json1 from 'ot-json1';
import { Module } from '../types/module';
import { EventEmitter } from '../utils/event-emitter';
import { EditorController } from '../types/editor';
import { Op } from '../types/history';
import { EditorEvents } from '../constants';

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
  private editor;
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
      this.record(op);
      console.log(this.stack);
    });
    this.subs.add(sub);
  }

  onDestroy() {
    this.eventEmitter.info('destroy history module');
  }

  record(op: Op) {
    this.stack.undo.push(op);
    this.stack.redo = [];
  }

  undo() {
    const op = this.stack.undo.pop();
    if (!op) return;
    if ((op.ops ?? []).length > 0) {
      const ops = json1.type.invert(op.ops);
      this.executeJson1(ops);
      this.stack.redo.push({ ...op, ops });
    }
  }

  redo() {
    const op = this.stack.redo.pop();
    if (!op) return;
    if ((op.ops ?? []).length > 0) {
      const ops = json1.type.invert(op.ops);
      this.executeJson1(ops);
      this.stack.undo.push({ ...op, ops });
    }
  }

  executeJson1(ops: Op['ops']) {
    console.log(ops);
  }
}
