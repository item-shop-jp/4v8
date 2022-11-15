import { Module } from '../types/module';
import { EventEmitter } from '../utils/event-emitter';
import { EditorController } from '../types/editor';
import { BlockType, BlockAttributes } from '../types/block';
import { InlineAttributes } from '../types/inline';
import { CaretPosition } from '../types/caret';

interface Props {
  eventEmitter: EventEmitter;
  editor: EditorController;
}
export class ToolbarModule implements Module {
  private eventEmitter;
  private editor;
  private bubbleRef: HTMLDivElement | null;

  constructor({ eventEmitter, editor }: Props) {
    this.editor = editor;
    this.eventEmitter = eventEmitter;
    this.bubbleRef = null;
  }

  onInit() {
    this.eventEmitter.info('init toolbar module');
  }

  onDestroy() {
    this.eventEmitter.info('destroy toolbar module');
  }

  setBubbleToolbarRef(ref: HTMLDivElement) {
    this.bubbleRef = ref;
  }

  getBubbleToolbarRef() {
    return this.bubbleRef;
  }

  formatInline(attributes: InlineAttributes = {}, caretPosition: CaretPosition | null = null) {
    if (!caretPosition) {
      caretPosition = this.editor.getCaretPosition();
    }
    if (!caretPosition) return;
    const block = this.editor.getBlock(caretPosition.blockId);
    if (!block) return;
    this.editor.formatText(block.id, caretPosition.index, caretPosition.length, attributes);
    this.editor.render([block.id]);
    setTimeout(
      () =>
        this.editor.setCaretPosition({
          blockId: block.id,
          index: caretPosition?.index,
          length: caretPosition?.length,
        }),
      10,
    );
  }

  formatInlineMultiBlocks(blockIds: string[], attributes: InlineAttributes = {}) {
    blockIds.forEach((blockId) => {
      const block = this.editor.getBlock(blockId);
      const blockLength = this.editor.getBlockLength(blockId);
      if (!block) return;
      this.editor.formatText(block.id, 0, blockLength ?? 0, attributes);
    });
    this.editor.render(blockIds);
  }

  formatBlock(type: BlockType, attributes: BlockAttributes = {}) {
    const caretPosition = this.editor.getCaretPosition();
    if (!caretPosition) return;
    const block = this.editor.getBlock(caretPosition.blockId);
    if (!block) return;
    this.editor.updateBlock({ ...block, type, attributes });
    this.editor.numberingList();
    this.editor.render([block.id]);
    setTimeout(
      () =>
        this.editor.setCaretPosition({
          blockId: block.id,
          index: caretPosition.index,
          length: caretPosition.length,
        }),
      10,
    );
  }
}
