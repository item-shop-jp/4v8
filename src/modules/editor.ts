import { Subscription } from 'rxjs';
import { EventEmitter } from '../utils/event-emitter';
import { createBlock } from '../utils/block';
import { EditorEvents } from '../constants';
import { Module } from '../types/module';
import { Block } from '../types/block';

interface Props {
  eventEmitter: EventEmitter;
}

export class EditorModule implements Module {
  private eventEmitter;
  private subs: Subscription;
  private blocks: Block[] = [];

  constructor({ eventEmitter }: Props) {
    this.subs = new Subscription();
    this.eventEmitter = eventEmitter;
  }

  onInit() {
    this.eventEmitter.emit(EditorEvents.EVENT_LOG_INFO, 'init editor module');

    const sub = this.eventEmitter.on(EditorEvents.EVENT_BLOCK_CREATE).subscribe(() => {
      this.createBlock();
    });
    this.subs.add(sub);

    if (this.blocks.length < 1) {
      this.createBlock();
    }
  }

  onDestroy() {
    this.eventEmitter.emit(EditorEvents.EVENT_LOG_INFO, 'destory editor module');
    setTimeout(() => this.subs.unsubscribe());
  }

  createBlock() {
    this.blocks = [...this.blocks, createBlock('TEXT')];
    this.eventEmitter.emit(EditorEvents.EVENT_EDITOR_UPDATE, this.blocks);
  }
}
