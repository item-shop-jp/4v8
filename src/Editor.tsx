import * as React from 'react';
import styled from 'styled-components';
import { Block } from './types/block';
import { ModuleOptions } from './types/module';
import { Header, Text } from './components/blocks';
import { useEditor } from './hooks/use-editor';
import { useModule } from './hooks/use-module';
import { useEventEmitter } from './hooks/use-event-emitter';
import { EditorModule, KeyBoardModule, LoggerModule } from './modules';
import { getBlockElementById } from './utils/block';

interface Props {
  readOnly?: boolean;
  settings?: ModuleOptions;
}

interface Formats {
  [key: string]: React.FC<{
    block: Block;
    readOnly: boolean;
    onClick: (e: React.MouseEvent) => void;
    onKeyDown: (e: React.KeyboardEvent) => void;
  }>;
}

interface BlockProps {
  block: Block;
  readOnly: boolean;
  formats: Formats;
  onClick: (e: React.MouseEvent) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
}

const BlockContainer: React.VFC<BlockProps> = React.memo(({ block, formats, ...props }) => {
  let Container;
  if (!formats[block.type.toLocaleLowerCase()]) {
    // defalut block format
    Container = formats['text'];
  } else {
    Container = formats[block.type.toLocaleLowerCase()];
  }

  return <Container block={block} {...props} />;
});

const Container = styled.div`
  border: 1px solid #ccc;
  border-radius: 12px;
  margin: 12px;
  padding: 12px;
  min-height: 300px;
`;
const Inner = styled.div`
  flex: 1;
`;

export const Editor: React.VFC<Props> = React.memo(({ readOnly = false, settings = {} }: Props) => {
  const [eventEmitter, eventTool] = useEventEmitter();
  const [blocks, editorRef, editor] = useEditor({ eventEmitter });
  const [modules, moduleTool] = useModule({ eventEmitter, editor });
  const [formats] = React.useState<Formats>({
    text: Text,
    header: Header,
  });

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent) => {
      if (modules['keyboard'] && modules['keyboard'] instanceof KeyBoardModule) {
        modules['keyboard'].onKeyDown(event);
      }
    },
    [modules],
  );

  const handleClick = React.useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    editor.updateCaretPosition();
  }, []);

  const handleContainerClick = React.useCallback(() => {
    const lastBlock = blocks[blocks.length - 1];
    if (!lastBlock) return;
    const element = getBlockElementById(lastBlock.id);
    if (!element) return;
    editor.setCaretPosition({ blockId: lastBlock.id, index: element.innerText.length });
  }, [blocks.length]);

  React.useEffect(() => {
    moduleTool.addModules(
      [
        { name: 'logger', module: LoggerModule },
        { name: 'editor', module: EditorModule },
        { name: 'keyboard', module: KeyBoardModule },
      ],
      settings,
    );

    return () => {
      moduleTool.removeAll();
    };
  }, []);

  return (
    <Container>
      <Inner onClick={handleContainerClick} ref={editorRef}>
        {blocks.map((block, index) => {
          return (
            <BlockContainer
              key={block.id}
              formats={formats}
              block={block}
              readOnly={readOnly}
              onKeyDown={handleKeyDown}
              onClick={handleClick}
            />
          );
        })}
      </Inner>
    </Container>
  );
});
