import * as React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Subscription } from 'rxjs';
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
      eventEmitter.select(EditorEvents.EVENT_SELECTION_CHANGE).subscribe((v) => {
        const caret = editor.getCaretPosition();
        if (!caret) return;
        setFormats(editor.getFormats(caret.blockId, caret.index, caret.length));
      }),
    );
    return () => {
      subs.unsubscribe();
    };
  });

  return ReactDOM.createPortal(
    <Container {...props}>
      <Button href="#" onClick={handleHeader1}>
        header1
      </Button>
    </Container>,
    document.body,
  );
});
