import { Module } from '../types/module';
import { EventEmitter } from '../utils/event-emitter';
import { EditorController } from '../types/editor';
import { caretRangeFromPoint } from '../utils/range';

interface Props {
  eventEmitter: EventEmitter;
  editor: EditorController;
}

export class DragDropModule implements Module {
  private eventEmitter;
  private editor;

  constructor({ eventEmitter, editor }: Props) {
    this.editor = editor;
    this.eventEmitter = eventEmitter;
  }

  onInit() {
    this.eventEmitter.info('init dnd module');
  }

  onDestroy() {
    this.eventEmitter.info('destroy dnd module');
  }

  handleDrop(e: DragEvent) {
    e.preventDefault();

    if (!e.dataTransfer || !e.dataTransfer.files || e.dataTransfer.files.length < 1) return;

    const selection = document.getSelection();
    const range = caretRangeFromPoint(e.clientX, e.clientY);
    if (selection && range) {
      selection.setBaseAndExtent(
        range.startContainer,
        range.startOffset,
        range.startContainer,
        range.startOffset,
      );
    }
    this.editor.updateCaretPositionRef();

    const files = Array.from(e.dataTransfer.files);
    this.editor.getModule('uploader').upload(files);
  }
}
