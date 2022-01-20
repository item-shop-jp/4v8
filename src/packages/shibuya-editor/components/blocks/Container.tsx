import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { Formats } from '../../types/format';
import { EditorController } from '../../types/editor';
import { useBlockRenderer } from '../../hooks/use-block-renderer';
import { InlineContainer } from '../inlines/Container';

interface BlockProps {
  blockId: string;
  readOnly: boolean;
  selected: boolean;
  formats: Formats;
  editor: EditorController;
  onClick: (e: React.MouseEvent) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  onPaste: (e: React.ClipboardEvent) => void;
  onDrop: (e: React.DragEvent) => void;
  onDrag: (e: React.DragEvent) => void;
  onCompositionStart: (e: React.CompositionEvent) => void;
  onCompositionEnd: (e: React.CompositionEvent) => void;
  onBeforeInput: (e: React.KeyboardEvent) => void;
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
  inset: 0;
  opacity: 1;
  pointer-events: none;
  background-color: rgba(46, 170, 220, 0.2);
  animation: ${FadeIn} 0.1s ease;
`;

export const BlockContainer: React.VFC<BlockProps> = React.memo(
  ({ blockId, editor, selected, readOnly = false, formats, ...props }) => {
    const [blockFormat, setBlockFormat] = React.useState<string>();
    const [Container, setContainer] = React.useState<React.FC<any>>(formats['block/paragraph']);
    const block = useBlockRenderer({ blockId, editor });

    const memoContents = React.useMemo(() => {
      return InlineContainer({ contents: block?.contents ?? [], formats });
    }, [block?.contents, formats]);

    React.useEffect(() => {
      const newBlockFormat = `block/${block?.type.toLocaleLowerCase()}`;
      setBlockFormat(newBlockFormat);
      setContainer(() => {
        if (!formats[newBlockFormat]) {
          // defalut block format
          return formats['block/paragraph'];
        } else {
          return formats[newBlockFormat];
        }
      });
    }, [block?.type]);

    return (
      <Outer>
        <Container
          suppressContentEditableWarning
          className="notranslate"
          contentEditable={!readOnly}
          blockId={blockId}
          data-block-id={blockId}
          data-format={blockFormat}
          formats={formats}
          attributes={block?.attributes}
          contents={memoContents}
          selected={selected}
          {...props}
        />
        {selected && <Overlay />}
      </Outer>
    );
  },
);
