import * as React from 'react';
import styled from 'styled-components';
import { Subscription } from 'rxjs';
import { BlockContainer, Header1, Header2, Header3, Header4, Header5, Header6, Paragraph } from './components/blocks';
import { InlineText } from './components/inlines';
import { Bold, Strike, Underline } from './components/styles';
import { GlobalToolbar, BubbleToolbar } from './components/toolbar';
import { useEditor } from './hooks/use-editor';
import { useEventEmitter } from './hooks/use-event-emitter';
import { EditorModule, KeyBoardModule, LoggerModule, ToolbarModule, SelectorModule } from './modules';
import { getBlockElementById, getBlockId } from './utils/block';
import { EditorEvents } from './constants';
import { Formats } from './types/format';
import { Block } from './types/block';
import { Settings } from './types/editor';

interface Props {
  scrollContainer?: HTMLElement | string;
  readOnly?: boolean;
  formats?: { [key: string]: any };
  settings?: Settings;
}

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

export const Editor: React.VFC<Props> = React.memo(
  ({ readOnly = false, formats, settings = {}, scrollContainer, ...props }: Props) => {
    const [eventEmitter, eventTool] = useEventEmitter();
    const [editorRef, editor] = useEditor({ settings, eventEmitter, scrollContainer });
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [blockFormats, setBlockFormats] = React.useState<Formats>({
      'toolbar/global': GlobalToolbar,
      'toolbar/bubble': BubbleToolbar,
      'block/paragraph': Paragraph,
      'block/header1': Header1,
      'block/header2': Header2,
      'block/header3': Header3,
      'block/header4': Header4,
      'block/header5': Header5,
      'block/header6': Header6,
      'inline/text': InlineText,
      'style/bold': Bold,
      'style/underline': Underline,
      'style/strike': Strike,
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

    const handleInput = React.useCallback((e: React.KeyboardEvent) => {
      const keyboard = editor.getModule('keyboard');
      if (keyboard) {
        keyboard.onInput(e);
      }
    }, []);

    const handleClick = React.useCallback(
      (e: React.MouseEvent) => {
        editor.getModule('selector').reset();
        editor.updateCaretRect();
      },
      [editor],
    );

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
          { name: 'toolbar', module: ToolbarModule },
          { name: 'selector', module: SelectorModule },
        ],
        settings?.modules ?? {},
      );
      subs.add(
        eventEmitter.on(EditorEvents.EVENT_BLOCK_RERENDER).subscribe(() => {
          setBlocks(editor.getBlocks());
        }),
      );
      subs.add(
        eventEmitter.on(EditorEvents.EVENT_BLOCK_SELECTED).subscribe((blockIds) => {
          console.log(blockIds);
        }),
      );
      editor.render();

      return () => {
        editor.removeAllModules();
        subs.unsubscribe();
      };
    }, []);

    React.useEffect(() => {
      const handleMouseDown = (e: MouseEvent) => {
        editor.getModule('selector').mouseDown(e);
      };

      const handleMouseMove = (e: MouseEvent) => {
        editor.getModule('selector').mouseMove(e);
      };

      const handleMouseUp = (e: MouseEvent) => {
        editor.getModule('selector').mouseUp(e);
      };

      document.addEventListener('mousedown', handleMouseDown);
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);

      return () => {
        document.removeEventListener('mousedown', handleMouseDown);
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
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

    const MemoGlobalToolbar = React.useMemo(() => {
      return blockFormats['toolbar/global'];
    }, [blockFormats]);

    const MemoBubbleToolbar = React.useMemo(() => {
      return blockFormats['toolbar/bubble'];
    }, [blockFormats]);

    return (
      <Container ref={containerRef} {...props}>
        <Inner ref={editorRef}>
          {memoBlocks.map((block, index) => {
            return (
              <BlockContainer
                key={block.id}
                formats={blockFormats}
                editor={memoEditor}
                blockId={block.id}
                readOnly={readOnly}
                onClick={handleClick}
                onKeyDown={handleKeyDown}
                onBeforeInput={handleInput}
                onCompositionStart={handleCompositionStart}
                onCompositionEnd={handleCompositionEnd}
              />
            );
          })}
        </Inner>
        <MarginBottom onClick={handleContainerClick} />
        <MemoGlobalToolbar editor={memoEditor} />
        <MemoBubbleToolbar editor={memoEditor} scrollContainer={scrollContainer} />
      </Container>
    );
  },
);
