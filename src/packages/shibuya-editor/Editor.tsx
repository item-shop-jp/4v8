import * as React from 'react';
import styled from 'styled-components';
import { Subscription } from 'rxjs';
import {
  BlockContainer,
  Header1,
  Header2,
  Header3,
  Header4,
  Header5,
  Header6,
  Paragraph,
} from './components/blocks';
import { InlineText } from './components/inlines';
import { Bold, Strike, Underline, InlineCode } from './components/styles';
import { GlobalToolbar, BubbleToolbar } from './components/toolbar';
import { useEditor } from './hooks/use-editor';
import { useEventEmitter } from './hooks/use-event-emitter';
import {
  EditorModule,
  KeyBoardModule,
  LoggerModule,
  ToolbarModule,
  SelectorModule,
  HistoryModule,
  ClipboardModule,
} from './modules';
import { getBlockElementById, getBlockId } from './utils/block';
import { EditorEvents } from './constants';
import { Formats } from './types/format';
import { Block } from './types/block';
import { Settings, EditorController } from './types/editor';

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
  padding: 12px 0;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  cursor: text;
`;
const Inner = styled.div`
  flex-shrink: 0;
  flex-grow: 0;
`;
const MarginBottom = styled.div`
  flex-shrink: 0;
  flex-grow: 1;
  user-select: none;
`;

export const Editor = React.memo(
  React.forwardRef<EditorController, Props>(
    (
      { readOnly = false, formats, settings = {}, scrollContainer, ...props }: Props,
      forwardRef,
    ) => {
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
        'inline/style/bold': Bold,
        'inline/style/underline': Underline,
        'inline/style/strike': Strike,
        'inline/style/code': InlineCode,
      });
      const [blocks, setBlocks] = React.useState<Block[]>([]);
      const [selectedIds, setSelectedIds] = React.useState<string[]>([]);

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
          editor.updateCaretRect();
        },
        [editor],
      );

      const handlePaste = React.useCallback(
        (e: React.ClipboardEvent) => {
          console.log('paste', e);
          e.preventDefault();
        },
        [editor],
      );

      const handleDrop = React.useCallback(
        (e: React.DragEvent) => {
          e.preventDefault();
        },
        [editor],
      );
      const handleDrag = React.useCallback(
        (e: React.DragEvent) => {
          e.preventDefault();
        },
        [editor],
      );

      const handleContainerClick = React.useCallback(
        (e: React.MouseEvent) => {
          const lastBlock = blocks[blocks.length - 1];
          if (!lastBlock) return;
          const element = getBlockElementById(lastBlock.id);
          if (!element) return;
          e.preventDefault();
          editor.setCaretPosition({
            blockId: lastBlock.id,
            index: editor.getBlockLength(lastBlock.id) ?? 0,
          });
        },
        [blocks.length],
      );

      React.useEffect(() => {
        const subs = new Subscription();
        editor.addModules(
          [
            { name: 'logger', module: LoggerModule },
            { name: 'editor', module: EditorModule },
            { name: 'keyboard', module: KeyBoardModule },
            { name: 'toolbar', module: ToolbarModule },
            { name: 'selector', module: SelectorModule },
            { name: 'history', module: HistoryModule },
            { name: 'clipboard', module: ClipboardModule },
          ],
          settings?.modules ?? {},
        );
        subs.add(
          eventEmitter.select(EditorEvents.EVENT_BLOCK_RERENDER).subscribe(() => {
            setBlocks(editor.getBlocks());
          }),
        );
        subs.add(
          eventEmitter.select(EditorEvents.EVENT_BLOCK_SELECTED).subscribe((blockIds: string[]) => {
            setSelectedIds(blockIds);
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
          editor.getModule('selector')?.mouseMove(e);
        };

        const handleMouseUp = (e: MouseEvent) => {
          editor.getModule('selector').mouseUp(e);
        };

        const handleOutsideClick = (e: MouseEvent) => {
          if (!editorRef.current || editorRef.current.contains(e.target as Node)) {
            return;
          }
          editor.getModule('selector').reset();
        };

        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('click', handleOutsideClick);

        return () => {
          document.removeEventListener('mousedown', handleMouseDown);
          document.removeEventListener('mousemove', handleMouseMove);
          document.removeEventListener('mouseup', handleMouseUp);
          document.removeEventListener('click', handleOutsideClick);
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
          return { id: v.id, type: v.type, selected: selectedIds.includes(v.id) };
        });
      }, [blocks.length, selectedIds]);

      const memoEditor = React.useMemo(() => {
        return editor;
      }, []);

      const MemoGlobalToolbar = React.useMemo(() => {
        return blockFormats['toolbar/global'];
      }, [blockFormats]);

      const MemoBubbleToolbar = React.useMemo(() => {
        return blockFormats['toolbar/bubble'];
      }, [blockFormats]);

      React.useImperativeHandle(forwardRef, () => editor, [editor]);

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
                  selected={block.selected}
                  onClick={handleClick}
                  onKeyDown={handleKeyDown}
                  onPaste={handlePaste}
                  onDrop={handleDrop}
                  onDrag={handleDrag}
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
  ),
);
