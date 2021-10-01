import { nanoid } from 'nanoid';
import { createInline, isEmbed, getInlineId } from './inline';
import { Block, BlockType, BlockAttributes } from '../types/block';
import { Inline, InlineType } from '../types/inline';

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
          isEmbed: isEmbed(format as Inline['type']),
        },
      ];
    },
    [],
  );

  return contents;
}

// convert block index to native index
export function getNativeIndexFromBlockIndex(
  block: string | HTMLElement,
  index: number,
): { node: ChildNode; index: number } | null {
  const element = block instanceof HTMLElement ? block : getBlockElementById(block);
  if (!element) return null;
  let cumulativeLength = 0;
  for (let i = 0; i < element.children.length; i++) {
    const format = (element.children[i] as HTMLElement).dataset.format?.replace(/^inline\//, '').toUpperCase();
    if (format) {
      const inlineLength = isEmbed(format as InlineType) ? 1 : element.children[i].innerHTML.length;
      const inlineNode = (element.children[i] as HTMLElement).firstChild;
      if (index <= cumulativeLength + inlineLength && inlineNode) {
        return { node: inlineNode instanceof Text ? inlineNode : element.children[i], index: index - cumulativeLength };
      }
      cumulativeLength += inlineLength;
    }
  }
  return null;
}

export function getBlockIndexFromNativeIndex(
  ChildNode: HTMLElement,
  offset: number,
): { blockId: string; index: number } | null {
  const [inlineId, inlineElement] = getInlineId(ChildNode);
  const [blockId, blockElement] = getBlockId(ChildNode);
  if (!inlineId || !inlineElement || !blockElement || !blockId) return null;
  let cumulativeLength = 0;
  for (let i = 0; i < blockElement.children.length; i++) {
    const format = (blockElement.children[i] as HTMLElement).dataset.format?.replace(/^inline\//, '').toUpperCase();
    if (format) {
      const inlineLength = isEmbed(format as InlineType) ? 1 : blockElement.children[i].innerHTML.length;
      if (blockElement.children[i] === inlineElement) {
        return { blockId, index: cumulativeLength + offset };
      }
      cumulativeLength += inlineLength;
    }
  }
  return null;
}

export function deleteInlineContents(contents: Inline[], index: number, length: number = 0): Inline[] {
  const startIndex = index;
  const destContents = [];
  let cumulativeLength = 0;
  for (let i = 0; i < contents.length; i++) {
    const inlineLength = contents[i].isEmbed ? 1 : contents[i].text.length;
    if (length > 0 && startIndex >= cumulativeLength && startIndex < cumulativeLength + inlineLength) {
      if (!contents[i].isEmbed) {
        const deleteIndex = startIndex - cumulativeLength;
        const textlength = contents[i].text.length - deleteIndex;
        const deletelength = textlength - length >= 0 ? length : textlength;
        length -= deletelength;
        const text = contents[i].text.slice(0, deleteIndex) + contents[i].text.slice(deleteIndex + deletelength);
        if (text.length > 0) {
          destContents.push({ ...contents[i], text });
        }
      }
    } else {
      destContents.push(contents[i]);
    }

    cumulativeLength += inlineLength;
  }

  if (destContents.length < 1) {
    destContents.push(createInline('TEXT'));
  }
  return destContents;
}
