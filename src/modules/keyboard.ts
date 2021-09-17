import * as React from 'react';
import { Module } from '../types/module';
import { EventEmitter } from '../utils/event-emitter';
import { KeyCodes, EditorEvents } from '../constants';
import { EditorController } from '../hooks/use-editor';

interface Props {
  eventEmitter: EventEmitter;
  editor: EditorController;
}

export class KeyBoardModule implements Module {
  private eventEmitter;
  private editor;

  constructor({ eventEmitter, editor }: Props) {
    this.eventEmitter = eventEmitter;
    this.editor = editor;
  }

  onInit() {
    this.eventEmitter.info('init keyboard module');
  }

  onDestroy() {
    this.eventEmitter.info('destroy keyboard module');
  }

  onKeyDown(e: React.KeyboardEvent) {
    if ([KeyCodes.ARROW_UP, KeyCodes.ARROW_RIGHT, KeyCodes.ARROW_LEFT, KeyCodes.ARROW_DOWN].includes(e.code)) {
      // update caret position (Used default behavior of contenteditable)
      this._updateCaret();
    }

    if ([KeyCodes.ENTER, KeyCodes.NUMPAD_ENTER].includes(e.code)) {
      e.preventDefault();
      e.stopPropagation();
      this.eventEmitter.emit(EditorEvents.EVENT_BLOCK_CREATE, {});
      return;
    }

    if ([KeyCodes.BACKSPACE].includes(e.code)) {
      e.preventDefault();
      e.stopPropagation();
      this.eventEmitter.emit(EditorEvents.EVENT_BLOCK_CREATE, {});
      return;
    }

    this._optimize();
  }

  private _updateCaret() {
    setTimeout(() => {
      this.editor.updateCaretPosition();
    });
  }

  private _optimize() {
    setTimeout(() => {
      this.editor.optimize();
    });
  }
}
