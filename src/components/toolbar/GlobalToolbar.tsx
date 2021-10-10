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
  background: #eee;
`;

export const GlobalToolbar = ({ editor, ...props }: Props) => {
  const handleBold = React.useCallback(() => {}, []);

  React.useEffect(() => {
    console.log(editor);
  }, []);

  return ReactDOM.createPortal(
    <Container {...props}>
      <button onClick={handleBold}>太字</button>
    </Container>,
    document.body,
  );
};
