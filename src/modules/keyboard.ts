import * as React from 'react';
import { BaseModule } from '../types/module';
import { EventEmitter } from '../utils/event-emitter';

interface Props {
  eventEmitter: EventEmitter;
}

export class KeyBoardModule implements BaseModule {
  private eventEmitter;

  constructor({ eventEmitter }: Props) {
    this.eventEmitter = eventEmitter;
  }

  onInit() {
    console.log('init keyboard');
  }

  onDestroy() {
    console.log('destory keyboard');
  }

  onKeyDown(e: React.KeyboardEvent) {
    if (e.keyCode === 13) {
      e.preventDefault();
      e.stopPropagation();
    }

    this.eventEmitter.emit('keydown', e.keyCode);
  }
}
