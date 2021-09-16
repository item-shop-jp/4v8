import { nanoid } from 'nanoid';
import { Block, BlockType, BlockAttributes } from '../types/block';

export function createBlock(type: BlockType, attributes: BlockAttributes = {}): Block {
  return {
    id: nanoid(),
    contents: [
      {
        attributes: {},
        text: '\n',
        type: 'TEXT',
      },
    ],
    attributes,
    type,
  };
}

export function getBlockId(node: HTMLElement): string | null {
  if (node.dataset?.blockId) {
    return node.dataset.blockId;
  }
  if (!node.parentElement) {
    return null;
  }
  return getBlockId(node.parentElement);
}
