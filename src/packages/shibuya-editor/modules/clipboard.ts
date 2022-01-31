import { Module } from '../types/module';
import { EventEmitter } from '../utils/event-emitter';
import { EditorController } from '../types/editor';

interface Props {
  eventEmitter: EventEmitter;
  editor: EditorController;
}

export class ClipboardModule implements Module {
  private eventEmitter;
  private editor;
  private editorRef;

  constructor({ eventEmitter, editor }: Props) {
    this.editor = editor;
    this.editorRef = this.editor.getEditorRef();
    this.eventEmitter = eventEmitter;
  }

  onInit() {
    this.eventEmitter.info('init clipboard module');
    if (this.editorRef) {
      this.editorRef.addEventListener('copy', this.onCopy.bind(this));
    }
  }

  onDestroy() {
    this.eventEmitter.info('destroy clipboard module');
    if (this.editorRef) {
      this.editorRef.removeEventListener('copy', this.onCopy.bind(this));
    }
  }

  onCopy(event: ClipboardEvent) {
    console.log('copy');
    const selectedBlocks = this.editor.getModule('selector').getSelectedBlocks();
    if (selectedBlocks.length > 0) {
      event.preventDefault();
    }
    console.log('selected', selectedBlocks);
  }
}
