import { nanoid } from 'nanoid';
import { createInline, createlineBreak } from './inline';
import { Block, BlockType, BlockAttributes } from '../types/block';
import { Inline } from '../types/inline';

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

export function getBlockLength(block: string | HTMLElement): number | null {
  const element = block instanceof HTMLElement ? block : getBlockElementById(block);
  if (!element) return null;
  let length = 0;
  for (let i = 0; i < element.children.length; i++) {
    if (element.children[i].tagName === 'SPAN') {
      length += (element.children[i] as HTMLElement).innerText.length;
    }
  }
  return length;
}

export function getInlineContents(block: string | HTMLElement): Inline[] {
  const element = block instanceof HTMLElement ? block : getBlockElementById(block);
  if (!element) return [];
  const contents: Inline[] = Array.from(element.children as HTMLCollectionOf<HTMLElement>).reduce(
    (r: Inline[], inline): Inline[] => {
      const format = inline.dataset.format?.replace(/^inline\//, '').toUpperCase();
      if (!format || !inline.dataset.inlineId) return r;
      return [
        ...r,
        {
          id: inline.dataset.inlineId,
          attributes: {},
          text: inline.innerText,
          type: format as Inline['type'],
        },
      ];
    },
    [],
  );

  return contents;
}
