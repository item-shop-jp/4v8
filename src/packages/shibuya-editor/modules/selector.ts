import * as React from 'react';
import { throttle } from 'throttle-debounce';
import { Module } from '../types/module';
import { EventEmitter } from '../utils/event-emitter';
import { EditorController } from '../types/editor';
import { getBlockId, getBlockElementById } from '../utils/block';
import { KeyCodes, EditorEvents } from '../constants';
import { Block } from '../types/block';
import { copyObject } from '../utils/object';

const ShortKey = /Mac/i.test(navigator.platform) ? 'metaKey' : 'ctrlKey';

interface Props {
  eventEmitter: EventEmitter;
  editor: EditorController;
}

interface Position {
  start: string | null;
  end: string | null;
}

interface KeyBindingProps {
  key: string;
  formats?: string[];
  shortKey?: boolean;
  metaKey?: boolean;
  ctrlKey?: boolean;
  shiftKey?: boolean;
  altKey?: boolean;
  prevented?: boolean;
  handler: (editor: EditorController, event: React.KeyboardEvent) => void;
}

export class SelectorModule implements Module {
  private eventEmitter;
  private editor;
  private startBlockId: string | null = null;
  private enabled = false;
  private mousePressed = false;
  private changed = false;
  private selectedBlocks: Block[] = [];
  private bindings: KeyBindingProps[] = [];

  mouseMove = throttle(20, (e: MouseEvent) => {
    if (!this.mousePressed) return;
    const blocks = this.editor.getBlocks();
    const startIndex = blocks.findIndex((v) => v.id === this.startBlockId);
    if (startIndex === -1) return;
    const [blockId] = getBlockId(e.target as HTMLElement);
    let blockIds: string[] = [];
    let selectedBlocks: Block[] = [];
    const blockIndex = blocks.findIndex((v) => v.id === blockId);
    if (!blockId || blockIndex === -1) {
      const startEl = getBlockElementById(blocks[startIndex].id);
      const startTop = startEl?.getBoundingClientRect()?.top ?? 0;
      const isUpward = startTop > e.clientY;

      if (isUpward) {
        for (let i = startIndex; i >= 0; i--) {
          const blockEl = getBlockElementById(blocks[i].id);
          const rect = blockEl?.getBoundingClientRect();

          if (rect && rect.top + rect.height > e.clientY) {
            blockIds.push(blocks[i].id);
          } else {
            break;
          }
        }
      } else {
        for (let i = startIndex; i < blocks.length; i++) {
          const blockEl = getBlockElementById(blocks[i].id);
          const rect = blockEl?.getBoundingClientRect();
          if (rect && rect.top < e.clientY) {
            blockIds.push(blocks[i].id);
          } else {
            break;
          }
        }
      }
      selectedBlocks = copyObject(blocks.filter((v) => blockIds.includes(v.id)));
    } else {
      const endIndex = blocks.findIndex((v) => v.id === blockId);
      if (startIndex > endIndex) {
        selectedBlocks = copyObject(blocks.slice(endIndex, startIndex + 1));
        blockIds = selectedBlocks.map((v) => v.id);
      } else {
        selectedBlocks = copyObject(blocks.slice(startIndex, endIndex + 1));
        blockIds = selectedBlocks.map((v) => v.id);
      }
    }

    if (!this.enabled && blockIds.length > 1) {
      this.enabled = true;
      this.changed = true;
      this.editor.blur();
    }

    if (this.enabled) {
      this.selectBlocks(selectedBlocks);
    }
  });

  constructor({ eventEmitter, editor }: Props) {
    this.editor = editor;
    this.eventEmitter = eventEmitter;
  }

  selectBlocks(blocks: Block[]) {
    this.selectedBlocks = blocks;
    this.sendBlockSelectedEvent(blocks.map((v) => v.id));
  }

  setStart(id: string) {
    this.startBlockId = id;
  }

  sendBlockSelectedEvent(blockIds: string[]) {
    this.eventEmitter.emit(EditorEvents.EVENT_BLOCK_SELECTED, blockIds);
  }

  onInit() {
    this.eventEmitter.info('init selector module');

    this.addBinding({
      key: KeyCodes.BACKSPACE,
      prevented: true,
      handler: this._handleBackspace.bind(this),
    });

    this.addBinding({
      key: KeyCodes.ARROW_UP,
      prevented: true,
      shiftKey: true,
      handler: this._handleSelectorUp.bind(this),
    });

    this.addBinding({
      key: KeyCodes.ARROW_DOWN,
      prevented: true,
      shiftKey: true,
      handler: this._handleSelectorDown.bind(this),
    });

    this.addBinding({
      key: KeyCodes.ARROW_UP,
      handler: this._handleKeyUp.bind(this),
    });
    this.addBinding({
      key: KeyCodes.ARROW_DOWN,
      handler: this._handleKeyDown.bind(this),
    });
    this.addBinding({
      key: KeyCodes.ARROW_LEFT,
      handler: this._handleReset.bind(this),
    });
    this.addBinding({
      key: KeyCodes.ARROW_RIGHT,
      handler: this._handleReset.bind(this),
    });

    this.addBinding({
      key: KeyCodes.A,
      shortKey: true,
      handler: this._handleSelectAll.bind(this),
    });
  }

  onDestroy() {
    this.eventEmitter.info('destroy selector module');
  }

  mouseDown(e: MouseEvent) {
    if (e.shiftKey && this.startBlockId) {
      const blocks = this.editor.getBlocks();
      const [blockId] = getBlockId(e.target as HTMLElement);
      const startIndex = blocks.findIndex((v) => v.id === this.startBlockId);
      const endIndex = blocks.findIndex((v) => v.id === blockId);
      if (startIndex === -1 || endIndex === -1) return;
      this.selectBlocks(
        blocks.slice(
          startIndex < endIndex ? startIndex : endIndex,
          (endIndex > startIndex ? endIndex : startIndex) + 1,
        ),
      );
      return;
    }
    this.reset();
    const [blockId] = getBlockId(e.target as HTMLElement);
    if (!blockId) return;
    this.mousePressed = true;
    this.startBlockId = blockId;
  }

  mouseUp(e: MouseEvent) {
    this.mousePressed = false;

    setTimeout(() => {
      this.changed = false;
    });
  }

  reset() {
    if (this.changed) return;
    this.mousePressed = false;
    this.enabled = false;
    this.startBlockId = null;
    this.selectedBlocks = [];
    this.sendBlockSelectedEvent([]);
  }

  getSelectedBlocks() {
    return this.selectedBlocks;
  }

  addBinding(props: KeyBindingProps) {
    this.bindings.push(props);
  }

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

  private _trigger(e: React.KeyboardEvent, props: KeyBindingProps): boolean {
    const {
      key,
      metaKey = false,
      ctrlKey = false,
      shiftKey = false,
      shortKey = false,
      altKey = false,
      prevented = false,
      handler,
    } = props;
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

    if (key !== e.code) return false;

    handler(this.editor, e);

    return prevented;
  }

  private _handleBackspace(editor: EditorController) {
    const selectedBlocks = editor.getModule('selector').getSelectedBlocks();
    if (selectedBlocks.length < 1) return;
    editor.getModule('editor').deleteBlocks(selectedBlocks.map((block) => block.id));
    this.reset();
  }

  private _handleSelectorUp() {
    const blocks = this.editor.getBlocks();
    const startIndex = this.selectedBlocks.findIndex((v) => v.id === this.startBlockId);
    if (startIndex === -1) return;
    if (startIndex === this.selectedBlocks.length - 1) {
      const index = blocks.findIndex((v) => this.selectedBlocks[0].id === v.id);
      if (index === -1 || !blocks[index - 1]) return;
      this.selectBlocks([blocks[index - 1], ...this.selectedBlocks]);
    } else {
      this.selectBlocks(this.selectedBlocks.slice(0, -1));
    }
  }

  private _handleSelectorDown() {
    const blocks = this.editor.getBlocks();
    const startIndex = this.selectedBlocks.findIndex((v) => v.id === this.startBlockId);
    if (startIndex === -1) return;
    if (startIndex === 0) {
      const index = blocks.findIndex(
        (v) => this.selectedBlocks[this.selectedBlocks.length - 1].id === v.id,
      );
      if (index === -1 || !blocks[index + 1]) return;
      this.selectBlocks([...this.selectedBlocks, blocks[index + 1]]);
    } else {
      this.selectBlocks(this.selectedBlocks.slice(1));
    }
  }

  private _handleReset(editor: EditorController, e: React.KeyboardEvent) {
    e.preventDefault();
    if (this.startBlockId) {
      const length = this.editor.getBlockLength(this.startBlockId);
      editor.setCaretPosition({
        blockId: this.startBlockId,
        index: length ?? 0,
      });
      editor.updateCaretRect();
    }
    this.reset();
  }

  private _handleKeyUp(editor: EditorController, e: React.KeyboardEvent) {
    e.preventDefault();
    if (this.selectedBlocks.length < 1) return;
    if (this.selectedBlocks.length > 1) {
      this.selectBlocks(this.selectedBlocks.filter((v) => v.id === this.startBlockId));
      return;
    }
    const blocks = this.editor.getBlocks();
    const currentIndex = blocks.findIndex((v) => v.id === this.startBlockId);

    if (currentIndex === -1 || currentIndex < 1) return;
    const nextBlock = blocks[currentIndex - 1];
    this.startBlockId = nextBlock.id;
    this.selectBlocks([nextBlock]);
  }

  private _handleKeyDown(editor: EditorController, e: React.KeyboardEvent) {
    e.preventDefault();
    if (this.selectedBlocks.length < 1) return;
    if (this.selectedBlocks.length > 1) {
      this.selectBlocks(this.selectedBlocks.filter((v) => v.id === this.startBlockId));
      return;
    }

    const blocks = this.editor.getBlocks();
    const currentIndex = blocks.findIndex((v) => v.id === this.startBlockId);

    if (currentIndex === -1 || currentIndex >= blocks.length - 1) return;
    const nextBlock = blocks[currentIndex + 1];
    this.startBlockId = nextBlock.id;
    this.selectBlocks([nextBlock]);
  }

  private _handleSelectAll(editor: EditorController, event: React.KeyboardEvent) {
    const blocks = editor.getBlocks();
    event.preventDefault();
    editor.getModule('selector').selectBlocks(blocks);
    return;
  }
}
