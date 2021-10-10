import { Subscription } from 'rxjs';
import { EventEmitter } from '../utils/event-emitter';
import { createBlock, splitInlineContents } from '../utils/block';
import { createlineBreak, createInline } from '../utils/inline';
import { EditorEvents } from '../constants';
import { Module } from '../types/module';
import { EditorController } from '../hooks/use-editor';

interface Props {
  eventEmitter: EventEmitter;
  editor: EditorController;
}

export class EditorModule implements Module {
  private eventEmitter;
  private editor;
  private subs: Subscription;

  constructor({ eventEmitter, editor }: Props) {
    this.subs = new Subscription();
    this.eventEmitter = eventEmitter;
    this.editor = editor;
  }

  onInit() {
    this.eventEmitter.info('init editor module');
    const blocks = this.editor.getBlocks();
    if (blocks.length < 1) {
      this.createBlock();
    }
  }

  onDestroy() {
    this.eventEmitter.info('destory editor module');
    setTimeout(() => this.subs.unsubscribe());
  }

  createBlock() {
    const caretPosition = this.editor.getCaretPosition();
    const appendBlock = createBlock('TEXT');
    const blocks = this.editor.getBlocks();
    const currentIndex = blocks.findIndex((v) => v.id === caretPosition?.blockId);
    const insertedBlocks =
      currentIndex !== -1
        ? [...blocks.slice(0, currentIndex + 1), appendBlock, ...blocks.slice(currentIndex + 1)]
        : [...blocks, appendBlock];
    setTimeout(() => this.editor.setCaretPosition({ blockId: appendBlock.id }), 10);
    this.eventEmitter.emit(EditorEvents.EVENT_EDITOR_UPDATE, insertedBlocks);
    this.editor.render();
  }

  splitBlock(blockId: string, index: number, length: number = 0) {
    const blocks = this.editor.getBlocks();
    const currentIndex = blocks.findIndex((v) => v.id === blockId);
    if (currentIndex === -1) return;
    const [first, last] = splitInlineContents(blocks[currentIndex].contents, index, length);
    const firstBlock = { ...blocks[currentIndex], contents: first.length < 1 ? [createInline('TEXT')] : first };
    const lastBlock = createBlock('TEXT', last, blocks[currentIndex].attributes);
    const splittedBlock = [...blocks.slice(0, currentIndex), firstBlock, lastBlock, ...blocks.slice(currentIndex + 1)];
    setTimeout(() => {
      this.editor.render([blocks[currentIndex].id]);
      setTimeout(() => this.editor.setCaretPosition({ blockId: lastBlock.id }), 10);
    }, 100);
    this.eventEmitter.emit(EditorEvents.EVENT_EDITOR_UPDATE, splittedBlock);
  }
}
