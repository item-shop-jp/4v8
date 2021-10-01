import * as React from 'react';
import { nanoid } from 'nanoid';
import { Inline, InlineType, InlineAttributes } from '../types/inline';
import { Formats } from '../types/format';

interface Props {
  contents: Inline[];
  formats?: Formats;
}

export function getInlineId(node: HTMLElement): [string, HTMLElement] | [] {
  if (node.dataset?.inlineId) {
    return [node.dataset.inlineId, node];
  }
  if (!node.parentElement) {
    return [];
  }
  return getInlineId(node.parentElement);
}

export function createInline(type: InlineType, text: string = '\n', attributes: InlineAttributes = {}): Inline {
  return {
    id: nanoid(),
    text,
    type,
    attributes: {},
    isEmbed: isEmbed(type),
  };
}

export function createlineBreak(attributes: InlineAttributes = {}): Inline {
  return {
    id: nanoid(),
    text: '',
    type: 'BR',
    attributes: {},
    isEmbed: isEmbed('BR'),
  };
}

export function isEmbed(type: InlineType): boolean {
  switch (type) {
    case 'TEXT':
      return false;
    case 'BR':
      return true;
    default:
      return false;
  }
}

export const InlineContent: React.VFC<Props> = ({ contents, formats = {}, ...props }: Props) => {
  return (
    <>
      {contents.map((content) => {
        let Container;
        const inlineFormat = `inline/${content.type.toLocaleLowerCase()}`;
        if (!formats[inlineFormat]) {
          // defalut block format
          Container = formats['inline/text'];
        } else {
          Container = formats[inlineFormat];
        }
        return (
          <Container
            key={content.id}
            data-inline-id={content.id}
            data-format={inlineFormat}
            inline={content}
            {...props}
          />
        );
      })}
    </>
  );
};
