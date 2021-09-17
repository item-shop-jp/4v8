import * as React from 'react';
import styled from 'styled-components';
import { Block } from './types/block';
import { ModuleOptions } from './types/module';
import { Header, Text } from './components/blocks';
import { useEditor } from './hooks/use-editor';
import { useModule } from './hooks/use-module';
import { useEventEmitter } from './hooks/use-event-emitter';
import { EditorModule, KeyBoardModule, LoggerModule } from './modules';

interface Props {
  readOnly?: boolean;
  settings?: ModuleOptions;
}

interface Formats {
  [key: string]: React.FC<{ block: Block }>;
}

interface BlockProps {
  block: Block;
  formats: Formats;
}

const BlockContainer: React.VFC<BlockProps> = React.memo(({ block, formats }) => {
  let Container;
  if (!formats[block.type.toLocaleLowerCase()]) {
    // defalut block format
    Container = formats['text'];
  } else {
    Container = formats[block.type.toLocaleLowerCase()];
  }

  return <Container block={block} />;
});

const Container = styled.div`
  border: 1px solid #ccc;
  border-radius: 12px;
  margin: 12px;
  padding: 12px;
  min-height: 300px;
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

  const handleClick = React.useCallback(() => {
    console.log(editor.getCaretPosition());
  }, []);

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
    <Container
      ref={editorRef}
      contentEditable={!readOnly}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
      suppressContentEditableWarning={true}
    >
      {blocks.map((block, index) => {
        return <BlockContainer key={index} formats={formats} block={block} />;
      })}
    </Container>
  );
});
