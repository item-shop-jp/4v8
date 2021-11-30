import { throttle } from 'throttle-debounce';
import { Module } from '../types/module';
import { EventEmitter } from '../utils/event-emitter';
import { EditorController } from '../hooks/use-editor';
import { getBlockId, getBlockElementById } from '../utils/block';
import { EditorEvents } from '../constants';

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
    if (!this.enabled) return;
    const blocks = this.editor.getBlocks();
    const startIndex = blocks.findIndex((v) => v.id === this.position.start);
    const [blockId] = getBlockId(e.target as HTMLElement);
    if (!blockId) {
      const startEl = getBlockElementById(blocks[startIndex].id);
      const startTop = startEl?.getBoundingClientRect()?.top ?? 0;
      const isUpward = startTop > e.clientY;
      let blockIds = [];
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

      this.sendBlockSelectedEvent(blockIds);
      return;
    }

    this.position.end = blockId;

    const endIndex = blocks.findIndex((v) => v.id === this.position.end);

    if (startIndex > endIndex) {
      this.sendBlockSelectedEvent(blocks.slice(endIndex, startIndex + 1).map((v) => v.id));
    } else {
      this.sendBlockSelectedEvent(blocks.slice(startIndex, endIndex + 1).map((v) => v.id));
    }
  });

  constructor({ eventEmitter, editor }: Props) {
    this.editor = editor;
    this.eventEmitter = eventEmitter;
  }

  sendBlockSelectedEvent(blockIds: string[]) {
    this.eventEmitter.emit(EditorEvents.EVENT_BLOCK_SELECTED, blockIds);
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
    this.enabled = false;
    this.position = { start: null, end: null };
  }
}
