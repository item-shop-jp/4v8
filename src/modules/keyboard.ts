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
  private composing;

  constructor({ eventEmitter, editor }: Props) {
    this.eventEmitter = eventEmitter;
    this.editor = editor;
    this.composing = false;
  }

  onInit() {
    this.eventEmitter.info('init keyboard module');
  }

  onDestroy() {
    this.eventEmitter.info('destroy keyboard module');
  }

  onCompositionStart(e: React.CompositionEvent) {
    this.composing = true;
  }

  onCompositionEnd(e: React.CompositionEvent) {
    this.composing = false;
  }

  onKeyPress(e: React.KeyboardEvent) {}

  onKeyDown(e: React.KeyboardEvent) {
    if (e.defaultPrevented || this.composing) {
      return;
    }
    if ([KeyCodes.ARROW_UP, KeyCodes.ARROW_RIGHT, KeyCodes.ARROW_LEFT, KeyCodes.ARROW_DOWN].includes(e.code)) {
      if (e.code === KeyCodes.ARROW_DOWN) {
        this.editor.next();
      }

      // update caret position (Used default behavior of contenteditable)
      this._updateCaret();
      return;
    }

    if ([KeyCodes.ENTER, KeyCodes.NUMPAD_ENTER].includes(e.code)) {
      e.preventDefault();
      e.stopPropagation();
      this.eventEmitter.emit(EditorEvents.EVENT_BLOCK_CREATE, {});
      return;
    }

    // if ([KeyCodes.BACKSPACE].includes(e.code)) {
    //   e.preventDefault();
    //   e.stopPropagation();
    //   return;
    // }

    // if ([KeyCodes.DEL].includes(e.code)) {
    //   e.preventDefault();
    //   e.stopPropagation();
    //   return;
    // }
  }

  onBeforeInput(e: React.FormEvent) {}

  private _updateCaret() {
    setTimeout(() => {
      this.editor.updateCaretPosition();
    });
  }
}
