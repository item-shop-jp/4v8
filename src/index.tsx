import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Editor } from './Editor';
import { LogLevels } from './constants';
import { Text } from './components/blocks';

const StyledText = styled(Text)`
  opacity: 0.8;
`;

export const Container: React.VFC = React.memo(() => {
  const [isDisplay, setDisplay] = React.useState(true);
  const handleToggleEditor = React.useCallback(() => {
    setDisplay((prev) => !prev);
  }, []);
  const settings = React.useMemo(() => {
    return { logger: { logLevel: LogLevels.INFO } };
  }, []);
  const formats = React.useMemo(() => {
    return { text: StyledText };
  }, []);

  return (
    <>
      {isDisplay && <Editor settings={settings} formats={formats} readOnly={false} />}
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
