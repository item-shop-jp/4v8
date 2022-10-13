import * as React from 'react';
import styled from 'styled-components';
import twemoji from 'twemoji';
import { EditorController } from '../../types/editor';
import { Formats } from '../../types/format';
import { Inline } from '../../types/inline';
import { EditorEvents } from '../../constants';

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

interface PopupProps {
  top: number;
  left: number;
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

const Link = styled.a<InlineContentProps>`
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
      }),
    };
  }, [inline]);

  const handleClickLink = () => {
    const caretPosition = editor.getCaretPosition();
    const eventEmitter = editor.getEventEmitter();
    eventEmitter.emit(EditorEvents.EVENT_LINK_CLICK, {
      mode: 'openPreview',
      inline,
      caretPosition,
    });
  };

  return (
    <>
      {inline.attributes['link'] ? (
        <>
          <Link
            href={inline.attributes['link']}
            target="_blank"
            dangerouslySetInnerHTML={memoInnerHTML}
            formats={formats}
            attributes={inline.attributes}
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
