import * as React from 'react';
import { throttle } from 'throttle-debounce';
import { Module } from '../types/module';
import { EventEmitter } from '../utils/event-emitter';
import { KeyCodes } from '../constants';
import { EditorController } from '../types/editor';
import { deleteInlineContents, getBlockId, insertTextInlineContents } from '../utils/block';
import { CaretPosition } from '../types/caret';
import { BlockType } from '../types';

const ShortKey = /Mac/i.test(navigator.platform) ? 'metaKey' : 'ctrlKey';

interface Props {
  eventEmitter: EventEmitter;
  editor: EditorController;
}

interface KeyBindingProps {
  key: string;
  collapsed?: boolean;
  empty?: boolean;
  formats?: string[];
  shortKey?: boolean;
  metaKey?: boolean;
  ctrlKey?: boolean;
  shiftKey?: boolean;
  altKey?: boolean;
  prevented?: boolean;
  composing?: boolean;
  only?: BlockType[];
  except?: BlockType[];
  overwriteAllEvents?: boolean;
  handler: (range: CaretPosition, editor: EditorController, event: React.KeyboardEvent) => void;
}

export class KeyBoardModule implements Module {
  public composing;
  private eventEmitter;
  private editor;
  private bindings: KeyBindingProps[];
  private sync = throttle(200, (blockId?: string, blockElement?: HTMLElement) => {
    this.editor.sync(blockId, blockElement, false);
  });
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
      prevented: true,
      except: ['CODE-BLOCK'],
      handler: this._handleEnter.bind(this),
    });
    this.addBinding({
      key: KeyCodes.NUMPAD_ENTER,
      composing: true,
      prevented: true,
      except: ['CODE-BLOCK'],
      handler: this._handleEnter.bind(this),
    });
    // code-block enter
    this.addBinding({
      key: KeyCodes.ENTER,
      composing: true,
      prevented: true,
      only: ['CODE-BLOCK'],
      handler: this._handleCodeBlockEnter.bind(this),
    });
    this.addBinding({
      key: KeyCodes.NUMPAD_ENTER,
      composing: true,
      prevented: true,
      only: ['CODE-BLOCK'],
      handler: this._handleCodeBlockEnter.bind(this),
    });

    // handle key operation
    this.addBinding({
      key: KeyCodes.ARROW_UP,
      collapsed: true,
      handler: this._handleKeyUp.bind(this),
    });
    this.addBinding({
      key: KeyCodes.ARROW_DOWN,
      collapsed: true,
      handler: this._handleKeyDown.bind(this),
    });
    this.addBinding({
      key: KeyCodes.ARROW_LEFT,
      collapsed: true,
      handler: this._handleKeyLeft.bind(this),
    });
    this.addBinding({
      key: KeyCodes.ARROW_RIGHT,
      collapsed: true,
      handler: this._handleKeyRight.bind(this),
    });

    // selector operation
    this.addBinding({
      key: KeyCodes.ARROW_UP,
      shiftKey: true,
      handler: this._handleSelectorUp.bind(this),
    });

    this.addBinding({
      key: KeyCodes.ARROW_DOWN,
      shiftKey: true,
      handler: this._handleSelectorDown.bind(this),
    });

    this.addBinding({
      key: KeyCodes.A,
      shortKey: true,
      handler: this._handleSelectAll.bind(this),
    });

    this.addBinding({
      key: KeyCodes.BACKSPACE,
      prevented: true,
      overwriteAllEvents: true,
      handler: this._handleBackspace.bind(this),
    });
    this.addBinding({
      key: KeyCodes.DELETE,
      prevented: true,
      overwriteAllEvents: true,
      handler: this._handleDelete.bind(this),
    });

    this.addBinding({
      key: KeyCodes.SPACE,
      handler: this._handleSpace.bind(this),
    });

    this.addBinding({
      key: KeyCodes.TAB,
      composing: true,
      prevented: true,
      handler: this._handleIndent.bind(this),
    });

    this.addBinding({
      key: KeyCodes.TAB,
      shiftKey: true,
      prevented: true,
      handler: this._handleOutdent.bind(this),
    });

    // if ([KeyCodes.DEL].includes(e.code)) {
    //   e.preventDefault();
    //   e.stopPropagation();
    //   return;
    // }

    this.addBinding({
      key: KeyCodes.Z,
      prevented: true,
      shortKey: true,
      handler: this._handleUndo.bind(this),
    });

    this.addBinding({
      key: KeyCodes.Z,
      prevented: true,
      shortKey: true,
      shiftKey: true,
      handler: this._handleRedo.bind(this),
    });

    // override native events
    this.addBinding({
      key: KeyCodes.B,
      prevented: true,
      shortKey: true,
      handler: this._handleBold.bind(this),
    });
    this.addBinding({
      key: KeyCodes.I,
      prevented: true,
      shortKey: true,
      handler: this._handleItalic.bind(this),
    });
    this.addBinding({
      key: KeyCodes.U,
      prevented: true,
      shortKey: true,
      handler: this._handleUnderline.bind(this),
    });

    // Mac only shortcuts
    if (/Mac/i.test(navigator.platform)) {
      this.addBinding({
        key: KeyCodes.D,
        prevented: true,
        ctrlKey: true,
        handler: this._handleDelete.bind(this),
      });
      this.addBinding({
        key: KeyCodes.H,
        prevented: true,
        ctrlKey: true,
        handler: this._handleBackspace.bind(this),
      });
    }
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

  onInput(e: React.FormEvent) {
    setTimeout(() => {
      const nativeRange = this.editor.getNativeRange();
      const [blockId, blockElement] = getBlockId(nativeRange?.startContainer as HTMLElement);
      if (this.composing || !blockId || !blockElement) {
        return;
      }
      this.sync(blockId, blockElement);
    });
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

  private _trigger(
    e: React.KeyboardEvent,
    props: KeyBindingProps,
    caretPosition: CaretPosition | null,
  ): boolean {
    const {
      key,
      collapsed = false,
      empty = false,
      formats = [],
      metaKey = false,
      ctrlKey = false,
      shiftKey = false,
      shortKey = false,
      altKey = false,
      prevented = false,
      composing = false,
      overwriteAllEvents = false,
      only = [],
      except = [],
      handler,
    } = props;
    if (!composing && this.composing) return false;
    if (!caretPosition) return false;

    if (!overwriteAllEvents) {
      if (shortKey && !e[ShortKey]) return false;
      if (!shortKey) {
        if ((metaKey && !e.metaKey) || (!metaKey && e.metaKey)) return false;
        if ((ctrlKey && !e.ctrlKey) || (!ctrlKey && e.ctrlKey)) return false;
      } else {
        if (metaKey && !e.metaKey) return false;
        if (ctrlKey && !e.ctrlKey) return false;
      }

      if ((shiftKey && !e.shiftKey) || (!shiftKey && e.shiftKey)) return false;
      if ((altKey && !e.altKey) || (!altKey && e.altKey)) return false;
    }
    if (collapsed && !caretPosition.collapsed) return false;
    if (empty && caretPosition.length > 0) return false;

    const block = this.editor.getBlock(caretPosition.blockId);
    if (block && except.includes(block.type)) {
      return false;
    }
    if (block && only.length > 0 && !only.includes(block.type)) {
      return false;
    }

    if (key !== e.code) return false;

    if (formats.length > 0 && formats.includes(caretPosition.blockFormat)) return false;

    handler(caretPosition, this.editor, e);

    return prevented;
  }

  private _handleEnter(caretPosition: CaretPosition, editor: EditorController) {
    if (this.composing) {
      return;
    }

    const caret = editor.getCaretPosition();
    if (!caret) return;
    const length = editor.getBlockLength(caret.blockId);
    const block = this.editor.getBlock(caret.blockId);
    if (length === null || !block) return;
    if (caretPosition.collapsed && (caret.index === length || length === 0)) {
      // For list elements, if enter is pressed with an empty string, the decoration is erased.
      if (block.type !== 'PARAGRAPH' && length === 0) {
        editor.updateBlock({
          ...block,
          attributes: { ...block.attributes, indent: false },
          type: 'PARAGRAPH',
        });
        this.editor.numberingList();
        this.editor.getModule('history')?.optimizeOp();
        editor.render([block.id]);
        setTimeout(() => {
          this.editor.setCaretPosition({
            blockId: block.id,
            index: 0,
          });
          this.editor.updateCaretRect();
        }, 10);

        return;
      }

      // Revert to "PARAGRAPH" for header elements
      let blockType = block.type;
      if (['HEADER1', 'HEADER2', 'HEADER3', 'HEADER4', 'HEADER5', 'HEADER6'].includes(block.type)) {
        blockType = 'PARAGRAPH';
      }

      editor.getModule('editor').createBlock({
        type: blockType,
        attributes: block.attributes,
      });
    } else {
      editor.getModule('editor').splitBlock(caret.blockId, caret.index, caret.length);
    }
  }

  private _handleCodeBlockEnter(caretPosition: CaretPosition, editor: EditorController) {
    if (this.composing) {
      return;
    }
    const caret = editor.getCaretPosition();
    if (!caret) return;
    const block = editor.getBlock(caret.blockId);
    if (!block) return;
    const insertedContents = insertTextInlineContents(block.contents, '\n', caret.index);
    editor.updateBlock({
      ...block,
      contents: insertedContents,
    });
    editor.render([block.id]);
    setTimeout(() => {
      this.editor.setCaretPosition({
        blockId: block.id,
        index: caret.index + 1,
      });
      this.editor.updateCaretRect();
    }, 10);
  }

  private _handleKeyLeft(
    caretPosition: CaretPosition,
    editor: EditorController,
    event: React.KeyboardEvent,
  ) {
    const caret = editor.getCaretPosition();
    if (caret) {
      const blockLength = editor.getBlockLength(caret.blockId);
      if (blockLength === null) return;
      if (blockLength === 0 || caret.index === 0) {
        event.preventDefault();
        const blocks = editor.getBlocks();
        const currentIndex = blocks.findIndex((v) => v.id === caret.blockId);
        if (currentIndex !== -1 && currentIndex > 0) {
          const nextBlockLength = editor.getBlockLength(blocks[currentIndex - 1].id) ?? 0;
          editor.setCaretPosition({
            blockId: blocks[currentIndex - 1].id,
            index: nextBlockLength,
            nextElementDirection: 'up',
          });
        }
      }
    }
    setTimeout(() => editor.updateCaretRect(), 10);
  }

  private _handleKeyRight(
    caretPosition: CaretPosition,
    editor: EditorController,
    event: React.KeyboardEvent,
  ) {
    const caret = editor.getCaretPosition();
    if (caret) {
      const blockLength = editor.getBlockLength(caret.blockId);
      if (blockLength === null) return;
      if (blockLength === 0 || blockLength === caret.index) {
        event.preventDefault();
        const blocks = editor.getBlocks();
        const currentIndex = blocks.findIndex((v) => v.id === caret.blockId);

        if (currentIndex !== -1 && currentIndex < blocks.length - 1) {
          editor.setCaretPosition({ blockId: blocks[currentIndex + 1].id });
        }
      }
    }
    setTimeout(() => editor.updateCaretRect(), 10);
  }

  private _handleKeyUp(
    caretPosition: CaretPosition,
    editor: EditorController,
    event: React.KeyboardEvent,
  ) {
    if (!caretPosition.isTop) return;
    if (editor.prev()) {
      event.preventDefault();
    } else {
      setTimeout(() => editor.updateCaretRect(), 10);
    }
  }

  private _handleKeyDown(
    caretPosition: CaretPosition,
    editor: EditorController,
    event: React.KeyboardEvent,
  ) {
    if (!caretPosition.isBottom) return;
    if (editor.next()) {
      event.preventDefault();
    } else {
      setTimeout(() => editor.updateCaretRect(), 10);
    }
  }

  private _handleBackspace(caretPosition: CaretPosition, editor: EditorController) {
    const block = editor.getBlock(caretPosition.blockId);
    const blocks = editor.getBlocks();
    const blockIndex = blocks.findIndex((v) => v.id === caretPosition.blockId);
    const textLength = editor.getBlockLength(caretPosition.blockId);
    let deletedContents;
    let caretIndex: number;

    if (caretPosition.collapsed) {
      if (!block) return;
      // Ignored for null characters
      if (textLength === 0) {
        if (block.type !== 'PARAGRAPH') {
          editor.updateBlock({
            ...block,
            attributes: { ...block.attributes, indent: false },
            type: 'PARAGRAPH',
          });
          this.editor.numberingList();
          this.editor.getModule('history')?.optimizeOp();
          editor.render([block.id]);
          setTimeout(() => {
            this.editor.setCaretPosition({
              blockId: block.id,
              index: 0,
            });
            this.editor.updateCaretRect();
          }, 10);
          return;
        }

        const { embeddedBlocks } = editor.getSettings();
        if (blockIndex > 0 && embeddedBlocks.includes(blocks[blockIndex - 1].type)) {
          editor.getModule('editor').deleteBlock(blocks[blockIndex - 1].id);
          setTimeout(() => {
            editor.setCaretPosition({ blockId: block.id, index: caretIndex });
            editor.updateCaretRect();
          }, 10);
          return;
        }
        editor.getModule('editor').deleteBlock();
        return;
      }
      if (caretPosition.index < 1) {
        if (blockIndex < 1) return;
        editor.getModule('editor').mergeBlock(blocks[blockIndex - 1].id, blocks[blockIndex].id);
        return;
      }

      caretIndex = caretPosition.index - 1;

      deletedContents = deleteInlineContents(block.contents, caretIndex, 1);
      deletedContents[deletedContents.length - 1].text = deletedContents[
        deletedContents.length - 1
      ].text.replace(/\n+$/i, '');
    } else {
      if (!block || caretPosition.length < 1) return;
      caretIndex = caretPosition.index;
      deletedContents = deleteInlineContents(
        block.contents,
        caretPosition.index,
        caretPosition.length,
      );
    }
    editor.updateBlock({ ...block, contents: deletedContents });
    editor.blur();
    editor.render([block.id]);
    setTimeout(() => {
      editor.setCaretPosition({ blockId: block.id, index: caretIndex });
      editor.updateCaretRect();
    }, 10);
  }

  private _handleDelete(caretPosition: CaretPosition, editor: EditorController) {
    const block = editor.getBlock(caretPosition.blockId);
    const blocks = editor.getBlocks();
    const blockIndex = blocks.findIndex((v) => v.id === caretPosition.blockId);
    const textLength = editor.getBlockLength(caretPosition.blockId) ?? 0;
    let deletedContents;

    if (caretPosition.collapsed) {
      if (!block) return;
      // Ignored for null characters
      if (caretPosition.index >= textLength) {
        editor.getModule('editor').mergeBlock(blocks[blockIndex].id, blocks[blockIndex + 1].id);
        return;
      }

      deletedContents = deleteInlineContents(block.contents, caretPosition.index, 1);
    } else {
      if (!block || caretPosition.length < 1) return;
      deletedContents = deleteInlineContents(
        block.contents,
        caretPosition.index,
        caretPosition.length,
      );
    }
    editor.updateBlock({ ...block, contents: deletedContents });
    editor.blur();
    editor.render([block.id]);
    setTimeout(() => {
      editor.setCaretPosition({ blockId: block.id, index: caretPosition.index });
      editor.updateCaretRect();
    }, 10);
  }

  private _handleUndo(
    caretPosition: CaretPosition,
    editor: EditorController,
    event: React.KeyboardEvent,
  ) {
    editor.getModule('history').undo();
  }

  private _handleRedo(
    caretPosition: CaretPosition,
    editor: EditorController,
    event: React.KeyboardEvent,
  ) {
    editor.getModule('history').redo();
  }

  private _handleSpace(
    caretPosition: CaretPosition,
    editor: EditorController,
    event: React.KeyboardEvent,
  ) {
    const isExecuted = editor.getModule('markdown-shortcut').execute();
    if (isExecuted) {
      event.preventDefault();
    }
  }

  private _handleBold(
    caretPosition: CaretPosition,
    editor: EditorController,
    event: React.KeyboardEvent,
  ) {
    const caret = editor.getCaretPosition();
    if (!caret) return;
    const block = editor.getBlock(caret.blockId);
    const { disableDecorationFormats } = editor.getSettings();
    if (!block || disableDecorationFormats.includes(block.type)) {
      return;
    }
    const formats = editor.getFormats(caret.blockId, caret.index, caret.length);
    editor.getModule('toolbar').formatInline({ bold: !formats?.bold });
  }

  private _handleItalic(
    caretPosition: CaretPosition,
    editor: EditorController,
    event: React.KeyboardEvent,
  ) {
    const caret = editor.getCaretPosition();
    if (!caret) return;
    const block = editor.getBlock(caret.blockId);
    const { disableDecorationFormats } = editor.getSettings();
    if (!block || disableDecorationFormats.includes(block.type)) {
      return;
    }
    const formats = editor.getFormats(caret.blockId, caret.index, caret.length);
    editor.getModule('toolbar').formatInline({ italic: !formats?.italic });
  }

  private _handleUnderline(
    caretPosition: CaretPosition,
    editor: EditorController,
    event: React.KeyboardEvent,
  ) {
    const caret = editor.getCaretPosition();
    if (!caret) return;
    const block = editor.getBlock(caret.blockId);
    const { disableDecorationFormats } = editor.getSettings();
    if (!block || disableDecorationFormats.includes(block.type)) {
      return;
    }
    const formats = editor.getFormats(caret.blockId, caret.index, caret.length);
    editor.getModule('toolbar').formatInline({ underline: !formats?.underline });
  }

  private _handleIndent(
    caretPosition: CaretPosition,
    editor: EditorController,
    event: React.KeyboardEvent,
  ) {
    const caret = editor.getCaretPosition();
    if (!caret) return;
    const block = editor.getBlock(caret.blockId);
    const { indentatableFormats } = editor.getSettings();
    if (!block || !indentatableFormats.includes(block.type)) return;
    if (block.attributes.indent > 6) return;
    editor.updateBlock({
      ...block,
      attributes: {
        ...block.attributes,
        indent: (block.attributes.indent ?? 0) + 1,
      },
    });
    editor.numberingList();
    editor.render([block.id]);
    editor.blur();
    setTimeout(() => {
      editor.setCaretPosition(caret);
      editor.updateCaretRect();
    }, 10);
  }

  private _handleOutdent(
    caretPosition: CaretPosition,
    editor: EditorController,
    event: React.KeyboardEvent,
  ) {
    const caret = editor.getCaretPosition();
    if (!caret) return;
    const block = editor.getBlock(caret.blockId);
    const { indentatableFormats } = editor.getSettings();
    if (!block || !indentatableFormats.includes(block.type)) return;
    if ((block.attributes.indent ?? 0) < 1) return;
    const indent = block.attributes.indent - 1;
    editor.updateCaretRect();
    editor.updateBlock({
      ...block,
      attributes: {
        ...block.attributes,
        indent: indent !== 0 ? indent : false,
      },
    });
    editor.numberingList();
    editor.render([block.id]);
    editor.blur();
    setTimeout(() => {
      editor.setCaretPosition(caret);
      editor.updateCaretRect();
    }, 10);
  }

  private _handleSelectorUp(
    caretPosition: CaretPosition,
    editor: EditorController,
    event: React.KeyboardEvent,
  ) {
    if (caretPosition.isTop) {
      const block = editor.getBlock(caretPosition.blockId);
      if (caretPosition.index === 0 && block) {
        event.preventDefault();
        editor.getModule('selector').selectBlocks([block]);
        editor.getModule('selector').setStart(block.id);
        return;
      }
    }
  }

  private _handleSelectorDown(
    caretPosition: CaretPosition,
    editor: EditorController,
    event: React.KeyboardEvent,
  ) {
    if (caretPosition.isBottom) {
      const block = editor.getBlock(caretPosition.blockId);
      const blockLength = editor.getBlockLength(caretPosition.blockId) ?? 0;
      if (caretPosition.length === blockLength - caretPosition.index && block) {
        event.preventDefault();
        editor.getModule('selector').selectBlocks([block]);
        editor.getModule('selector').setStart(block.id);
        return;
      }
    }
  }

  private _handleSelectAll(
    caretPosition: CaretPosition,
    editor: EditorController,
    event: React.KeyboardEvent,
  ) {
    const blocks = editor.getBlocks();
    const blockLength = editor.getBlockLength(caretPosition.blockId) ?? 0;

    if (
      blocks &&
      (blockLength === 0 || (caretPosition.index === 0 && caretPosition.length === blockLength))
    ) {
      event.preventDefault();
      editor.getModule('selector').selectBlocks(blocks);
      editor.getModule('selector').setStart(caretPosition.blockId);
      return;
    }
  }
}
