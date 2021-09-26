import { nanoid } from 'nanoid';
import { createInline, createlineBreak } from './inline';
import { Block, BlockType, BlockAttributes } from '../types/block';

export function createBlock(type: BlockType, attributes: BlockAttributes = {}): Block {
  return {
    id: nanoid(),
    contents: [createInline('TEXT')],
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
  const element = document.querySelector<HTMLElement>('[data-block-id="' + blockId + '"]');
  if (!element) return null;
  return element;
}

export function getBlockLength(blockId: string): number | null {
  const element = getBlockElementById(blockId);
  if (!element) return null;
  let length = 0;
  for (let i = 0; i < element.children.length; i++) {
    if (element.children[i].tagName === 'SPAN') {
      length += (element.children[i] as HTMLElement).innerText.length;
    }
  }
  return length;
}
