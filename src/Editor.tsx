import * as React from 'react';
import styled from 'styled-components';
import { Subscription } from 'rxjs';
import { ModuleOptions } from './types/module';
import { Formats } from './types/format';
import { Block } from './types/block';
import { Header, Text } from './components/blocks';
import { InlineText, Br } from './components/inlines';
import { useEditor, EditorController } from './hooks/use-editor';
import { useEventEmitter } from './hooks/use-event-emitter';
import { EditorModule, KeyBoardModule, LoggerModule } from './modules';
import { getBlockElementById } from './utils/block';
import { EditorEvents } from './constants';

interface Props {
  readOnly?: boolean;
  formats?: Formats;
  settings?: ModuleOptions;
}

interface BlockProps {
  blockId: string;
  blockType: string;
  readOnly: boolean;
  formats: Formats;
  editor: EditorController;
  onClick: (e: React.MouseEvent) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  onCompositionStart: (e: React.CompositionEvent) => void;
  onCompositionEnd: (e: React.CompositionEvent) => void;
  onInput: (e: React.KeyboardEvent) => void;
}

const BlockContainer: React.VFC<BlockProps> = React.memo(
  ({ blockId, blockType, readOnly = false, formats, ...props }) => {
    const [blockFormat, setBlockFormat] = React.useState<string>();
    const [Container, setContainer] = React.useState<React.FC<any>>(formats['block/text']);

    React.useEffect(() => {
      const newBlockFormat = `block/${blockType.toLocaleLowerCase()}`;
      setBlockFormat(newBlockFormat);
      setContainer(() => {
        if (!formats[newBlockFormat]) {
          // defalut block format
          return formats['block/text'];
        } else {
          return formats[newBlockFormat];
        }
      });
    }, [blockType]);

    return (
      <Container
        suppressContentEditableWarning
        className="notranslate"
        contentEditable={!readOnly}
        blockId={blockId}
        data-block-id={blockId}
        data-format={blockFormat}
        formats={formats}
        {...props}
      />
    );
  },
);

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
  const [editorRef, editor] = useEditor({ eventEmitter });
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [blockFormats, setBlockFormats] = React.useState<Formats>({
    'block/text': Text,
    'block/header': Header,
    'inline/text': InlineText,
    'inline/br': Br,
  });
  const [blocks, setBlocks] = React.useState<Block[]>([]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent) => {
      const keyboard = editor.getModule('keyboard');
      if (keyboard && keyboard instanceof KeyBoardModule) {
        keyboard.onKeyDown(event);
      }
    },
    [editor],
  );

  const handleCompositionStart = React.useCallback(
    (event: React.CompositionEvent) => {
      const keyboard = editor.getModule('keyboard');
      if (keyboard && keyboard instanceof KeyBoardModule) {
        keyboard.onCompositionStart(event);
      }
    },
    [editor],
  );

  const handleCompositionEnd = React.useCallback(
    (event: React.CompositionEvent) => {
      const keyboard = editor.getModule('keyboard');
      if (keyboard && keyboard instanceof KeyBoardModule) {
        keyboard.onCompositionEnd(event);
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
    const keyboard = editor.getModule('keyboard');
    if (keyboard && keyboard instanceof KeyBoardModule) {
      keyboard.onInput(e);
    }
  }, []);

  const handleContainerClick = React.useCallback(() => {
    const lastBlock = blocks[blocks.length - 1];
    if (!lastBlock) return;
    const element = getBlockElementById(lastBlock.id);
    if (!element) return;
    editor.setCaretPosition({ blockId: lastBlock.id, index: element.innerText.length });
  }, [blocks.length]);

  React.useEffect(() => {
    const subs = new Subscription();
    editor.addModules(
      [
        { name: 'logger', module: LoggerModule },
        { name: 'editor', module: EditorModule },
        { name: 'keyboard', module: KeyBoardModule },
      ],
      settings,
    );
    subs.add(
      eventEmitter.on(EditorEvents.EVENT_BLOCK_RERENDER).subscribe(() => {
        setBlocks(editor.getBlocks());
      }),
    );
    editor.render();

    return () => {
      editor.removeAllModules();
      subs.unsubscribe();
    };
  }, []);

  React.useEffect(() => {
    const appendFormats = formats ?? {};
    setBlockFormats((prevFormats) => {
      return { ...prevFormats, ...appendFormats };
    });
  }, [formats]);

  const memoBlocks = React.useMemo(() => {
    return blocks.map((v) => {
      return { id: v.id, type: v.type };
    });
  }, [blocks.length]);

  const memoEditor = React.useMemo(() => {
    return editor;
  }, []);

  return (
    <Container {...props} ref={containerRef}>
      <Inner ref={editorRef}>
        {memoBlocks.map((block, index) => {
          return (
            <BlockContainer
              key={block.id}
              formats={blockFormats}
              editor={memoEditor}
              blockId={block.id}
              blockType={block.type}
              readOnly={readOnly}
              onKeyDown={handleKeyDown}
              onInput={handleInput}
              onCompositionStart={handleCompositionStart}
              onCompositionEnd={handleCompositionEnd}
              onClick={handleClick}
            />
          );
        })}
      </Inner>
      <MarginBottom onClick={handleContainerClick} />
    </Container>
  );
});
