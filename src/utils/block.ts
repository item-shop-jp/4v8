import { nanoid } from 'nanoid';
import { Block, BlockType, BlockAttributes } from '../types/block';

export function createBlock(type: BlockType, attributes: BlockAttributes = {}): Block {
  return {
    id: nanoid(),
    contents: [
      {
        id: nanoid(),
        text: '\n',
        type: 'TEXT',
        attributes: {},
      },
    ],
    attributes,
    type,
  };
}

export function getBlockId(node: HTMLElement): [string, HTMLElement] | [] {
  if (node.dataset?.blockId) {
    return [node.dataset.blockId, node];
  }
  if (!node.parentElement) {
    return [];
  }
  return getBlockId(node.parentElement);
}

export function getBlockElementById(blockId: string): HTMLElement | null {
  if (!blockId) return null;
  const element = document.querySelector<HTMLElement>('[data-block-id="' + blockId + '"]');
  if (!element) return null;
  return element;
}

export function getBlockLength(childNodes?: NodeList): number {
  if (!childNodes || childNodes.length < 1) return 0;
  let length = 0;
  for (let i = 0; i < childNodes.length; i++) {
    if (childNodes[i] instanceof Text) {
      length += (childNodes[i] as Text)?.length ?? 0;
    } else if (childNodes[i].childNodes.length > 0) {
      length += getBlockLength(childNodes[i].childNodes);
    }
  }
  return length;
}
