import React from 'react';
import ReactDOM from 'react-dom';
import { Editor } from './Editor';

export const Container: React.VFC = React.memo(() => {
  const [isDisplay, setDisplay] = React.useState(true);
  const handleToggleEditor = React.useCallback(() => {
    setDisplay((prev) => !prev);
  }, []);
  return (
    <>
      {isDisplay && <Editor />}
      <button onClick={handleToggleEditor}>表示・非表示</button>
    </>
  );
});

ReactDOM.render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>,
  document.getElementById('root'),
);
