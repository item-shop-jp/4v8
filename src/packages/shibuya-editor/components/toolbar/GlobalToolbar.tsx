import * as React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Subscription, pipe, combineLatestWith } from 'rxjs';
import { EditorEvents } from '../../constants';
import { EditorController } from '../../types/editor';
import { InlineAttributes } from '../../types/inline';

export interface GlobalToolbarProps {
  editor: EditorController;
}

const Container = styled.div`
  position: fixed;
  bottom: 12px;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 8px;
`;

const Button = styled.a`
  margin: 8px;
  border: 1px solid #666;
  border-radius: 4px;
  padding: 4px;
`;

export const GlobalToolbar = React.memo(({ editor, ...props }: GlobalToolbarProps) => {
  const [formats, setFormats] = React.useState<InlineAttributes>({});
  const [isDisplay, setDisplay] = React.useState(false);

  const handleHeader1 = React.useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();
      editor.getModule('toolbar').formatBlock('CODEBLOCK');
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
      editor.getModule('toolbar').formatBlock('ORDEREDLIST');
    },
    [formats],
  );

  const handleBulletList = React.useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();
      editor.getModule('toolbar').formatBlock('BULLETLIST');
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
        }),
    );
    subs.add(
      eventEmitter.select(EditorEvents.EVENT_BLOCK_SELECTED).subscribe((blockIds: string[]) => {
        if (blockIds.length < 1) {
          setDisplay(false);
          return;
        }
        setDisplay(true);
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
          <Button href="#" onClick={handleHeader1}>
            H1
          </Button>
          <Button href="#" onClick={handleBlockquote}>
            引用
          </Button>
          <Button href="#" onClick={handleOrderedList}>
            番号リスト
          </Button>
          <Button href="#" onClick={handleBulletList}>
            リスト
          </Button>
        </Container>
      )}
    </>,
    document.body,
  );
});
