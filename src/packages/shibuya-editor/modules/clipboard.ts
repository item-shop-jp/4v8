import { Subscription } from 'rxjs';
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
  onCopy: (e: ClipboardEvent) => void;
  onCut: (e: ClipboardEvent) => void;
  private eventEmitter;
  private editor;
  private editorRef;
  private clipboardEl: HTMLElement | null = null;
  private subs = new Subscription();

  constructor({ eventEmitter, editor }: Props) {
    this.editor = editor;
    this.editorRef = this.editor.getEditorRef();
    this.eventEmitter = eventEmitter;
    this.onCopy = this._onCopy.bind(this);
    this.onCut = this._onCut.bind(this);
  }

  onInit() {
    this.eventEmitter.info('init clipboard module');
    const editorRef = this.editor.getEditorRef();
    this.clipboardEl = editorRef?.parentElement?.querySelector('.clipboard') ?? null;
    if (this.clipboardEl) {
      this.clipboardEl.addEventListener('copy', this.onCopy, true);
      this.clipboardEl.addEventListener('cut', this.onCut, true);
    }
    this.subs.add(
      this.eventEmitter
        .select(EditorEvents.EVENT_BLOCK_SELECTED)
        .subscribe((blockIds: string[]) => {
          if (!this.clipboardEl) return;
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
    if (this.clipboardEl) {
      this.clipboardEl.removeEventListener('copy', this.onCopy, true);
      this.clipboardEl.removeEventListener('cut', this.onCut, true);
    }
    this.subs.unsubscribe();
  }

  onPaste(event: ClipboardEvent) {
    event.preventDefault();
    if (event.clipboardData) {
      console.log(event.clipboardData.getData('text/shibuya-formats'));
    }
  }

  private _save(event: ClipboardEvent, blocks: Block[]) {
    const clipboard = `<div shibuya-clipboard='${JSON.stringify(blocks)}' />`;
    if (event.clipboardData) {
      //event.clipboardData.setData('text/html', htmlClipboard);
      event.clipboardData.setData('text/plain', convertBlocksToText(blocks));
      event.clipboardData.setData('text/shibuya-formats', clipboard);
    }
  }

  private _onCopy(event: ClipboardEvent) {
    event.preventDefault();
    const selectedBlocks = this.editor.getModule('selector').getSelectedBlocks();
    this._save(event, selectedBlocks);
    console.log('copy', selectedBlocks);
  }

  private _onCut(event: ClipboardEvent) {
    event.preventDefault();
    const selectedBlocks = this.editor.getModule('selector').getSelectedBlocks();
    this._save(event, selectedBlocks);
    console.log('cut', selectedBlocks);
  }
}
