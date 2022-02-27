import { Subscription } from 'rxjs';
import { nanoid } from 'nanoid';
import { Module } from '../types/module';
import { EventEmitter } from '../utils/event-emitter';
import { EditorController } from '../types/editor';
import { EditorEvents } from '../constants';
import { Block } from '../types/block';
import { convertBlocksToText } from '../utils/block';

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
          range.setStart(this.clipboardEl, 0);
          range.setEnd(this.clipboardEl, 0);
          selection?.addRange(range);
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
    const blocks = this.editor.getBlocks();
    const prevBlock = blocks.find((block) => block.id === caretPosition?.blockId);

    if (prevBlock && event.clipboardData.getData('text/shibuya-formats')) {
      const appendBlocks = JSON.parse(
        event.clipboardData.getData('text/shibuya-formats'),
      ) as Block[];
      let prevBlockId = prevBlock.id;
      const affectedIds = appendBlocks.map((v, i) => {
        const appendBlock = { ...v, id: nanoid() };
        this.editor.createBlock(appendBlock, prevBlockId);
        prevBlockId = appendBlock.id;
        return appendBlock.id;
      });
      this.editor.render(affectedIds);
      setTimeout(() => {
        const textIndex = this.editor.getBlockLength(prevBlockId) ?? 0;
        this.editor.setCaretPosition({
          blockId: prevBlockId,
          index: textIndex,
        });
        this.editor.updateCaretRect();
      });
    }
  }

  onCopy(event: React.ClipboardEvent) {
    event.preventDefault();
    const selectedBlocks = this.editor.getModule('selector').getSelectedBlocks();
    this._save(event.nativeEvent, selectedBlocks);
  }

  onCut(event: React.ClipboardEvent) {
    event.preventDefault();
    const selectedBlocks = this.editor.getModule('selector').getSelectedBlocks();
    if (selectedBlocks.length < 1) return;
    this._save(event.nativeEvent, selectedBlocks);
    this.editor.getModule('editor').deleteBlocks(selectedBlocks.map((block) => block.id));
    this.editor.getModule('selector').reset();
  }

  private _save(event: ClipboardEvent, blocks: Block[]) {
    if (event.clipboardData) {
      event.clipboardData.setData('text/plain', convertBlocksToText(blocks));
      event.clipboardData.setData('text/shibuya-formats', JSON.stringify(blocks));
    }
  }
}
