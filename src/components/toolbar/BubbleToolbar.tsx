import * as React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Subscription } from 'rxjs';
import { EditorEvents } from '../../constants';
import { EditorController } from '../../hooks/use-editor';
import { InlineAttributes } from '../../types/inline';

export interface BubbleToolbarProps {
  editor: EditorController;
  scrollContainer?: HTMLElement | string;
}

interface ContainerProps {
  top: number;
  left: number;
  collapsed: boolean;
}

interface ToolbarPosition {
  top: number;
  left: number;
}

const Container = styled.div<ContainerProps>`
  position: absolute;
  display: ${({ collapsed }) => (collapsed ? 'none' : 'block')};
  top: ${({ top }) => `${top}px`};
  left: ${({ left }) => `${left}px`};
  transform: translateY(-100%);
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #ccc;
  padding: 4px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  z-index: 1;
`;

const Button = styled.a`
  display: inline-block;
  padding: 2px 8px;
  text-decoration: none;
  &:hover {
    background-color: #e3def3;
    border-radius: 8px;
  }
`;

function getScrollContainer(scrollContainer?: HTMLElement | string) {
  if (!scrollContainer) {
    return null;
  }
  if (typeof scrollContainer === 'string') {
    return document.querySelector<HTMLElement>(scrollContainer);
  }
  return scrollContainer ?? null;
}

export const BubbleToolbar = React.memo(({ editor, scrollContainer, ...props }: BubbleToolbarProps) => {
  const [formats, setFormats] = React.useState<InlineAttributes>({});
  const [position, setPosition] = React.useState<ToolbarPosition>();
  const [collapsed, setCollapsed] = React.useState<boolean>(true);

  const handleBold = React.useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();
      editor.getModule('toolbar').formatInline({ bold: !formats?.bold });
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

  const handleHeader1 = React.useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();
      editor.getModule('toolbar').formatBlock('HEADER1');
    },
    [formats],
  );

  React.useEffect(() => {
    const subs = new Subscription();
    const eventEmitter = editor.getEventEmitter();
    subs.add(
      eventEmitter.on(EditorEvents.EVENT_SELECTION_CHANGE).subscribe((v) => {
        const caret = editor.getCaretPosition();
        if (!caret) {
          setPosition(undefined);
          setCollapsed(true);
          return;
        }
        const container = getScrollContainer(scrollContainer);
        if (container) {
          const containerRect = container.getBoundingClientRect();
          const top = (container?.scrollTop ?? 0) + caret.rect.top - containerRect.top;
          const left = caret.rect.left - containerRect.left;
          setPosition({ top, left });
        } else {
          const scrollEl = document.scrollingElement as HTMLElement;
          const top = scrollEl.scrollTop + caret.rect.top;
          const left = caret.rect.left;
          setPosition({ top, left });
        }

        setCollapsed(caret.collapsed);
        setFormats(editor.getFormats(caret.blockId, caret.index, caret.length));
      }),
    );
    return () => {
      subs.unsubscribe();
    };
  }, [editor, scrollContainer]);

  return ReactDOM.createPortal(
    <Container collapsed={collapsed} top={position?.top ?? 0} left={position?.left ?? 0} {...props}>
      <Button href="#" onClick={handleHeader1}>
        H1
      </Button>
      <Button href="#" onClick={handleBold}>
        B
      </Button>
      <Button href="#" onClick={handleUnderline}>
        U
      </Button>
      <Button href="#" onClick={handleStrike}>
        S
      </Button>
    </Container>,
    getScrollContainer(scrollContainer) ?? document.body,
  );
});