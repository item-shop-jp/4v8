import * as React from 'react';
import styled from 'styled-components';
import { Block } from './types/block';
import { Header, Text } from './components/blocks';
import { createBlock } from './utils/block';
import { useModule } from './modules/use-module';
import { KeyBoard } from './modules/keyboard';

interface Props {
  readOnly?: boolean;
}

interface Formats {
  [key: string]: React.FC<{ block: Block }>;
}

interface BlockProps {
  block: Block;
  formats: Formats;
}

const BlockContainer: React.VFC<BlockProps> = React.memo(
  ({ block, formats }) => {
    let Container;
    if (!formats[block.type.toLocaleLowerCase()]) {
      Container = formats['text'];
    } else {
      Container = formats['header'];
    }

    return <Container block={block}></Container>;
  },
);

const EditorContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 12px;
  margin: 12px;
  padding: 12px;
  min-height: 300px;
`;

export const Editor: React.VFC<Props> = React.memo(
  ({ readOnly = false }: Props) => {
    const containerRef = React.useRef(null);
    const [modules, moduleController] = useModule();
    const [blocks, setBlocks] = React.useState<Block[]>([]);
    const [formats] = React.useState<Formats>({
      text: Text,
      header: Header,
    });

    const handleBeforeInput = React.useCallback(() => {}, []);

    const handleKeyDown = React.useCallback((event: React.KeyboardEvent) => {
      event.preventDefault();
      event.stopPropagation();
      const selection = document.getSelection();
      if (selection) {
        const range = selection.getRangeAt(0);
        console.log('keydown', selection, range);
      }
    }, []);

    const handleClick = React.useCallback(() => {
      const selection = document.getSelection();
      if (selection) {
        const range = selection.getRangeAt(0);
        console.log(
          'click',
          range.commonAncestorContainer === containerRef.current,
        );
      }
    }, []);

    const handleCreateBlock = React.useCallback(() => {
      setBlocks((prevBlocks) => {
        return [...prevBlocks, createBlock('TEXT')];
      });
    }, []);

    React.useEffect(() => {
      console.log(modules);
      moduleController.addModule('keyboard', KeyBoard);
      return () => {
        moduleController.removeAll();
      };
    }, []);

    return (
      <>
        <EditorContainer
          ref={containerRef}
          contentEditable={!readOnly}
          onBeforeInput={handleBeforeInput}
          onKeyDown={handleKeyDown}
          onClick={handleClick}
          suppressContentEditableWarning={true}
        >
          {blocks.map((block, index) => {
            return (
              <BlockContainer key={index} formats={formats} block={block} />
            );
          })}
        </EditorContainer>
        <button onClick={handleCreateBlock}>ブロック作成</button>
      </>
    );
  },
);
