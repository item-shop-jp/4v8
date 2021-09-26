import * as React from 'react';
import styled from 'styled-components';
import { Block } from './types/block';
import { ModuleOptions } from './types/module';
import { Formats } from './types/format';
import { Header, Text } from './components/blocks';
import { InlineText, Br } from './components/inlines';
import { useEditor } from './hooks/use-editor';
import { useEventEmitter } from './hooks/use-event-emitter';
import { EditorModule, KeyBoardModule, LoggerModule } from './modules';
import { getBlockElementById } from './utils/block';

interface Props {
  readOnly?: boolean;
  formats?: Formats;
  settings?: ModuleOptions;
}

interface BlockProps {
  block: Block;
  readOnly: boolean;
  formats: Formats;
  onClick: (e: React.MouseEvent) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  onInput: (e: React.KeyboardEvent) => void;
}

const BlockContainer: React.VFC<BlockProps> = React.memo(({ block, readOnly = false, formats, ...props }) => {
  let Container;
  const blockFormat = `block/${block.type.toLocaleLowerCase()}`;
  if (!formats[blockFormat]) {
    // defalut block format
    Container = formats['block/text'];
  } else {
    Container = formats[blockFormat];
  }

  return (
    <Container
      suppressContentEditableWarning
      className="notranslate"
      contentEditable={!readOnly}
      data-block-id={block.id}
      block={block}
      data-format={blockFormat}
      formats={formats}
      {...props}
    />
  );
});

const Container = styled.div`
  border: 1px solid #ccc;
  border-radius: 12px;
  margin: 12px;
  padding: 12px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
`;
const Inner = styled.div`
  flex-shrink: 0;
  flex-grow: 0;
`;
const MarginBottom = styled.div`
  flex-shrink: 0;
  flex-grow: 1;
`;

export const Editor: React.VFC<Props> = React.memo(({ readOnly = false, formats, settings = {}, ...props }: Props) => {
  const [eventEmitter, eventTool] = useEventEmitter();
  const [blocks, editorRef, editor] = useEditor({ eventEmitter });
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [blockFormats, setBlockFormats] = React.useState<Formats>({
    'block/text': Text,
    'block/header': Header,
    'inline/text': InlineText,
    'inline/br': Br,
  });

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent) => {
      const keyboard = editor.getModule('keyboard');
      if (keyboard && keyboard instanceof KeyBoardModule) {
        keyboard.onKeyDown(event);
      }
    },
    [editor],
  );

  const handleClick = React.useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    editor.updateCaretPosition();
  }, []);

  const handleInput = React.useCallback((e: React.KeyboardEvent) => {
    editor.updateBlock();
  }, []);

  const handleContainerClick = React.useCallback(() => {
    const lastBlock = blocks[blocks.length - 1];
    if (!lastBlock) return;
    const element = getBlockElementById(lastBlock.id);
    if (!element) return;
    editor.setCaretPosition({ blockId: lastBlock.id, index: element.innerText.length });
  }, [blocks.length]);

  React.useEffect(() => {
    editor.addModules(
      [
        { name: 'logger', module: LoggerModule },
        { name: 'editor', module: EditorModule },
        { name: 'keyboard', module: KeyBoardModule },
      ],
      settings,
    );

    return () => {
      editor.removeAllModules();
    };
  }, []);

  React.useEffect(() => {
    const appendFormats = formats ?? {};
    setBlockFormats((prevFormats) => {
      return { ...prevFormats, ...appendFormats };
    });
  }, [formats]);

  return (
    <Container {...props} ref={containerRef}>
      <Inner ref={editorRef}>
        {blocks.map((block, index) => {
          return (
            <BlockContainer
              key={block.id}
              formats={blockFormats}
              block={block}
              readOnly={readOnly}
              onKeyDown={handleKeyDown}
              onInput={handleInput}
              onClick={handleClick}
            />
          );
        })}
      </Inner>
      <MarginBottom onClick={handleContainerClick} />
    </Container>
  );
});
