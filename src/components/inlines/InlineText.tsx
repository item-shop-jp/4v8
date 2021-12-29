import * as React from 'react';
import styled from 'styled-components';
import twemoji from 'twemoji';
import { Formats } from '../../types/format';
import { Inline } from '../../types/inline';

export interface InlineTextProps {
  inline: Inline;
  formats: Formats;
}

interface InlineContentProps {
  attributes: Inline['attributes'];
  formats: Formats;
}

const Text = styled.span<InlineContentProps>`
  ${({ attributes, formats }) => {
    return Object.keys(attributes).map((key: string) => {
      const styleFormat = `style/${key}`;
      if (attributes[key] && formats[styleFormat]) {
        return formats[styleFormat];
      }
      return;
    });
  }}
`;

const Link = styled.a<InlineContentProps>`
  ${({ attributes, formats }) => {
    return Object.keys(attributes).map((key: string) => {
      const styleFormat = `style/${key}`;
      if (attributes[key] && formats[styleFormat]) {
        return formats[styleFormat];
      }
      return;
    });
  }}
`;

export const InlineText = ({ inline, formats, ...props }: InlineTextProps) => {
  const memoInnerHTML = React.useMemo(() => {
    const text = inline.text.replaceAll('\n', '<br>');
    return {
      __html: twemoji.parse(text, {
        folder: 'svg',
        ext: '.svg',
      }),
    };
  }, [inline]);

  return (
    <>
      {inline.attributes['link'] ? (
        <Link
          href={inline.attributes['link']}
          target="_blank"
          dangerouslySetInnerHTML={memoInnerHTML}
          formats={formats}
          attributes={inline.attributes}
          {...props}
        />
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
