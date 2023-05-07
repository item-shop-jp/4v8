import * as React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Subscription } from 'rxjs';
import { EditorEvents } from '../../constants';
import { EditorController } from '../../types/editor';
import { InlineAttributes } from '../../types/inline';
import { BlockType } from '../../types/block';
import { getHtmlElement } from '../../utils/dom';
import { LinkPopup } from '../popups';
import { CaretPosition } from '../../types/caret';
import {
  FormatBold,
  FormatBulletList,
  FormatCode,
  FormatColor,
  FormatHeader1,
  FormatHeader2,
  FormatHeader3,
  FormatItalic,
  FormatLink,
  FormatNumberList,
  FormatStrike,
  FormatUnderLine,
} from '../icons';

export interface BubbleToolbarProps {
  editor: EditorController;
  scrollContainer?: HTMLElement | string;
}

interface ContainerProps {
  isDisplay: boolean;
}

interface ToolbarPosition {
  top: number;
  left: number;
}

interface ButtonProps {
  active: boolean;
}

const TOOLBAR_CHILD_WIDTH = 34;

const Container = styled.div<ContainerProps>`
  height: 34px;
  align-items: center;
  position: absolute;
  display: ${({ isDisplay }) => (isDisplay ? 'flex' : 'none')};
  transform: translateY(-100%);
  background-color: #18181b;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  z-index: 1;
`;

const Button = styled.a<ButtonProps>`
  display: flex;
  padding: 7px;
  ${({ active }) => active && 'background: rgba(255, 255, 255, 0.15)'};
  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 100%;
  background: #fff;
  opacity: 0.2;
`;

export const BubbleToolbar = React.memo(
  ({ editor, scrollContainer, ...props }: BubbleToolbarProps) => {
    const [formats, setFormats] = React.useState<InlineAttributes>({});
    const [position, setPosition] = React.useState<ToolbarPosition>();
    const [blockType, setBlockType] = React.useState<BlockType>();
    const [isDisplay, setDisplay] = React.useState<boolean>(false);
    const [currentCaretPosition, setCurrentCaretPosition] = React.useState<CaretPosition | null>();
    const [toolbarWidth, setToolbarWidth] = React.useState(0);
    const containerRef = React.useRef<HTMLDivElement>(null);

    const handleBold = React.useCallback(
      (event: React.MouseEvent) => {
        event.preventDefault();
        editor.getModule('toolbar').formatInline({ bold: !formats?.bold });
      },
      [formats],
    );

    const handleItalic = React.useCallback(
      (event: React.MouseEvent) => {
        event.preventDefault();
        editor.getModule('toolbar').formatInline({ italic: !formats?.italic });
      },
      [formats],
    );

    const handleUnderline = React.useCallback(
      (event: React.MouseEvent) => {
        event.preventDefault();
        editor.getModule('toolbar').formatInline({ underline: !formats?.underline });
      },
      [formats],
    );

    const handleStrike = React.useCallback(
      (event: React.MouseEvent) => {
        event.preventDefault();
        editor.getModule('toolbar').formatInline({ strike: !formats?.strike });
      },
      [formats],
    );

    const handleLink = React.useCallback(
      (event: React.MouseEvent) => {
        event.preventDefault();
        const eventEmitter = editor.getEventEmitter();
        eventEmitter.emit(EditorEvents.EVENT_LINK_CLICK, {
          mode: 'openEnterLink',
          link: formats?.link,
          caretPosition: currentCaretPosition,
        });
      },
      [formats, currentCaretPosition],
    );

    const handleInlineCode = React.useCallback(
      (event: React.MouseEvent) => {
        event.preventDefault();
        editor.getModule('toolbar').formatInline({ code: !formats?.code });
      },
      [formats],
    );

    const handleHeader1 = React.useCallback(
      (event: React.MouseEvent) => {
        event.preventDefault();
        editor.getModule('toolbar').formatBlock('HEADER1');
      },
      [formats],
    );
    const handleHeader2 = React.useCallback(
      (event: React.MouseEvent) => {
        event.preventDefault();
        editor.getModule('toolbar').formatBlock('HEADER2');
      },
      [formats],
    );
    const handleHeader3 = React.useCallback(
      (event: React.MouseEvent) => {
        event.preventDefault();
        editor.getModule('toolbar').formatBlock('HEADER3');
      },
      [formats],
    );

    const handleOrderedList = React.useCallback(
      (event: React.MouseEvent) => {
        event.preventDefault();
        editor.getModule('toolbar').formatBlock('ORDERED-LIST');
      },
      [formats],
    );

    const handleBulletList = React.useCallback(
      (event: React.MouseEvent) => {
        event.preventDefault();
        editor.getModule('toolbar').formatBlock('BULLET-LIST');
      },
      [formats],
    );

    const handleColor = React.useCallback(
      (event: React.MouseEvent) => {
        event.preventDefault();
        const eventEmitter = editor.getEventEmitter();
        eventEmitter.emit(EditorEvents.EVENT_PALETTE_CLICK, {
          caretPosition: currentCaretPosition,
        });
      },
      [formats, currentCaretPosition],
    );

    const handleMouseDown = (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
    };

    React.useEffect(() => {
      const subs = new Subscription();
      const eventEmitter = editor.getEventEmitter();

      const updatePosition = (caret: CaretPosition) => {
        const container = getHtmlElement(scrollContainer);
        if (container) {
          const containerRect = container.getBoundingClientRect();
          const top = (container?.scrollTop ?? 0) + caret.rect.top - containerRect.top - 4; // ブロックとツールバーの隙間をあける
          const left = caret.rect.left - containerRect.left - toolbarWidth / 2;
          setPosition({ top, left });
        } else {
          const scrollEl = document.scrollingElement as HTMLElement;
          const top = scrollEl.scrollTop + caret.rect.top - 4;
          const left = caret.rect.left - toolbarWidth / 2;
          setPosition({ top, left });
        }
      };

      subs.add(
        eventEmitter.select(EditorEvents.EVENT_SELECTION_CHANGE).subscribe((v) => {
          const caret = editor.getCaretPosition();
          if (!caret) {
            setPosition(undefined);
            setDisplay(false);
            return;
          }
          const block = editor.getBlock(caret.blockId);
          const blockLength = editor.getBlockLength(caret?.blockId ?? '') ?? 0;
          const { disableDecorationFormats } = editor.getSettings();
          if (
            !block ||
            disableDecorationFormats.includes(block.type) ||
            !editor.hasFocus() ||
            blockLength < 1
          ) {
            setPosition(undefined);
            setDisplay(false);
            return;
          }
          updatePosition(caret);
          setDisplay(!caret.collapsed);
          setFormats(editor.getFormats(caret.blockId, caret.index, caret.length));
          setBlockType(editor.getBlock(caret.blockId)?.type);
        }),
      );

      subs.add(
        eventEmitter.select<string[]>(EditorEvents.EVENT_BLOCK_RERENDER).subscribe(() => {
          setDisplay(false);
          setTimeout(() => {
            const caret = editor.getCaretPosition();
            if (!caret) return;
            updatePosition(caret);
            setDisplay(!caret.collapsed);
          });
        }),
      );
      return () => {
        subs.unsubscribe();
      };
    }, [editor, scrollContainer, toolbarWidth]);

    React.useEffect(() => {
      setTimeout(() => {
        if (!containerRef.current) return;
        editor.getModule('toolbar').setBubbleToolbarRef(containerRef.current);
        setToolbarWidth((containerRef.current.children.length - 1) * TOOLBAR_CHILD_WIDTH);
      });
    }, [editor]);

    return ReactDOM.createPortal(
      <>
        <Container
          id="bubble-toolbar"
          style={{
            top: position?.top ?? 0,
            left: position?.left ?? 0,
          }}
          isDisplay={isDisplay}
          ref={containerRef}
          onMouseDown={handleMouseDown}
          {...props}
        >
          {/* <Button href="#" onClick={handleHeader1} active={blockType === 'HEADER1'}></Button> */}
          <Button href="#" onClick={handleBold} active={!!formats?.bold}>
            <FormatBold size="20" />
          </Button>
          <Button href="#" onClick={handleItalic} active={!!formats?.italic}>
            <FormatItalic size="20" />
          </Button>
          <Button href="#" onClick={handleUnderline} active={!!formats?.underline}>
            <FormatUnderLine size="20" />
          </Button>
          <Button href="#" onClick={handleStrike} active={!!formats?.strike}>
            <FormatStrike size="20" />
          </Button>
          <Button href="#" onClick={handleInlineCode} active={!!formats?.code}>
            <FormatCode size="20" />
          </Button>
          <Button id="toolbar-palette" href="#" onClick={handleColor} active={!!formats?.color}>
            <FormatColor size="20" />
          </Button>
          <Button id="toolbar-link" href="#" onClick={handleLink} active={!!formats?.link}>
            <FormatLink size="20" />
          </Button>
          <Divider />
          <Button href="#" onClick={handleHeader1} active={blockType === 'HEADER1'}>
            <FormatHeader1 size="20" />
          </Button>
          <Button href="#" onClick={handleHeader2} active={blockType === 'HEADER2'}>
            <FormatHeader2 size="20" />
          </Button>
          <Button href="#" onClick={handleHeader3} active={blockType === 'HEADER3'}>
            <FormatHeader3 size="20" />
          </Button>
          <Button href="#" onClick={handleBulletList} active={blockType === 'BULLET-LIST'}>
            <FormatBulletList size="20" />
          </Button>
          <Button href="#" onClick={handleOrderedList} active={blockType === 'ORDERED-LIST'}>
            <FormatNumberList size="20" />
          </Button>
        </Container>
      </>,
      getHtmlElement(scrollContainer) ?? document.body,
    );
  },
);
