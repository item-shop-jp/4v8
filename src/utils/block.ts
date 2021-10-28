import { nanoid } from 'nanoid';
import isEqual from 'lodash.isequal';
import { createInline, isEmbed, getInlineId } from './inline';
import { Block, BlockType, BlockAttributes } from '../types/block';
import { Inline, InlineType } from '../types/inline';

export function createBlock(type: BlockType, contents?: Inline[], attributes?: BlockAttributes): Block {
  return {
    id: nanoid(),
    contents: contents ?? [createInline('TEXT')],
    attributes: attributes ?? {},
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
  let cumulativeLength = 0;
  for (let i = 0; i < element.children.length; i++) {
    const targetElement = element.children[i] as HTMLElement;
    const format = targetElement.dataset.format?.replace(/^inline\//, '').toUpperCase();
    const inlineLength = isEmbed(format as InlineType) ? 1 : targetElement.innerText.replaceAll(/\uFEFF/gi, '').length;
    cumulativeLength += inlineLength;
  }
  return cumulativeLength;
}

export function getInlineContents(block: string | HTMLElement): {
  contents: Inline[];
  affected: boolean;
  affectedLength: number;
} {
  const element = block instanceof HTMLElement ? block : getBlockElementById(block);
  let affectedLength = 0;
  let affected = false;
  if (!element) return { contents: [], affected, affectedLength };

  const contents: Inline[] = Array.from(element.children as HTMLCollectionOf<HTMLElement>).reduce(
    (r: Inline[], inline, currentIndex): Inline[] => {
      const format = inline.dataset.format?.replace(/^inline\//, '').toUpperCase();
      if (!format || !inline.dataset.inlineId) return r;
      if (inline.innerText.match(/\uFEFF$/i)) {
        affected = true;
      }
      if (inline.innerText.match(/^\uFEFF/i)) {
        affectedLength = -1;
        affected = true;
      }

      let text = inline.innerText.replaceAll(/\uFEFF/gi, '');
      text = currentIndex === 0 && text.length < 1 ? '\uFEFF' : text;
      return [
        ...r,
        {
          id: inline.dataset.inlineId,
          attributes: {},
          text,
          type: format as Inline['type'],
          isEmbed: isEmbed(format as Inline['type']),
        },
      ];
    },
    [],
  );

  return { contents, affectedLength, affected };
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
    const targetElement = element.children[i] as HTMLElement;
    const format = targetElement.dataset.format?.replace(/^inline\//, '').toUpperCase();
    if (format) {
      if (isEmbed(format as InlineType)) {
        cumulativeLength += 1;
      } else {
        const childNodes = targetElement.childNodes;
        for (let j = 0; j < childNodes.length; j++) {
          let nodeLength = childNodes[j].textContent?.length ?? 0;
          nodeLength = nodeLength > 0 ? nodeLength : 1;

          if (index <= cumulativeLength + nodeLength) {
            return {
              node: childNodes[j] instanceof Text ? childNodes[j] : targetElement,
              index: index - cumulativeLength,
            };
          }
          cumulativeLength += nodeLength;
        }
      }
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
    const targetElement = blockElement.children[i] as HTMLElement;
    const format = targetElement.dataset.format?.replace(/^inline\//, '').toUpperCase();
    if (format) {
      const inlineLength = isEmbed(format as InlineType) ? 1 : targetElement.innerText.length;
      if (targetElement === inlineElement) {
        const childNodes = Array.from(inlineElement.childNodes);
        let normalizedOffset = 0;
        for (let j = 0; j < childNodes.length; j++) {
          if (childNodes[j] === ChildNode) {
            normalizedOffset += offset;
            break;
          }
          // <br> only line support
          if (ChildNode === inlineElement && j === offset) {
            normalizedOffset += 1;
            break;
          }
          let nodeLength = childNodes[j].textContent?.length ?? 0;
          nodeLength = nodeLength > 0 ? nodeLength : 1;
          normalizedOffset += nodeLength;
        }

        return { blockId, index: cumulativeLength + normalizedOffset };
      }
      cumulativeLength += inlineLength;
    }
  }
  return null;
}

// index is the position to start deleting, and length is the number of characters to delete (default is 1).
export function deleteInlineContents(contents: Inline[], index: number, length: number = 1): Inline[] {
  let startIndex = index;
  let endIndex = index + length;
  const destContents = [];
  let cumulativeLength = 0;
  for (let i = 0; i < contents.length; i++) {
    const inlineLength = contents[i].isEmbed ? 1 : contents[i].text.length;
    if (length > 0 && endIndex >= cumulativeLength && startIndex < cumulativeLength + inlineLength) {
      if (!contents[i].isEmbed) {
        let deleteIndex = startIndex - cumulativeLength;
        deleteIndex = deleteIndex > 0 ? deleteIndex : 0;
        const textlength = contents[i].text.length - deleteIndex;
        const deletelength = textlength - length >= 0 ? length : textlength;
        length -= deletelength;
        const text = contents[i].text.slice(0, deleteIndex) + contents[i].text.slice(deleteIndex + deletelength);

        if (text.length > 0) {
          destContents.push({ ...contents[i], text });
        }
      } else {
        length--;
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

// length is the string currently selected by the user and to be deleted when splitting.
export function splitInlineContents(contents: Inline[], index: number): [Inline[], Inline[]] {
  const startIndex = index;
  const firstContents: Inline[] = [];
  const lastContents: Inline[] = [];
  let cumulativeLength = 0;
  for (let i = 0; i < contents.length; i++) {
    const inlineLength = contents[i].isEmbed ? 1 : contents[i].text.length;
    if (startIndex >= cumulativeLength && startIndex < cumulativeLength + inlineLength) {
      if (!contents[i].isEmbed) {
        const sliceIndex = startIndex - cumulativeLength;
        const firstText = contents[i].text.slice(0, sliceIndex);
        const lastText = contents[i].text.slice(sliceIndex);
        if (firstText.length > 0) {
          firstContents.push({ ...contents[i], text: firstText });
        }
        if (lastText.length > 0) {
          lastContents.push({ ...contents[i], id: nanoid(), text: lastText });
        }
      } else {
        length--;
        lastContents.push(contents[i]);
      }
    } else {
      if (startIndex > cumulativeLength) {
        firstContents.push(contents[i]);
      } else {
        lastContents.push(contents[i]);
      }
    }

    cumulativeLength += inlineLength;
  }

  return [firstContents, lastContents];
}

export function optimizeInlineContents(contents: Inline[]): Inline[] {
  let prevAttributes = {};
  const dest = contents.reduce<Inline[]>((r, v, i) => {
    if (v.text === '\uFEFF') {
      return r;
    }
    if (r.length > 0 && isEqual(v.attributes, prevAttributes)) {
      prevAttributes = v.attributes;
      r[r.length - 1].text += v.text;
      return [...r];
    }
    return [...r, v];
  }, []);

  if (dest.length < 1) {
    dest.push(createInline('TEXT'));
  }
  return dest;
}

export function getFormats(contents: Inline[], index: number, length: number = 0) {
  return;
}
