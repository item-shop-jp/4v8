import * as React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Subscription } from 'rxjs';
import { EditorEvents } from '../../constants';
import { EditorController } from '../../types/editor';
import { InlineAttributes } from '../../types/inline';
import { BlockType } from '../../types/block';
import { getHtmlElement } from '../../utils/dom';
import { LinkPopup, Tooltip } from '../popups';
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

export const TOOLBAR_CHILD_WIDTH = 34;

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

export const BubbleToolbar = React.memo(
  ({ editor, scrollContainer, ...props }: BubbleToolbarProps) => {
    const [formats, setFormats] = React.useState<InlineAttributes>({});
    const [position, setPosition] = React.useState<ToolbarPosition>();
    const [isDisplay, setDisplay] = React.useState<boolean>(false);
    const [currentCaretPosition, setCurrentCaretPosition] = React.useState<CaretPosition | null>();
    const [toolbarWidth, setToolbarWidth] = React.useState(0);
    const containerRef = React.useRef<HTMLDivElement>(null);

    const handleBold = React.useCallback(
      (event: React.MouseEvent) => {
        event.preventDefault();
        editor.getModule('toolbar').setUpdating(true);
        editor.getModule('toolbar').formatInline({ bold: !formats?.bold });
        setTimeout(() => {
          editor.getModule('toolbar').setUpdating(false);
        }, 100);
      },
      [formats],
    );

    const handleItalic = React.useCallback(
      (event: React.MouseEvent) => {
        event.preventDefault();
        editor.getModule('toolbar').setUpdating(true);
        editor.getModule('toolbar').formatInline({ italic: !formats?.italic });
        setTimeout(() => {
          editor.getModule('toolbar').setUpdating(false);
        }, 100);
      },
      [formats],
    );

    const handleUnderline = React.useCallback(
      (event: React.MouseEvent) => {
        event.preventDefault();
        editor.getModule('toolbar').setUpdating(true);
        editor.getModule('toolbar').formatInline({ underline: !formats?.underline });
        setTimeout(() => {
          editor.getModule('toolbar').setUpdating(false);
        }, 100);
      },
      [formats],
    );

    const handleStrike = React.useCallback(
      (event: React.MouseEvent) => {
        event.preventDefault();
        editor.getModule('toolbar').setUpdating(true);
        editor.getModule('toolbar').formatInline({ strike: !formats?.strike });
        setTimeout(() => {
          editor.getModule('toolbar').setUpdating(false);
        }, 100);
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
        editor.getModule('toolbar').setUpdating(true);
        editor.getModule('toolbar').formatInline({ code: !formats?.code });
        setTimeout(() => {
          editor.getModule('toolbar').setUpdating(false);
        }, 100);
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
          if (editor.getModule('toolbar').getUpdating()) return;
          const caret = editor.getCaretPosition();
          if (!caret) {
            setPosition(undefined);
            setDisplay(false);
            return;
          }
          const block = editor.getBlock(caret.blockId);

          const { disableDecorationFormats } = editor.getSettings();
          if (!block || disableDecorationFormats.includes(block.type) || !editor.hasFocus()) {
            setPosition(undefined);
            setDisplay(false);
            return;
          }
          if (caret.childBlockId) {
            const childBlock = block.childBlocks.find((v) => v.id === caret.childBlockId);
            // 子要素の場合
            if (childBlock) {
              updatePosition(caret);
              setDisplay(!caret.collapsed);
              setFormats(
                editor.getChildFormats(
                  caret.blockId,
                  caret.childBlockId,
                  caret.index,
                  caret.length,
                ),
              );
              return;
            }
          }

          const blockLength = editor.getBlockLength(caret?.blockId ?? '') ?? 0;
          if (blockLength < 1) {
            setPosition(undefined);
            setDisplay(false);
            return;
          }
          updatePosition(caret);
          setDisplay(!caret.collapsed);
          setFormats(editor.getFormats(caret.blockId, caret.index, caret.length));
        }),
      );

      subs.add(
        eventEmitter.select<string[]>(EditorEvents.EVENT_BLOCK_RERENDER).subscribe(() => {
          if (editor.getModule('toolbar')?.getUpdating()) return;
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
          <Tooltip
            targetElement={
              <Button href="#" onClick={handleBold} active={!!formats?.bold}>
                <FormatBold size="20" />
              </Button>
            }
            maxWidth={200}
            position={'top'}
          >
            太字
            <br />
            <div className="description">Ctrl + B</div>
          </Tooltip>
          <Tooltip
            targetElement={
              <Button href="#" onClick={handleItalic} active={!!formats?.italic}>
                <FormatItalic size="20" />
              </Button>
            }
            maxWidth={200}
            position={'top'}
          >
            斜体
            <br />
            <div className="description">Ctrl + I</div>
          </Tooltip>
          <Tooltip
            targetElement={
              <Button href="#" onClick={handleUnderline} active={!!formats?.underline}>
                <FormatUnderLine size="20" />
              </Button>
            }
            maxWidth={200}
            position={'top'}
          >
            下線
            <br />
            <div className="description">Ctrl + U</div>
          </Tooltip>
          <Tooltip
            targetElement={
              <Button href="#" onClick={handleStrike} active={!!formats?.strike}>
                <FormatStrike size="20" />
              </Button>
            }
            maxWidth={200}
            position={'top'}
          >
            打消し線
          </Tooltip>
          <Tooltip
            targetElement={
              <Button id="toolbar-palette" href="#" onClick={handleColor} active={!!formats?.color}>
                <FormatColor size="20" />
              </Button>
            }
            maxWidth={200}
            position={'top'}
          >
            文字色を変更
          </Tooltip>
          <Tooltip
            targetElement={
              <Button id="toolbar-link" href="#" onClick={handleLink} active={!!formats?.link}>
                <FormatLink size="20" />
              </Button>
            }
            maxWidth={200}
            position={'top'}
          >
            リンクを追加
          </Tooltip>
          <Tooltip
            targetElement={
              <Button href="#" onClick={handleInlineCode} active={!!formats?.code}>
                <FormatCode size="20" />
              </Button>
            }
            maxWidth={200}
            position={'top'}
          >
            インラインコード
          </Tooltip>
        </Container>
      </>,
      getHtmlElement(scrollContainer) ?? document.body,
    );
  },
);
