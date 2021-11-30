import { throttle } from 'throttle-debounce';
import { Module } from '../types/module';
import { EventEmitter } from '../utils/event-emitter';
import { EditorController } from '../hooks/use-editor';
import { getBlockId } from '../utils/block';

interface Props {
  eventEmitter: EventEmitter;
  editor: EditorController;
}

interface Position {
  start: string | null;
  end: string | null;
}

export class SelectorModule implements Module {
  private eventEmitter;
  private editor;
  private position: Position = { start: null, end: null };
  private enabled = false;

  mouseMove = throttle(200, (e: MouseEvent) => {
    console.log(this.enabled);
    if (!this.enabled) return;
    const [blockId] = getBlockId(e.target as HTMLElement);
    if (!blockId) return;
    this.position.end = blockId;
    const blocks = this.editor.getBlocks();
    const startIndex = blocks.findIndex((v) => v.id === this.position.start);
    const endIndex = blocks.findIndex((v) => v.id === this.position.end);
    console.log(startIndex, endIndex);
  });

  constructor({ eventEmitter, editor }: Props) {
    this.editor = editor;
    this.eventEmitter = eventEmitter;
  }

  onInit() {
    this.eventEmitter.info('init selector module');
  }

  onDestroy() {
    this.eventEmitter.info('destroy selector module');
  }

  mouseDown(e: MouseEvent) {
    const [blockId] = getBlockId(e.target as HTMLElement);
    if (!blockId) return;
    this.enabled = true;
    this.position.start = blockId;
  }

  mouseUp(e: MouseEvent) {
    this.enabled = false;
  }

  reset() {
    this.position = { start: null, end: null };
  }
}
