import { Block, BlockType, BlockAttributes } from '../types/block';

export function createBlock(
  type: BlockType,
  attributes: BlockAttributes = {},
): Block {
  return {
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
