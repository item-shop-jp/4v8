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
    this.eventEmitter.emit('keydown', e.keyCode);
  }
}
