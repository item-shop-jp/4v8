import React from 'react';
import ReactDOM from 'react-dom';
import { Editor } from './Editor';
import { LogLevels } from './constants';

export const Container: React.VFC = React.memo(() => {
  const [isDisplay, setDisplay] = React.useState(true);
  const handleToggleEditor = React.useCallback(() => {
    setDisplay((prev) => !prev);
  }, []);
  const settings = React.useMemo(() => {
    return { logger: { logLevel: LogLevels.INFO } };
  }, []);

  return (
    <>
      {isDisplay && <Editor settings={settings} readOnly={false} />}
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
