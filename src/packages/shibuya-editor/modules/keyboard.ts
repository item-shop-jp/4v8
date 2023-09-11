import * as React from 'react';
import { throttle, debounce } from 'throttle-debounce';
import { Module } from '../types/module';
import { EventEmitter } from '../utils/event-emitter';
import { KeyCodes } from '../constants';
import { EditorController } from '../types/editor';
import {
  deleteInlineContents,
  getBlockId,
  getChildBlockId,
  getBlockElementById,
  insertTextInlineContents,
  createBlock as utilCreateBlock,
  getOuter,
} from '../utils/block';
import { CaretPosition } from '../types/caret';
import { Block, BlockType } from '../types';
import { createInline } from '../utils/inline';
import stringLength from 'string-length';
import { copyObject } from '../utils/object';
import { caretRangeFromPoint } from '../utils/range';
import { getHtmlElement } from '../utils/dom';

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
  private syncChildBlock = throttle(
    200,
    (parentBlockId: string, blockId: string, blockKey: string, blockElement: HTMLElement) => {
      this.editor.syncChildBlock(parentBlockId, blockId, blockKey, blockElement);
    },
  );
  private syncCodeBlock = debounce(300, (blockId?: string, blockElement?: HTMLElement) => {
    this.editor.sync(blockId, blockElement, true);
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
      except: ['CODE-BLOCK', 'TABLE'],
      handler: this._handleEnter.bind(this),
    });
    this.addBinding({
      key: KeyCodes.NUMPAD_ENTER,
      composing: true,
      prevented: true,
      except: ['CODE-BLOCK', 'TABLE'],
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
      except: ['TABLE'],
      handler: this._handleKeyUp.bind(this),
    });
    this.addBinding({
      key: KeyCodes.ARROW_DOWN,
      collapsed: true,
      except: ['TABLE'],
      handler: this._handleKeyDown.bind(this),
    });
    this.addBinding({
      key: KeyCodes.ARROW_LEFT,
      collapsed: true,
      except: ['TABLE'],
      handler: this._handleKeyLeft.bind(this),
    });
    this.addBinding({
      key: KeyCodes.ARROW_RIGHT,
      collapsed: true,
      except: ['TABLE'],
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
      except: ['TABLE'],
      handler: this._handleBackspace.bind(this),
    });
    this.addBinding({
      key: KeyCodes.DELETE,
      prevented: true,
      overwriteAllEvents: true,
      except: ['TABLE'],
      handler: this._handleDelete.bind(this),
    });

    this.addBinding({
      key: KeyCodes.SPACE,
      except: ['CODE-BLOCK'],
      handler: this._handleSpace.bind(this),
    });

    this.addBinding({
      key: KeyCodes.TAB,
      prevented: true,
      except: ['CODE-BLOCK', 'TABLE'],
      handler: this._handleIndent.bind(this),
    });

    this.addBinding({
      key: KeyCodes.TAB,
      shiftKey: true,
      prevented: true,
      except: ['CODE-BLOCK', 'TABLE'],
      handler: this._handleOutdent.bind(this),
    });

    this.addBinding({
      key: KeyCodes.TAB,
      prevented: true,
      only: ['CODE-BLOCK'],
      handler: this._handleCodeBlockIndent.bind(this),
    });

    this.addBinding({
      key: KeyCodes.TAB,
      shiftKey: true,
      prevented: true,
      only: ['CODE-BLOCK'],
      handler: this._handleCodeBlockOutdent.bind(this),
    });

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
        except: ['TABLE'],
        handler: this._handleDelete.bind(this),
      });
      this.addBinding({
        key: KeyCodes.H,
        prevented: true,
        ctrlKey: true,
        except: ['TABLE'],
        handler: this._handleBackspace.bind(this),
      });
      this.addBinding({
        key: KeyCodes.D,
        prevented: true,
        ctrlKey: true,
        only: ['TABLE'],
        handler: this._handleTableDelete.bind(this),
      });
      this.addBinding({
        key: KeyCodes.H,
        prevented: true,
        ctrlKey: true,
        only: ['TABLE'],
        handler: this._handleTableBackspace.bind(this),
      });
    }

    // table
    this.addBinding({
      key: KeyCodes.ENTER,
      composing: true,
      prevented: true,
      only: ['TABLE'],
      handler: this._handleTableEnter.bind(this),
    });
    this.addBinding({
      key: KeyCodes.NUMPAD_ENTER,
      composing: true,
      prevented: true,
      only: ['TABLE'],
      handler: this._handleTableEnter.bind(this),
    });
    this.addBinding({
      key: KeyCodes.BACKSPACE,
      prevented: true,
      overwriteAllEvents: true,
      only: ['TABLE'],
      handler: this._handleTableBackspace.bind(this),
    });
    this.addBinding({
      key: KeyCodes.DELETE,
      prevented: true,
      overwriteAllEvents: true,
      only: ['TABLE'],
      handler: this._handleTableDelete.bind(this),
    });
    this.addBinding({
      key: KeyCodes.ARROW_UP,
      collapsed: true,
      only: ['TABLE'],
      handler: this._handleTableKeyUp.bind(this),
    });
    this.addBinding({
      key: KeyCodes.ARROW_DOWN,
      collapsed: true,
      only: ['TABLE'],
      handler: this._handleTableKeyDown.bind(this),
    });
    this.addBinding({
      key: KeyCodes.ARROW_LEFT,
      collapsed: true,
      only: ['TABLE'],
      handler: this._handleTableKeyLeft.bind(this),
    });
    this.addBinding({
      key: KeyCodes.ARROW_RIGHT,
      collapsed: true,
      only: ['TABLE'],
      handler: this._handleTableKeyRight.bind(this),
    });
    this.addBinding({
      key: KeyCodes.TAB,
      prevented: true,
      only: ['TABLE'],
      handler: this._handleTableTab.bind(this),
    });
    this.addBinding({
      key: KeyCodes.TAB,
      shiftKey: true,
      prevented: true,
      only: ['TABLE'],
      handler: this._handleTableShiftTab.bind(this),
    });
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
    const nativeRange = this.editor.getNativeRange();
    const el = nativeRange?.startContainer as HTMLElement;

    setTimeout(() => {
      const [blockId, blockElement] = getBlockId(el);

      if (this.composing || !blockId || !blockElement) {
        return;
      }
      const block = this.editor.getBlock(blockId);

      if (!block) return;
      if (block.type === 'CODE-BLOCK') {
        this.syncCodeBlock(blockId, blockElement);
        return;
      }
      this.sync(blockId, blockElement);
    });
  }

  onInputChildBlock(parentBlockId: string, e: React.FormEvent) {
    const nativeRange = this.editor.getNativeRange();
    const el = nativeRange?.startContainer as HTMLElement;
    setTimeout(() => {
      const parentBlock = this.editor.getBlock(parentBlockId);

      if (!parentBlock) return;
      const [blockId, blockKey, blockElement] = getChildBlockId(el);

      if (this.composing || !blockId || !blockKey || !blockElement) {
        return;
      }

      this.syncChildBlock(parentBlockId, blockId, blockKey, blockElement);
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
      overwriteAllEvents = false, // shiftやctrlとの同時押し含めすべて
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
        attributes: { ...block.attributes, checked: false },
      });
    } else {
      editor.getModule('editor').splitBlock(caret.blockId, caret.index, caret.length);
    }
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
        if (currentIndex > 0) {
          const nextBlockLength = editor.getBlockLength(blocks[currentIndex - 1].id) ?? 0;
          //tableの場合だけの処理
          if (blocks[currentIndex - 1].type === 'TABLE') {
            const rIndex = blocks[currentIndex - 1].attributes.tableR - 1;
            const cIndex = blocks[currentIndex - 1].attributes.tableC - 1;
            const lastChild = blocks[currentIndex - 1].childBlocks.find(
              (v) => v.name === `r${rIndex}-c${cIndex}`,
            );
            if (!lastChild) return;
            const lastChildBlockLength = editor.getChildBlockLength(lastChild.id) ?? 0;
            editor.setCaretPosition({
              blockId: blocks[currentIndex - 1].id,
              childBlockId: lastChild.id,
              index: lastChildBlockLength,
              nextElementDirection: 'up',
            });
            return;
          }
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
          //次がtableの場合だけの処理
          if (blocks[currentIndex + 1].type === 'TABLE') {
            const rIndex = 0;
            const cIndex = 0;
            const firstChild = blocks[currentIndex + 1].childBlocks.find(
              (v) => v.name === `r${rIndex}-c${cIndex}`,
            );
            if (!firstChild) return;
            editor.setCaretPosition({
              blockId: blocks[currentIndex + 1].id,
              childBlockId: firstChild.id,
              index: 0,
            });
            setTimeout(() => editor.updateCaretRect(), 10);
            return;
          }
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
      deletedContents[deletedContents.length - 1].text =
        deletedContents[deletedContents.length - 1].text;
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
    const formats = caret.childBlockId
      ? editor.getChildFormats(caret.blockId, caret.childBlockId, caret.index, caret.length)
      : editor.getFormats(caret.blockId, caret.index, caret.length);
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
    const formats = caret.childBlockId
      ? editor.getChildFormats(caret.blockId, caret.childBlockId, caret.index, caret.length)
      : editor.getFormats(caret.blockId, caret.index, caret.length);
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
    const formats = caret.childBlockId
      ? editor.getChildFormats(caret.blockId, caret.childBlockId, caret.index, caret.length)
      : editor.getFormats(caret.blockId, caret.index, caret.length);
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
    const { indentableFormats } = editor.getSettings();
    if (!block || !indentableFormats.includes(block.type)) return;
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
    const { indentableFormats } = editor.getSettings();
    if (!block || !indentableFormats.includes(block.type)) return;
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

  private _handleCodeBlockEnter(caretPosition: CaretPosition, editor: EditorController) {
    if (this.composing) {
      return;
    }
    const caret = editor.getCaretPosition();
    if (!caret) return;
    const nativeRange = this.editor.getNativeRange();
    const [blockId, blockElement] = getBlockId(nativeRange?.startContainer as HTMLElement);
    if (!blockId || !blockElement) {
      return;
    }
    this.syncCodeBlock.cancel({ upcomingOnly: true });
    this.editor.sync(blockId, blockElement, true);
    const block = editor.getBlock(caret.blockId);
    if (!block) return;
    const length = editor.getBlockLength(caret.blockId) ?? 0;

    if (length === 0) {
      editor.updateBlock({
        ...block,
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
    const blockText = block.contents.map((v) => v.text).join('');
    if (caret.collapsed && length - 1 <= caret.index && blockText.slice(-2) === '\n\n') {
      editor.blur();
      const deletedContents = deleteInlineContents(block.contents, length - 2, 2);
      editor.updateBlock({
        ...block,
        contents: deletedContents,
      });
      const appendBlock = utilCreateBlock('PARAGRAPH');
      editor.createBlock(appendBlock, block.id, 'append');
      editor.render([block.id]);
      setTimeout(() => {
        this.editor.setCaretPosition({
          blockId: appendBlock.id,
          index: 0,
        });
        this.editor.updateCaretRect();
      }, 10);
      return;
    }

    let lineBrake = '\n';

    if (caret.index >= length && !blockText.match(/\n$/)) {
      lineBrake = '\n\n';
    }
    const insertedContents = insertTextInlineContents(block.contents, lineBrake, caret.index);
    editor.updateBlock({
      ...block,
      contents: insertedContents,
    });
    editor.blur();
    editor.render([block.id]);
    setTimeout(() => {
      this.editor.setCaretPosition({
        blockId: block.id,
        index: caret.index + lineBrake.length,
      });
      this.editor.updateCaretRect();
    }, 10);
  }

  private _handleCodeBlockIndent(
    caretPosition: CaretPosition,
    editor: EditorController,
    event: React.KeyboardEvent,
  ) {
    const caret = editor.getCaretPosition();
    if (!caret) return;
    const block = editor.getBlock(caret.blockId);
    if (!block) return;
    let lines = block.contents
      .map((v) => v.text)
      .join('')
      .split('\n');
    let processedIndex = 0;
    let text = '';
    let affectedLine = 0;
    lines.forEach((line, i) => {
      const lineLength = stringLength(line);
      if (
        (processedIndex <= caret.index && caret.index <= processedIndex + lineLength) ||
        (processedIndex > caret.index && caret.index + caret.length > processedIndex) ||
        (processedIndex <= caret.index + caret.length &&
          caret.index + caret.length < processedIndex + lineLength)
      ) {
        if (caret.length > 0 && processedIndex === caret.index + caret.length) {
          text = `${text}${line}`;
        } else {
          text = `${text}  ${line}`;
          affectedLine++;
        }
      } else {
        text = `${text}${line}`;
      }
      if (i < lines.length - 1) {
        text = `${text}\n`;
      }
      processedIndex += lineLength + 1;
    });
    editor.updateBlock({
      ...block,
      contents: [createInline('TEXT', text)],
    });
    editor.blur();
    setTimeout(() => {
      this.editor.setCaretPosition({
        blockId: block.id,
        index: caret.index + 2,
        length: caret.length + (affectedLine > 1 ? (affectedLine - 1) * 2 : 0),
      });
      this.editor.updateCaretRect();
    }, 10);
    editor.render([block.id]);
  }

  private _handleCodeBlockOutdent(
    caretPosition: CaretPosition,
    editor: EditorController,
    event: React.KeyboardEvent,
  ) {
    const caret = editor.getCaretPosition();
    if (!caret) return;
    const block = editor.getBlock(caret.blockId);
    if (!block) return;
    let lines = block.contents
      .map((v) => v.text)
      .join('')
      .split('\n');
    let processedIndex = 0;
    let text = '';
    let affectedLine = 0;
    let affectedIndex = 2;
    let isLineHead = false;
    lines.forEach((line, i) => {
      const lineLength = stringLength(line);
      if (
        (processedIndex <= caret.index && caret.index <= processedIndex + lineLength) ||
        (processedIndex > caret.index && caret.index + caret.length > processedIndex) ||
        (processedIndex <= caret.index + caret.length &&
          caret.index + caret.length < processedIndex + lineLength)
      ) {
        if (caret.length > 0 && processedIndex === caret.index + caret.length) {
          text = `${text}${line}`;
        } else {
          const outdentedLine = line.replace(/^\s{1,2}/, '');
          text = `${text}${outdentedLine}`;
          const lineDiff = line.length - outdentedLine.length;
          // indexの開始ポイントがoutdentと被っていなかったら影響を受けていない判定にする

          if (lineDiff > 0) {
            if (
              !(
                processedIndex <= caret.index &&
                caret.index <= processedIndex + lineLength &&
                lineDiff <= caret.index - processedIndex
              )
            ) {
              affectedLine++;
            }
            if (lineDiff < 2) {
              affectedIndex = lineDiff;
            }
          }
          if (processedIndex === caret.index) {
            isLineHead = true;
          }
        }
      } else {
        text = `${text}${line}`;
      }
      if (i < lines.length - 1) {
        text = `${text}\n`;
      }
      processedIndex += lineLength + 1;
    });
    editor.updateBlock({
      ...block,
      contents: [createInline('TEXT', text)],
    });
    editor.blur();
    setTimeout(() => {
      this.editor.setCaretPosition({
        blockId: block.id,
        index: isLineHead ? caret.index : caret.index - affectedIndex,
        length: caret.length + affectedLine * -2,
      });
      this.editor.updateCaretRect();
    }, 10);
    editor.render([block.id]);
  }

  // table
  private _handleTableBackspace(caretPosition: CaretPosition, editor: EditorController) {
    const block = editor.getBlock(caretPosition.blockId);
    if (!caretPosition.childBlockId || !block) return;
    const childBlockIndex = block.childBlocks.findIndex((v) => v.id === caretPosition.childBlockId);
    if (childBlockIndex === -1) return;
    const childBlocks = copyObject(block.childBlocks);
    let deletedContents;
    let caretIndex: number;

    if (caretPosition.collapsed) {
      caretIndex = caretPosition.index - 1;
      deletedContents = deleteInlineContents(childBlocks[childBlockIndex].contents, caretIndex, 1);
      deletedContents[deletedContents.length - 1].text =
        deletedContents[deletedContents.length - 1].text;
    } else {
      if (caretPosition.length < 1) return;
      caretIndex = caretPosition.index;
      deletedContents = deleteInlineContents(
        childBlocks[childBlockIndex].contents,
        caretPosition.index,
        caretPosition.length,
      );
    }
    editor.updateChildBlock(block.id, {
      ...block.childBlocks[childBlockIndex],
      contents: deletedContents,
    });
    editor.blur();
    editor.renderChild(block.id, [block.childBlocks[childBlockIndex].id]);
    setTimeout(() => {
      editor.setCaretPosition({
        blockId: block.id,
        childBlockId: caretPosition.childBlockId,
        index: caretIndex,
      });
      editor.updateCaretRect();
    }, 10);
  }

  private _handleTableDelete(caretPosition: CaretPosition, editor: EditorController) {
    const block = editor.getBlock(caretPosition.blockId);
    if (!caretPosition.childBlockId || !block) return;
    const childBlockIndex = block.childBlocks.findIndex((v) => v.id === caretPosition.childBlockId);
    if (childBlockIndex === -1) return;
    const childBlocks = copyObject(block.childBlocks);
    let deletedContents;
    if (caretPosition.collapsed) {
      deletedContents = deleteInlineContents(
        childBlocks[childBlockIndex].contents,
        caretPosition.index,
        1,
      );
    } else {
      if (caretPosition.length < 1) return;
      deletedContents = deleteInlineContents(
        childBlocks[childBlockIndex].contents,
        caretPosition.index,
        caretPosition.length,
      );
    }
    editor.updateChildBlock(block.id, {
      ...block.childBlocks[childBlockIndex],
      contents: deletedContents,
    });
    editor.blur();
    editor.renderChild(block.id, [block.childBlocks[childBlockIndex].id]);
    setTimeout(() => {
      editor.setCaretPosition({
        blockId: block.id,
        childBlockId: caretPosition.childBlockId,
        index: caretPosition.index,
      });
      editor.updateCaretRect();
    }, 10);
  }

  private _handleTableKeyLeft(
    caretPosition: CaretPosition,
    editor: EditorController,
    event: React.KeyboardEvent,
  ) {
    const block = editor.getBlock(caretPosition.blockId);
    if (!caretPosition.childBlockId || !block) return;
    const childBlockIndex = block.childBlocks.findIndex((v) => v.id === caretPosition.childBlockId);
    if (childBlockIndex === -1 || !block.childBlocks[childBlockIndex].name) return;
    const match = block.childBlocks[childBlockIndex].name?.match(/^r([0-9]+)-c([0-9]+)/);

    if (!match) return;
    let currentR = Number(match[1]);
    let currentC = Number(match[2]);
    const blockLength = editor.getChildBlockLength(block.childBlocks[childBlockIndex].id);

    if (blockLength === null) return;
    if (blockLength === 0 || caretPosition.index === 0) {
      event.preventDefault();
      if (currentC === 0 && currentR === 0) {
        // １つ前のブロックへ飛ばす
        const blocks = editor.getBlocks();
        const currentBlockIndex = blocks.findIndex((v) => v.id === caretPosition.blockId);
        if (currentBlockIndex > 0) {
          const nextBlockLength = editor.getBlockLength(blocks[currentBlockIndex - 1].id) ?? 0;
          //次がtableの場合だけの処理
          if (blocks[currentBlockIndex - 1].type === 'TABLE') {
            const rIndex = blocks[currentBlockIndex - 1].attributes.tableR - 1;
            const cIndex = blocks[currentBlockIndex - 1].attributes.tableC - 1;
            const lastChild = blocks[currentBlockIndex - 1].childBlocks.find(
              (v) => v.name === `r${rIndex}-c${cIndex}`,
            );
            if (!lastChild) return;
            const lastChildBlockLength = editor.getChildBlockLength(lastChild.id) ?? 0;
            editor.setCaretPosition({
              blockId: blocks[currentBlockIndex - 1].id,
              childBlockId: lastChild.id,
              index: lastChildBlockLength,
              nextElementDirection: 'up',
            });
            setTimeout(() => editor.updateCaretRect(), 10);
            return;
          }

          editor.setCaretPosition({
            blockId: blocks[currentBlockIndex - 1].id,
            index: nextBlockLength,
            nextElementDirection: 'up',
          });
          setTimeout(() => editor.updateCaretRect(), 10);
          return;
        }
      }
      if (currentC === 0) {
        currentR--;
        currentC = block.attributes.tableC - 1;
      } else {
        currentC--;
      }
      const prevChild = block.childBlocks.find((v) => v.name === `r${currentR}-c${currentC}`);
      if (!prevChild) return;

      const prevBlockLength = editor.getChildBlockLength(prevChild.id) ?? 0;
      editor.setCaretPosition({
        blockId: block.id,
        childBlockId: prevChild.id,
        index: prevBlockLength,
      });
    }
    setTimeout(() => editor.updateCaretRect(), 10);
  }

  private _handleTableKeyRight(
    caretPosition: CaretPosition,
    editor: EditorController,
    event: React.KeyboardEvent,
  ) {
    const block = editor.getBlock(caretPosition.blockId);
    if (!caretPosition.childBlockId || !block) return;
    const childBlockIndex = block.childBlocks.findIndex((v) => v.id === caretPosition.childBlockId);
    if (childBlockIndex === -1 || !block.childBlocks[childBlockIndex].name) return;
    const match = block.childBlocks[childBlockIndex].name?.match(/^r([0-9]+)-c([0-9]+)/);

    if (!match) return;
    let currentR = Number(match[1]);
    let currentC = Number(match[2]);
    const blockLength = editor.getChildBlockLength(block.childBlocks[childBlockIndex].id);

    if (blockLength === null) return;
    if (blockLength === 0 || blockLength === caretPosition.index) {
      event.preventDefault();
      // １つ先のブロックへ飛ばす
      if (currentC === block.attributes.tableC - 1 && currentR === block.attributes.tableR - 1) {
        const blocks = editor.getBlocks();
        const currentBlockIndex = blocks.findIndex((v) => v.id === caretPosition.blockId);
        if (currentBlockIndex === -1 || currentBlockIndex >= blocks.length - 1) return;

        //次がtableの場合だけの処理
        if (blocks[currentBlockIndex + 1].type === 'TABLE') {
          const rIndex = 0;
          const cIndex = 0;
          const firstChild = blocks[currentBlockIndex + 1].childBlocks.find(
            (v) => v.name === `r${rIndex}-c${cIndex}`,
          );
          if (!firstChild) return;
          editor.setCaretPosition({
            blockId: blocks[currentBlockIndex + 1].id,
            childBlockId: firstChild.id,
            index: 0,
          });
          setTimeout(() => editor.updateCaretRect(), 10);
          return;
        }

        editor.setCaretPosition({
          blockId: blocks[currentBlockIndex + 1].id,
          index: 0,
        });
        setTimeout(() => editor.updateCaretRect(), 10);
        return;
      }

      if (currentC === block.attributes.tableC - 1) {
        currentR++;
        currentC = 0;
      } else {
        currentC++;
      }
      const nextChild = block.childBlocks.find((v) => v.name === `r${currentR}-c${currentC}`);
      if (!nextChild) return;

      editor.setCaretPosition({
        blockId: block.id,
        childBlockId: nextChild.id,
        index: 0,
      });
    }
    setTimeout(() => editor.updateCaretRect(), 10);
  }

  private _handleTableKeyUp(
    caretPosition: CaretPosition,
    editor: EditorController,
    event: React.KeyboardEvent,
  ) {
    if (!caretPosition.isTop) return;
    const block = editor.getBlock(caretPosition.blockId);
    if (!caretPosition.childBlockId || !block) return;
    const childBlockIndex = block.childBlocks.findIndex((v) => v.id === caretPosition.childBlockId);
    if (childBlockIndex === -1 || !block.childBlocks[childBlockIndex].name) return;
    const match = block.childBlocks[childBlockIndex].name?.match(/^r([0-9]+)-c([0-9]+)/);

    if (!match) return;
    let currentR = Number(match[1]);
    let currentC = Number(match[2]);

    if (currentR > 0) {
      const prevChild = block.childBlocks.find((v) => v.name === `r${currentR - 1}-c${currentC}`);
      if (!prevChild) return;
      const settings = editor.getSettings();
      const container = getHtmlElement(settings.scrollContainer);
      const prevChildEl = getBlockElementById(prevChild.id, true);
      if (!prevChildEl) return;

      // １つ前の要素が見切れてる場合は強制スクロール
      const prevChildRect = prevChildEl.getBoundingClientRect();
      if (prevChildRect.top < 0) {
        if (container) {
          container.scrollTop -= 40;
        } else {
          if (document.scrollingElement) {
            document.scrollingElement.scrollTop -= 40;
          }
        }
      }

      const prevChildBlockLength = editor.getChildBlockLength(prevChild.id) ?? 0;
      event.preventDefault();
      editor.setCaretPosition({
        blockId: block.id,
        childBlockId: prevChild.id,
        index: prevChildBlockLength,
        nextElementDirection: 'up',
      });
      editor.updateCaretRect();
      return;
    }

    if (editor.prev()) {
      event.preventDefault();
    } else {
      setTimeout(() => editor.updateCaretRect(), 10);
    }
  }

  private _handleTableKeyDown(
    caretPosition: CaretPosition,
    editor: EditorController,
    event: React.KeyboardEvent,
  ) {
    if (!caretPosition.isBottom) return;
    const block = editor.getBlock(caretPosition.blockId);
    if (!caretPosition.childBlockId || !block) return;
    const childBlockIndex = block.childBlocks.findIndex((v) => v.id === caretPosition.childBlockId);
    if (childBlockIndex === -1 || !block.childBlocks[childBlockIndex].name) return;
    const match = block.childBlocks[childBlockIndex].name?.match(/^r([0-9]+)-c([0-9]+)/);

    if (!match) return;
    let currentR = Number(match[1]);
    let currentC = Number(match[2]);
    if (currentR < block.attributes.tableR - 1) {
      const nextChild = block.childBlocks.find((v) => v.name === `r${currentR + 1}-c${currentC}`);
      if (!nextChild) return;
      const settings = editor.getSettings();
      const container = getHtmlElement(settings.scrollContainer);
      const nextChildEl = getBlockElementById(nextChild.id, true);
      if (!nextChildEl) return;

      // １つ先の要素が見切れてる場合は強制スクロール
      const nextChildRect = nextChildEl.getBoundingClientRect();
      if (container) {
        const containerRect = container.getBoundingClientRect();
        if (nextChildRect.top + nextChildRect.height >= containerRect.top + containerRect.height) {
          container.scrollTop += nextChildRect.height;
        }
      } else {
        if (document.scrollingElement) {
          document.scrollingElement.scrollTop += nextChildRect.height;
        }
      }

      const prevChildBlockLength = editor.getChildBlockLength(nextChild.id) ?? 0;
      event.preventDefault();
      editor.setCaretPosition({
        blockId: block.id,
        childBlockId: nextChild.id,
        index: prevChildBlockLength,
      });
      editor.updateCaretRect();

      return;
    }

    if (editor.next()) {
      event.preventDefault();
    } else {
      setTimeout(() => editor.updateCaretRect(), 10);
    }
  }

  private _handleTableEnter(caretPosition: CaretPosition, editor: EditorController) {
    if (this.composing) {
      return;
    }
  }

  private _handleTableTab(caretPosition: CaretPosition, editor: EditorController) {
    const block = editor.getBlock(caretPosition.blockId);
    if (!caretPosition.childBlockId || !block) return;
    const childBlockIndex = block.childBlocks.findIndex((v) => v.id === caretPosition.childBlockId);
    if (childBlockIndex === -1 || !block.childBlocks[childBlockIndex].name) return;
    const match = block.childBlocks[childBlockIndex].name?.match(/^r([0-9]+)-c([0-9]+)/);

    if (!match) return;
    let currentR = Number(match[1]);
    let currentC = Number(match[2]);

    // １つ前のセルへ移動
    if (currentR === block.attributes.tableR - 1 && currentC === block.attributes.tableC - 1)
      return;
    if (currentC === block.attributes.tableC - 1) {
      currentR++;
      currentC = 0;
    } else {
      currentC++;
    }
    const nextChild = block.childBlocks.find((v) => v.name === `r${currentR}-c${currentC}`);
    if (!nextChild) return;

    const nextBlockLength = editor.getChildBlockLength(nextChild.id) ?? 0;

    editor.setCaretPosition({
      blockId: block.id,
      childBlockId: nextChild.id,
      index: nextBlockLength,
    });
  }

  private _handleTableShiftTab(caretPosition: CaretPosition, editor: EditorController) {
    const block = editor.getBlock(caretPosition.blockId);
    if (!caretPosition.childBlockId || !block) return;
    const childBlockIndex = block.childBlocks.findIndex((v) => v.id === caretPosition.childBlockId);
    if (childBlockIndex === -1 || !block.childBlocks[childBlockIndex].name) return;
    const match = block.childBlocks[childBlockIndex].name?.match(/^r([0-9]+)-c([0-9]+)/);

    if (!match) return;
    let currentR = Number(match[1]);
    let currentC = Number(match[2]);

    // １つ先のセルへ移動
    if (currentR === 0 && currentC === 0) return;
    if (currentC === 0) {
      currentR--;
      currentC = block.attributes.tableC - 1;
    } else {
      currentC--;
    }
    const nextChild = block.childBlocks.find((v) => v.name === `r${currentR}-c${currentC}`);
    if (!nextChild) return;

    const nextBlockLength = editor.getChildBlockLength(nextChild.id) ?? 0;

    editor.setCaretPosition({
      blockId: block.id,
      childBlockId: nextChild.id,
      index: nextBlockLength,
    });
  }
}
