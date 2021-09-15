import * as React from 'react';
import { Module } from '../types/module';
import { EventEmitter } from '../utils/event-emitter';
import { KeyCodes, EditorEvents } from '../constants';

interface Props {
  eventEmitter: EventEmitter;
}

export class KeyBoardModule implements Module {
  private eventEmitter;

  constructor({ eventEmitter }: Props) {
    this.eventEmitter = eventEmitter;
  }

  onInit() {
    this.eventEmitter.emit(EditorEvents.EVENT_LOG_INFO, 'init keyboard module');
  }

  onDestroy() {
    this.eventEmitter.emit(EditorEvents.EVENT_LOG_INFO, 'destory keyboard module');
  }

  onKeyDown(e: React.KeyboardEvent) {
    if ([KeyCodes.ENTER, KeyCodes.NUMPAD_ENTER].includes(e.code)) {
      e.preventDefault();
      e.stopPropagation();
      this.eventEmitter.emit(EditorEvents.EVENT_BLOCK_CREATE, {});
    }
  }
}
