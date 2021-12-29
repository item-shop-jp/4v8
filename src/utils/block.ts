import { nanoid } from 'nanoid';
import isEqual from 'lodash.isequal';
import stringLength from 'string-length';
import * as otText from 'ot-text-unicode';
import { createInline, isEmbed, getInlineId, getInlineText } from './inline';
import { Block, BlockType, BlockAttributes } from '../types/block';
import { Inline, InlineAttributes, InlineType } from '../types/inline';

export function createBlock(
  type: BlockType,
  contents: Inline[] = [],
  attributes?: BlockAttributes,
): Block {
  return {
    id: nanoid(),
    contents: contents.length < 1 ? [createInline('TEXT')] : contents,
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
    const inlineLength = isEmbed(format as InlineType)
      ? 1
      : stringLength(getInlineText(targetElement).replaceAll(/\uFEFF/gi, ''));
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
  if (!element) return { contents: [], affectedLength, affected };

  const contents: Inline[] = Array.from(
    element.childNodes as NodeListOf<HTMLElement | Text>,
  ).reduce((r: Inline[], inline, currentIndex): Inline[] => {
    if (inline instanceof Text) {
      element.removeChild(inline);
      if (!inline?.textContent) return r;
      affectedLength += inline.length;
      affected = true;
      return [...r, createInline('TEXT', inline.textContent)];
    }
    const inlineText = getInlineText(inline);
    const format = inline.dataset.format?.replace(/^inline\//, '').toUpperCase();
    if (!format || !inline.dataset.inlineId) return r;
    if (inlineText.match(/\uFEFF$/i)) {
      affected = true;
    }
    if (inlineText.match(/^\uFEFF/i)) {
      affectedLength -= 1;
      affected = true;
    }

    let text = inlineText.replaceAll(/\uFEFF/gi, '');
    text = currentIndex === 0 && text.length < 1 ? '\uFEFF' : text;
    return [
      ...r,
      {
        id: inline.dataset.inlineId,
        attributes: JSON.parse(inline.dataset.attributes ?? ''),
        text,
        type: format as Inline['type'],
        isEmbed: isEmbed(format as Inline['type']),
      },
    ];
  }, []);

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
          const node = childNodes[j] as HTMLElement;
          let nodeLength = stringLength(node.textContent ?? '');
          nodeLength = nodeLength > 0 ? nodeLength : 1;
          if (index <= cumulativeLength + nodeLength) {
            if (node instanceof Image) {
              if (index === cumulativeLength + nodeLength) {
                return {
                  node: targetElement,
                  index: j + 1,
                };
              }
              return {
                node: targetElement,
                index: j,
              };
            }
            if (node.tagName === 'BR') {
              return targetElement.nextSibling
                ? {
                    node: targetElement.nextSibling,
                    index: 0,
                  }
                : {
                    node: targetElement,
                    index: j,
                  };
            }
            return {
              node: node instanceof Text ? node : targetElement,
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
      const inlineLength = isEmbed(format as InlineType)
        ? 1
        : stringLength(getInlineText(targetElement));

      if (targetElement === inlineElement) {
        const childNodes = Array.from(inlineElement.childNodes);
        let normalizedOffset = 0;
        for (let j = 0; j < childNodes.length; j++) {
          if (childNodes[j] === ChildNode) {
            const offestText = childNodes[j].textContent ?? '';
            // emoji support
            const offsetTextIndex = stringLength(offestText.slice(0, offset));
            normalizedOffset += offsetTextIndex;
            break;
          }
          if (ChildNode.contains(childNodes[j]) && j === offset) {
            break;
          }
          // <br> only line support
          if (ChildNode === inlineElement && j === offset) {
            normalizedOffset += 1;
            break;
          }
          let nodeLength = stringLength(childNodes[j].textContent ?? '');
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
export function deleteInlineContents(
  contents: Inline[],
  index: number,
  length: number = 1,
): Inline[] {
  let startIndex = index;
  let endIndex = index + length;
  const destContents = [];
  let cumulativeLength = 0;
  for (let i = 0; i < contents.length; i++) {
    const inlineLength = contents[i].isEmbed ? 1 : stringLength(contents[i].text);
    if (
      length > 0 &&
      endIndex >= cumulativeLength &&
      startIndex < cumulativeLength + inlineLength
    ) {
      if (!contents[i].isEmbed) {
        let deleteIndex = startIndex - cumulativeLength;
        deleteIndex = deleteIndex > 0 ? deleteIndex : 0;
        const textlength = stringLength(contents[i].text) - deleteIndex;
        const deletelength = textlength - length >= 0 ? length : textlength;
        length -= deletelength;
        const removeOp = otText.remove(deleteIndex, deletelength);
        const text = otText.type.apply(contents[i].text, removeOp);

        if (stringLength(text) > 0) {
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

export function setAttributesForInlineContents(
  contents: Inline[],
  attributes: InlineAttributes,
  index: number,
  length: number = 1,
): Inline[] {
  let startIndex = index;
  let endIndex = index + length;
  const destContents = [];
  let cumulativeLength = 0;
  for (let i = 0; i < contents.length; i++) {
    const inlineLength = contents[i].isEmbed ? 1 : stringLength(contents[i].text);
    if (
      length > 0 &&
      endIndex >= cumulativeLength &&
      startIndex < cumulativeLength + inlineLength
    ) {
      if (!contents[i].isEmbed) {
        let formatIndex = startIndex - cumulativeLength;
        formatIndex = formatIndex > 0 ? formatIndex : 0;
        const textlength = stringLength(contents[i].text) - formatIndex;
        const formatlength = textlength - length >= 0 ? length : textlength;
        length -= formatlength;
        const firstText = otText.type.apply(
          contents[i].text,
          otText.remove(formatIndex, textlength),
        );
        const middleText = otText.type.apply(
          contents[i].text,
          otText.type.compose(
            otText.remove(0, formatIndex),
            otText.remove(
              formatlength,
              stringLength(contents[i].text) - (formatIndex + formatlength),
            ),
          ),
        );
        const lastText = otText.type.apply(
          contents[i].text,
          otText.remove(0, formatIndex + formatlength),
        );

        if (firstText.length > 0) {
          destContents.push({ ...contents[i], id: nanoid(), text: firstText });
        }
        if (middleText.length > 0) {
          const mergedAttributes = { ...contents[i].attributes, ...attributes };
          Object.keys(mergedAttributes).forEach((key) => {
            if (typeof mergedAttributes[key] === 'boolean' && !mergedAttributes[key]) {
              delete mergedAttributes[key];
            }
          });
          destContents.push({
            ...contents[i],
            id: nanoid(),
            text: middleText,
            attributes: mergedAttributes,
          });
        }
        if (lastText.length > 0) {
          destContents.push({ ...contents[i], id: nanoid(), text: lastText });
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
    const inlineLength = contents[i].isEmbed ? 1 : stringLength(contents[i].text);
    if (startIndex >= cumulativeLength && startIndex < cumulativeLength + inlineLength) {
      if (!contents[i].isEmbed) {
        const sliceIndex = startIndex - cumulativeLength;
        const firstText = otText.type.apply(
          contents[i].text,
          otText.remove(sliceIndex, stringLength(contents[i].text) - sliceIndex),
        );
        const lastText = otText.type.apply(contents[i].text, otText.remove(0, sliceIndex));
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
      prevAttributes = { ...v.attributes };
      return r;
    }
    if (r.length > 0 && isEqual(v.attributes, prevAttributes)) {
      prevAttributes = { ...v.attributes };
      r[r.length - 1].text += v.text;

      return [...r];
    }
    prevAttributes = { ...v.attributes };
    return [...r, v];
  }, []);

  if (dest.length < 1) {
    dest.push(createInline('TEXT'));
  }
  return dest;
}

export function getDuplicateAttributes(
  contents: Inline[],
  index: number,
  length: number = 0,
): InlineAttributes {
  let startIndex = index;
  let endIndex = index + length;
  const destContents = [];
  let cumulativeLength = 0;
  for (let i = 0; i < contents.length; i++) {
    const inlineLength = contents[i].isEmbed ? 1 : stringLength(contents[i].text);
    if (length < 1) {
      break;
    }
    if (endIndex >= cumulativeLength && startIndex < cumulativeLength + inlineLength) {
      if (!contents[i].isEmbed) {
        let selectedIndex = startIndex - cumulativeLength;
        selectedIndex = selectedIndex > 0 ? selectedIndex : 0;
        const textlength = stringLength(contents[i].text) - selectedIndex;
        const selectedlength = textlength - length >= 0 ? length : textlength;
        length -= selectedlength;
        const text = otText.type.apply(
          contents[i].text,
          otText.remove(
            selectedIndex + selectedlength,
            stringLength(contents[i].text) - (selectedIndex + selectedlength),
          ),
        );
        if (stringLength(text) > 0) {
          destContents.push({ ...contents[i].attributes });
        }
      } else {
        length--;
      }
    }

    cumulativeLength += inlineLength;
  }
  const duplicateAttributes = destContents.reduce((r, v, i) => {
    if (i === 0) {
      return { ...v };
    }
    const attributes = { ...r };
    Object.keys(attributes).forEach((attr) => {
      if (!v.hasOwnProperty(attr)) {
        delete attributes[attr];
      }
    });
    return attributes;
  }, {});
  return duplicateAttributes;
}
