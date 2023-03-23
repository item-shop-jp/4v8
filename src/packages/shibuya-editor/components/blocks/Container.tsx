import * as React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Formats } from '../../types/format';
import { EditorController } from '../../types/editor';
import { useBlockRenderer } from '../../hooks/use-block-renderer';
import { InlineContainer } from '../inlines/Container';
import { textToPrismaToken } from '../../utils/code-block';

interface BlockProps {
  blockId: string;
  readOnly: boolean;
  selected: boolean;
  formats: Formats;
  editor: EditorController;
  scrollContainer?: HTMLElement | string;
  onCompositionStart: (e: React.CompositionEvent) => void;
  onCompositionEnd: (e: React.CompositionEvent) => void;
  onBeforeInput: (e: React.FormEvent) => void;
}

const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Outer = styled.div`
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 1;
  pointer-events: none;
  background-color: rgba(46, 170, 220, 0.2);
`;

export const BlockContainer: React.FC<BlockProps> = React.memo(
  ({ blockId, editor, selected, readOnly = false, scrollContainer, formats, ...props }) => {
    const block = useBlockRenderer({ blockId, editor });

    const memoContents = React.useMemo(() => {
      const { embeddedBlocks } = editor.getSettings();
      if (embeddedBlocks.includes(block?.type ?? '')) {
        return [];
      }
      if (block?.type === 'CODE-BLOCK') {
        const text = block.contents.map((content) => content.text).join('');
        const contents = textToPrismaToken(text, block.attributes?.language ?? 'typescript').map(
          (v, i) => {
            return { ...v, id: i };
          },
        );
        return InlineContainer({
          contents: textToPrismaToken(text, block.attributes?.language ?? 'typescript'),
          formats,
          editor,
          scrollContainer,
        });
      }
      return InlineContainer({ contents: block?.contents ?? [], formats, editor, scrollContainer });
    }, [block?.contents, block?.type, formats, editor]);

    const blockFormat = `block/${block?.type.toLocaleLowerCase()}`;
    const Container: React.FC<any> = formats[blockFormat] ?? formats['block/paragraph'];

    return (
      <Outer
        data-id={blockId}
        className={'shibuya-block-outer'}
        style={{ '--indent': `${block?.attributes?.indent ?? 0}` } as React.CSSProperties}
      >
        <Container
          suppressContentEditableWarning
          className={'notranslate'}
          contentEditable={!readOnly}
          blockId={blockId}
          data-block-id={blockId}
          data-attributes={JSON.stringify(block?.attributes)}
          data-metas={JSON.stringify(block?.meta)}
          data-format={blockFormat}
          formats={formats}
          attributes={block?.attributes}
          meta={block?.meta ?? {}}
          contents={memoContents}
          editor={editor}
          selected={selected}
          {...props}
        />
        {selected && <Overlay />}
      </Outer>
    );
  },
);
