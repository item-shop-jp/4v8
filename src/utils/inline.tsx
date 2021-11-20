import * as React from 'react';
import { nanoid } from 'nanoid';
import { Inline, InlineType, InlineAttributes } from '../types/inline';

export function getInlineId(node: HTMLElement): [string, HTMLElement] | [] {
  if (node.dataset?.inlineId) {
    return [node.dataset.inlineId, node];
  }
  if (!node.parentElement) {
    return [];
  }
  return getInlineId(node.parentElement);
}

export function createInline(type: InlineType, text: string = '\uFEFF', attributes: InlineAttributes = {}): Inline {
  return {
    id: nanoid(),
    text,
    type,
    attributes: {},
    isEmbed: isEmbed(type),
  };
}

export function isEmbed(type: InlineType): boolean {
  switch (type) {
    case 'TEXT':
      return false;
    default:
      return false;
  }
}
