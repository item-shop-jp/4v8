import * as React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Subscription, pipe, combineLatestWith } from 'rxjs';
import { EditorEvents } from '../../constants';
import { EditorController } from '../../types/editor';
import { InlineAttributes } from '../../types/inline';
import {
  FormatBlockQuote,
  FormatBulletList,
  FormatCodeBlock,
  FormatDecision,
  FormatHeader1,
  FormatHeader2,
  FormatHeader3,
  FormatNumberList,
  FormatTask,
} from '../icons';
import { BlockType } from '../../types';

export interface GlobalToolbarProps {
  editor: EditorController;
}

interface ButtonProps {
  active: boolean;
}

const Container = styled.div`
  position: fixed;
  bottom: 12px;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 34px;
  display: flex;
  align-items: center;
  position: absolute;
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

export const GlobalToolbar = React.memo(({ editor, ...props }: GlobalToolbarProps) => {
  const [formats, setFormats] = React.useState<InlineAttributes>({});
  const [blockType, setBlockType] = React.useState<BlockType>();

  const [isDisplay, setDisplay] = React.useState(false);

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

  const handleCodeBlock = React.useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();
      editor.getModule('toolbar').formatBlock('CODE-BLOCK');
    },
    [formats],
  );

  const handleDecision = React.useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();
      editor.getModule('toolbar').formatBlock('DECISION');
    },
    [formats],
  );

  const handleTask = React.useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();
      editor.getModule('toolbar').formatBlock('TASK');
    },
    [formats],
  );

  const handleBlockquote = React.useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();
      editor.getModule('toolbar').formatBlock('BLOCKQUOTE');
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

  React.useEffect(() => {
    const subs = new Subscription();
    const eventEmitter = editor.getEventEmitter();
    subs.add(
      eventEmitter
        .select(EditorEvents.EVENT_SELECTION_CHANGE)
        .pipe(combineLatestWith(eventEmitter.select(EditorEvents.EVENT_BLOCK_SELECTED)))
        .subscribe((v) => {
          const caret = editor.getCaretPosition();
          if (!caret || !editor.hasFocus()) {
            if (editor.getModule('selector').getSelectedBlocks().length > 0) return;
            setDisplay(false);
            return;
          }
          setDisplay(true);
          setFormats(editor.getFormats(caret.blockId, caret.index, caret.length));
          setBlockType(editor.getBlock(caret.blockId)?.type);
        }),
    );
    return () => {
      subs.unsubscribe();
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      {isDisplay && (
        <Container {...props}>
          <Button href="#" onClick={handleHeader1} active={blockType === 'HEADER1'}>
            <FormatHeader1 size="20" />
          </Button>
          <Button href="#" onClick={handleHeader2} active={blockType === 'HEADER2'}>
            <FormatHeader2 size="20" />
          </Button>
          <Button href="#" onClick={handleHeader3} active={blockType === 'HEADER3'}>
            <FormatHeader3 size="20" />
          </Button>
          <Divider />
          <Button href="#" active={blockType === 'CODE-BLOCK'} onClick={handleCodeBlock}>
            <FormatCodeBlock size="20" />
          </Button>
          <Button href="#" active={blockType === 'BLOCKQUOTE'} onClick={handleBlockquote}>
            <FormatBlockQuote size="20" />
          </Button>
          <Divider />
          <Button href="#" active={blockType === 'ORDERED-LIST'} onClick={handleOrderedList}>
            <FormatNumberList size="20" />
          </Button>
          <Button href="#" active={blockType === 'BULLET-LIST'} onClick={handleBulletList}>
            <FormatBulletList size="20" />
          </Button>
          <Divider />
          <Button href="#" active={blockType === 'TASK'} onClick={handleTask}>
            <FormatTask size="20" />
          </Button>
          <Button href="#" active={blockType === 'DECISION'} onClick={handleDecision}>
            <FormatDecision size="20" />
          </Button>
        </Container>
      )}
    </>,
    document.body,
  );
});
