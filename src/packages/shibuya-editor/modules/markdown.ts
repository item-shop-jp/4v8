import stringLength from 'string-length';
import * as otText from 'ot-text-unicode';
import { Module } from '../types/module';
import { EventEmitter } from '../utils/event-emitter';
import { EditorController } from '../types/editor';
import { CaretPosition } from '../types/caret';
import { deleteInlineContents, setAttributesForInlineContents } from '../utils/block';
import { BlockType } from '../types/block';
import { InlineAttributes } from '../types/inline';
import { copyObject } from '../utils/object';
import { EventSources } from '../constants';

interface Props {
  eventEmitter: EventEmitter;
  editor: EditorController;
}

interface MarkdownShortcutProps {
  name?: string;
  type: 'block' | 'inline';
  pattern: RegExp;
  handler: (range: CaretPosition, match: RegExpMatchArray) => void;
}

export class MarkdownShortcutModule implements Module {
  private eventEmitter;
  private editor;
  private shortcuts: MarkdownShortcutProps[];

  constructor({ eventEmitter, editor }: Props) {
    this.editor = editor;
    this.eventEmitter = eventEmitter;
    this.shortcuts = [];
  }

  onInit() {
    this.eventEmitter.info('init markdown module');

    this.addShortcut({
      name: 'blockquote',
      type: 'block',
      pattern: /^>$/,
      handler: this._handleBlockquote.bind(this),
    });

    this.addShortcut({
      name: 'header',
      type: 'block',
      pattern: /^#{1,6}$/,
      handler: this._handleHeader.bind(this),
    });

    this.addShortcut({
      name: 'bold',
      type: 'inline',
      pattern: /(.*)((?:\*|_){2})(.+?)((?:\*|_){2})/,
      handler: this._handleBold.bind(this),
    });
  }

  onDestroy() {
    this.eventEmitter.info('destroy markdown module');
  }

  addShortcut(props: MarkdownShortcutProps) {
    this.shortcuts.push(props);
  }

  execute(): boolean {
    let isExecuted = false;
    const caret = this.editor.getCaretPosition();
    if (!caret) return isExecuted;
    const block = this.editor.getBlock(caret.blockId);
    if (!block) return isExecuted;
    let targetText = block.contents.map((v) => v.text).join('');
    const targetLength = stringLength(targetText) - caret.index;
    if (targetLength > 0) {
      const removeOp = otText.remove(caret.index, targetLength);
      targetText = otText.type.apply(targetText, removeOp);
    }

    this.shortcuts.forEach((shortcut) => {
      const match = targetText.match(shortcut.pattern);
      if (match) {
        shortcut.handler(caret, match);
        isExecuted = true;
      }
    });
    return isExecuted;
  }

  formatInline(
    blockId: string,
    index: number,
    openeTagLength: number,
    contentLength: number,
    closeTagLength: number,
    attributes: InlineAttributes,
  ) {
    const block = this.editor.getBlock(blockId);
    if (!block) return;
    const deletedContents = deleteInlineContents(
      deleteInlineContents(block.contents, index, openeTagLength),
      index + contentLength,
      closeTagLength,
    );
    this.editor.updateBlock({
      ...block,
      contents: deletedContents,
    });
    const formatedContents = setAttributesForInlineContents(
      copyObject(deletedContents),
      attributes,
      index,
      contentLength,
    );
    this.editor.updateBlock({
      ...block,
      contents: formatedContents,
    });
    this.editor.render([block.id], true);
    setTimeout(() => {
      this.editor.setCaretPosition({
        blockId: block.id,
        index: index + contentLength,
      });
    }, 10);
  }

  formatBlock(blockId: string, type: BlockType, index: number, length: number) {
    const block = this.editor.getBlock(blockId);
    if (!block) return;
    this.editor.updateBlock({
      ...block,
      contents: deleteInlineContents(block.contents, index, length),
      type,
    });
    this.editor.numberingList();
    this.editor.render([block.id]);
    setTimeout(() => {
      this.editor.setCaretPosition({
        blockId: block.id,
        index,
      });
    }, 10);
  }

  private _handleBlockquote(caret: CaretPosition, match: RegExpMatchArray) {
    this.formatBlock(caret.blockId, 'BLOCKQUOTE', 0, stringLength(match[0]));
  }

  private _handleHeader(caret: CaretPosition, match: RegExpMatchArray) {
    const length = stringLength(match[0]);
    switch (length) {
      case 1:
        this.formatBlock(caret.blockId, 'HEADER1', 0, length);
        break;
      case 2:
        this.formatBlock(caret.blockId, 'HEADER2', 0, length);
        break;
      case 3:
        this.formatBlock(caret.blockId, 'HEADER3', 0, length);
        break;
      case 4:
        this.formatBlock(caret.blockId, 'HEADER4', 0, length);
        break;
      case 5:
        this.formatBlock(caret.blockId, 'HEADER5', 0, length);
        break;
      case 6:
        this.formatBlock(caret.blockId, 'HEADER6', 0, length);
        break;
    }
  }

  private _handleBold(caret: CaretPosition, match: RegExpMatchArray) {
    const index = stringLength(match[1]);
    const openeTagLength = stringLength(match[2]);
    const contentLength = stringLength(match[3]);
    const closeTagLength = stringLength(match[4]);
    setTimeout(() => {
      this.formatInline(caret.blockId, index, openeTagLength, contentLength, closeTagLength, {
        bold: true,
      });
    }, 10);
  }
}
