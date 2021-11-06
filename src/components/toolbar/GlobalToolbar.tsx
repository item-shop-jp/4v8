import * as React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { EditorController } from '../../hooks/use-editor';

interface Props {
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

export const GlobalToolbar = React.memo(({ editor, ...props }: Props) => {
  const handleBold = React.useCallback((event: React.MouseEvent) => {
    event.preventDefault();
    const caretPosition = editor.getCaretPosition();
    if (!caretPosition) return;
    const block = editor.getBlock(caretPosition.blockId);
    if (!block) return;
    const format = editor.formatText(block.id, caretPosition.index, caretPosition.length, { bold: true });
    console.log(format);
  }, []);

  const handleHeader1 = React.useCallback((event: React.MouseEvent) => {
    event.preventDefault();
    const caretPosition = editor.getCaretPosition();
    if (!caretPosition) return;
    const block = editor.getBlock(caretPosition.blockId);
    if (!block) return;
    editor.updateBlock({ ...block, type: block.type === 'HEADER1' ? 'TEXT' : 'HEADER1' });
    editor.render([block.id]);
    setTimeout(
      () => editor.setCaretPosition({ blockId: block.id, index: caretPosition.index, length: caretPosition.length }),
      10,
    );
  }, []);

  return ReactDOM.createPortal(
    <Container {...props}>
      <Button href="#" onClick={handleHeader1}>
        header1
      </Button>
      <Button href="#" onClick={handleBold}>
        bold
      </Button>
    </Container>,
    document.body,
  );
});
