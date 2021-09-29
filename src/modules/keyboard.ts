import * as React from 'react';
import { Module } from '../types/module';
import { EventEmitter } from '../utils/event-emitter';
import { KeyCodes, EditorEvents } from '../constants';
import { EditorController } from '../hooks/use-editor';
import { CaretPosition } from '../types/caret';

interface Props {
  eventEmitter: EventEmitter;
  editor: EditorController;
}

interface KeyBindingProps {
  key: string;
  collapsed?: boolean;
  empty?: boolean;
  formats?: string[];
  metaKey?: boolean;
  ctrlKey?: boolean;
  shiftKey?: boolean;
  altKey?: boolean;
  prevented?: boolean;
  composing?: boolean;
  handler: (range: CaretPosition, editor: EditorController) => void;
}

export class KeyBoardModule implements Module {
  private eventEmitter;
  private editor;
  private composing;
  private bindings: KeyBindingProps[];

  constructor({ eventEmitter, editor }: Props) {
    this.eventEmitter = eventEmitter;
    this.editor = editor;
    this.bindings = [];
    this.composing = false;
  }

  onInit() {
    this.eventEmitter.info('init keyboard module');

    // handle enter
    this.addBinding({
      key: KeyCodes.ENTER,
      composing: true,
      handler: this._handleEnter.bind(this),
    });
    this.addBinding({
      key: KeyCodes.ENTER,
      shiftKey: true,
      handler: this._handleShiftEnter.bind(this),
    });
    this.addBinding({
      key: KeyCodes.NUMPAD_ENTER,
      composing: true,
      handler: this._handleEnter.bind(this),
    });
    this.addBinding({
      key: KeyCodes.NUMPAD_ENTER,
      shiftKey: true,
      handler: this._handleShiftEnter.bind(this),
    });

    // handle key operation
    this.addBinding({
      key: KeyCodes.ARROW_DOWN,
      collapsed: true,
      handler: this._handlekeyDown.bind(this),
    });

    this.addBinding({
      key: KeyCodes.BACKSPACE,
      collapsed: true,
      handler: this._handleBackspace.bind(this),
    });

    // if ([KeyCodes.DEL].includes(e.code)) {
    //   e.preventDefault();
    //   e.stopPropagation();
    //   return;
    // }
  }

  onDestroy() {
    this.bindings = [];
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
    let prevented = false;

    this.bindings.forEach((binding) => {
      if (this._trigger(e, binding)) {
        prevented = true;
      }
    });

    if (prevented) {
      e.preventDefault();
      e.stopPropagation();
    }
  }

  onBeforeInput(e: React.FormEvent) {}

  addBinding(props: KeyBindingProps) {
    this.bindings.push(props);
  }

  addBindings(propsArray: KeyBindingProps[] = []) {
    propsArray.forEach((props) => {
      this.bindings.push(props);
    });
  }

  private _trigger(e: React.KeyboardEvent, props: KeyBindingProps): boolean {
    const {
      key,
      collapsed = false,
      empty = false,
      formats = [],
      metaKey = false,
      ctrlKey = false,
      shiftKey = false,
      altKey = false,
      prevented = true,
      composing = false,
      handler,
    } = props;
    const caretPosition = this.editor.getCaretPosition();
    if (!composing && this.composing) return false;

    if (!caretPosition) return false;
    if ((metaKey && !e.metaKey) || (!metaKey && e.metaKey)) return false;
    if ((ctrlKey && !e.ctrlKey) || (!ctrlKey && e.ctrlKey)) return false;
    if ((shiftKey && !e.shiftKey) || (!shiftKey && e.shiftKey)) return false;
    if ((altKey && !e.altKey) || (!altKey && e.altKey)) return false;

    if (collapsed && !caretPosition.collapsed) return false;
    if (empty && caretPosition.length > 0) return false;

    if (key !== e.code) return false;

    if (formats.length > 0 && formats.includes(caretPosition.blockFormat)) return false;

    handler(caretPosition, this.editor);

    return prevented;
  }

  private _handleEnter(caretPosition: CaretPosition, editor: EditorController) {
    if (this.composing) {
      // Supports multibyte characters (Japanese)
      setTimeout(() => this.editor.optimize(), 100);
      return;
    }

    if (caretPosition.collapsed) {
      this.editor.getModule('editor').createBlock();
    } else {
      console.log('key enter(range)');
    }
  }

  private _handleShiftEnter(caretPosition: CaretPosition, editor: EditorController) {
    if (caretPosition.collapsed) {
      this.editor.getModule('editor').lineBreak();
    } else {
      console.log('key shift enter(range)');
    }
  }

  private _handlekeyDown(caretPosition: CaretPosition, editor: EditorController) {
    editor.next();
  }

  private _handleBackspace(caretPosition: CaretPosition, editor: EditorController) {
    editor.blur();
  }
}
