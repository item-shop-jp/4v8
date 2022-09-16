import * as React from 'react';
import { Subscription } from 'rxjs';
import { nanoid } from 'nanoid';
import { Module } from '../types/module';
import { EventEmitter } from '../utils/event-emitter';
import { EditorController } from '../types/editor';
import { EditorEvents } from '../constants';
import { Block } from '../types/block';
import {
  convertBlocksToText,
  deleteInlineContents,
  getInlineContents,
  splitInlineContents,
} from '../utils/block';
import { Inline } from '../types/inline';
import stringLength from 'string-length';
import { createInline } from '../utils/inline';

interface Props {
  eventEmitter: EventEmitter;
  editor: EditorController;
}

export class ClipboardModule implements Module {
  private eventEmitter;
  private editor;
  private editorRef;
  private clipboardEl: HTMLElement | null = null;
  private subs = new Subscription();

  constructor({ eventEmitter, editor }: Props) {
    this.editor = editor;
    this.editorRef = this.editor.getEditorRef();
    this.eventEmitter = eventEmitter;
  }

  onInit() {
    this.eventEmitter.info('init clipboard module');
    const editorRef = this.editor.getEditorRef();
    this.clipboardEl = editorRef?.parentElement?.querySelector('.clipboard') ?? null;
    this.subs.add(
      this.eventEmitter
        .select(EditorEvents.EVENT_BLOCK_SELECTED)
        .subscribe((blockIds: string[]) => {
          if (!this.clipboardEl || blockIds.length < 1) return;
          const range = new Range();
          const selection = document.getSelection();
          if (!selection) return;
          range.setStart(this.clipboardEl, 0);
          range.setEnd(this.clipboardEl, 0);
          selection.removeAllRanges();
          selection.addRange(range);
        }),
    );
  }

  onDestroy() {
    this.eventEmitter.info('destroy clipboard module');
    this.subs.unsubscribe();
  }

  onPaste(event: React.ClipboardEvent) {
    event.preventDefault();
    const caretPosition = this.editor.getCaretPosition();

    const dataTransferItems = event.clipboardData.items ?? [];
    const files: File[] = [];
    for (let i = 0; i < dataTransferItems.length; i++) {
      const file = dataTransferItems[i].getAsFile();
      if (file) files.push(file);
    }

    // file upload
    if (files.length > 0) {
      this.editor.getModule('uploader').upload(files);
      return;
    }

    const clipboardJson = event.clipboardData.getData('text/shibuya-formats');
    const prevBlock = this.editor.getBlock(caretPosition?.blockId ?? '');
    if (caretPosition && prevBlock && clipboardJson) {
      const { type, data } = JSON.parse(clipboardJson);

      // blocks
      if (prevBlock && type === 'blocks') {
        const appendBlocks = data as Block[];
        let prevBlockId = prevBlock.id;
        const affectedIds = appendBlocks.map((v, i) => {
          const appendBlock = { ...v, id: nanoid() };
          this.editor.createBlock(appendBlock, prevBlockId);
          prevBlockId = appendBlock.id;
          return appendBlock.id;
        });
        this.editor.numberingList();
        this.editor.render(affectedIds);
        setTimeout(() => {
          const textIndex = this.editor.getBlockLength(prevBlockId) ?? 0;
          this.editor.setCaretPosition({
            blockId: prevBlockId,
            index: textIndex,
          });
          this.editor.updateCaretRect();
        }, 10);
      } else if (type === 'inlines') {
        const inlineContents = data as Inline[];
        const [first, last] = splitInlineContents(prevBlock.contents, caretPosition.index);
        const appendTextLength = stringLength(
          inlineContents
            .map((v) => v.text)
            .join('')
            .replaceAll(/\uFEFF/gi, ''),
        );
        this.editor.updateBlock({
          ...prevBlock,
          contents: [
            ...first,
            ...inlineContents.map((v) => {
              return { ...v, id: nanoid() };
            }),
            ...last,
          ],
        });
        this.editor.render([prevBlock.id]);
        setTimeout(() => {
          this.editor.setCaretPosition({
            blockId: prevBlock.id,
            index: caretPosition.index + appendTextLength,
          });
          this.editor.updateCaretRect();
        }, 10);
      }
      return;
    }

    const clipboardText = event.clipboardData.getData('text/plain');
    if (prevBlock && caretPosition && clipboardText.length > 0) {
      const [first, last] = splitInlineContents(prevBlock.contents, caretPosition.index);
      const appendContent = createInline('TEXT', clipboardText);
      this.editor.updateBlock({
        ...prevBlock,
        contents: [...first, appendContent, ...last],
      });
      this.editor.render([prevBlock.id]);
      setTimeout(() => {
        this.editor.setCaretPosition({
          blockId: prevBlock.id,
          index: caretPosition.index + stringLength(clipboardText),
        });
        this.editor.updateCaretRect();
      }, 10);
      return;
    }
  }

  onCopy(event: React.ClipboardEvent) {
    event.preventDefault();
    const selectedBlocks = this.editor.getModule('selector').getSelectedBlocks();
    if (selectedBlocks.length > 0) {
      // block
      this._saveBlocks(event.nativeEvent, selectedBlocks);
    } else {
      // inline
      const caretPosition = this.editor.getCaretPosition();
      const block = this.editor.getBlock(caretPosition?.blockId ?? '');
      if (block && caretPosition && !caretPosition.collapsed && caretPosition.length > 0) {
        const inlineContents = getInlineContents(
          block.contents,
          caretPosition.index,
          caretPosition.length,
        );
        this._saveInlineContents(event.nativeEvent, inlineContents);
      }
    }
  }

  onCut(event: React.ClipboardEvent) {
    event.preventDefault();
    const caretPosition = this.editor.getCaretPosition();
    const selectedBlocks = this.editor.getModule('selector').getSelectedBlocks();
    if (selectedBlocks.length > 0) {
      // block
      this._saveBlocks(event.nativeEvent, selectedBlocks);
      this.editor.getModule('editor').deleteBlocks(selectedBlocks.map((block) => block.id));
      this.editor.getModule('selector').reset();
    } else if (caretPosition && !caretPosition.collapsed && caretPosition.length > 0) {
      // inline
      const block = this.editor.getBlock(caretPosition?.blockId ?? '');
      if (block) {
        const caretIndex = caretPosition.index;
        const inlineContents = getInlineContents(
          block.contents,
          caretPosition.index,
          caretPosition.length,
        );
        this._saveInlineContents(event.nativeEvent, inlineContents);
        const deletedContents = deleteInlineContents(
          block.contents,
          caretPosition.index,
          caretPosition.length,
        );
        this.editor.updateBlock({ ...block, contents: deletedContents });
        this.editor.blur();
        this.editor.render([block.id]);
        setTimeout(() => {
          this.editor.setCaretPosition({ blockId: block.id, index: caretIndex });
          this.editor.updateCaretRect();
        }, 10);
      }
    }
  }

  private _saveBlocks(event: ClipboardEvent, blocks: Block[]) {
    if (event.clipboardData) {
      event.clipboardData.setData('text/plain', convertBlocksToText(blocks));
      event.clipboardData.setData(
        'text/shibuya-formats',
        JSON.stringify({ type: 'blocks', data: blocks }),
      );
    }
  }

  private _saveInlineContents(event: ClipboardEvent, inlines: Inline[]) {
    if (event.clipboardData) {
      const plainText = inlines.map((v) => v.text).join('');
      event.clipboardData.setData('text/plain', plainText);
      event.clipboardData.setData(
        'text/shibuya-formats',
        JSON.stringify({
          type: 'inlines',
          data: inlines,
        }),
      );
    }
  }
}
