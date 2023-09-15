import * as React from 'react';
import styled from 'styled-components';
import twemoji from 'twemoji';
import { EditorController } from '../../types/editor';
import { Formats } from '../../types/format';
import { Inline } from '../../types/inline';
import { InlineTextLink } from './InlineTextLink';

export interface InlineTextProps {
  inline: Inline;
  formats: Formats;
  editor: EditorController;
  scrollContainer?: HTMLElement | string;
}

interface InlineContentProps {
  attributes: Inline['attributes'];
  formats: Formats;
}

const Text = styled.span<InlineContentProps>`
  &::selection {
    background: rgba(46, 170, 220, 0.2);
  }
  img.emoji {
    height: 1em;
    width: 1em;
    margin: 0 0.05em 0 0.1em;
    vertical-align: -0.1em;
    &::selection {
      background: rgba(46, 170, 220, 0.2);
    }
  }
  ${({ attributes, formats }) => {
    return Object.keys(attributes).map((key: string) => {
      const styleFormat = `inline/style/${key}`;
      if (attributes[key] && formats[styleFormat]) {
        return formats[styleFormat](attributes[key]);
      }
      return;
    });
  }}
`;

export const InlineText = ({
  inline,
  formats,
  editor,
  scrollContainer,
  ...props
}: InlineTextProps) => {
  const memoInnerHTML = React.useMemo(() => {
    const text = inline.text.replaceAll('\n', '<br>');
    return {
      __html: twemoji.parse(text, {
        folder: 'svg',
        ext: '.svg',
        base: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/',
      }),
    };
  }, [inline]);

  const handleClickLink = React.useCallback(() => {
    window.open(inline.attributes['link'], '_blank', 'noreferrer');
  }, [inline]);

  return (
    <>
      {inline.attributes['link'] ? (
        <>
          <InlineTextLink
            editor={editor}
            inline={inline}
            innerHtml={memoInnerHTML}
            formats={formats}
            attributes={inline.attributes}
            scrollContainer={scrollContainer}
            onClick={handleClickLink}
            {...props}
          />
        </>
      ) : (
        <Text
          dangerouslySetInnerHTML={memoInnerHTML}
          formats={formats}
          attributes={inline.attributes}
          {...props}
        />
      )}
    </>
  );
};
