import * as React from 'react';
import { debounce } from 'throttle-debounce';
import { Module } from '../types/module';
import { EventEmitter } from '../utils/event-emitter';
import { KeyCodes, EditorEvents } from '../constants';
import { EditorController } from '../hooks/use-editor';
import { deleteInlineContents } from '../utils/block';
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
  public composing;
  private eventEmitter;
  private editor;
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
      handler: this._handleBackspace.bind(this),
    });

    this.addBinding({
      key: KeyCodes.SPACE,
      collapsed: true,
      composing: true,
      handler: this._handleSpace.bind(this),
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
    console.log('変換開始');
  }

  onCompositionEnd(e: React.CompositionEvent) {
    this.composing = false;
    setTimeout(() => this.editor.optimize(), 100);
  }

  onInput(e: React.KeyboardEvent) {
    if (this.composing) {
      return;
    }
    this.editor.optimize();
  }

  onKeyPress(e: React.KeyboardEvent) {}

  onKeyDown(e: React.KeyboardEvent) {
    let prevented = false;

    const caretPosition = this.editor.getCaretPosition();

    if (!caretPosition) {
      e.preventDefault();
      e.stopPropagation();
    }

    this.bindings.forEach((binding) => {
      if (this._trigger(e, binding, caretPosition)) {
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

  private _trigger(e: React.KeyboardEvent, props: KeyBindingProps, caretPosition: CaretPosition | null): boolean {
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
      return;
    }

    if (caretPosition.collapsed) {
      this.editor.getModule('editor').createBlock();
    } else {
      console.log('key enter(range)');
    }
  }

  private _handleSpace(caretPosition: CaretPosition, editor: EditorController) {
    // if (this.composing) {
    //   this.editor.optimize();
    //   console.log('変換enter');
    //   return;
    // }
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
    const block = editor.getBlock(caretPosition.blockId);
    let deletedContents;
    let caretIndex;
    if (caretPosition.collapsed) {
      if (!block || caretPosition.index < 1) return;
      caretIndex = caretPosition.index - 1;
      deletedContents = deleteInlineContents(block.contents, caretIndex, 1);
    } else {
      if (!block || caretPosition.length < 1) return;
      caretIndex = caretPosition.index;
      deletedContents = deleteInlineContents(block.contents, caretPosition.index, caretPosition.length);
    }

    editor.updateBlock({ ...block, contents: deletedContents });
    editor.render([block.id]);
    editor.setCaretPosition({ blockId: block.id, index: caretIndex });
  }
}
