import React from 'react';
import ReactDOM from 'react-dom';
import styled, { css } from 'styled-components';
import { Editor } from './Editor';
import { LogLevels } from './constants';
import { Text, Header1 } from './components/blocks';

const StyledEditor = styled(Editor)`
  margin-top: 50px;
  max-width: 600px;
`;

const StyledText = styled(Text)`
  opacity: 0.8;
`;

const StyledH1 = styled(Header1)`
  color: red;
`;

const StyledUnderline = css`
  border-bottom: green 0.05em solid;
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
    return {
      'block/text': StyledText,
      'block/header1': StyledH1,
      'style/underline': StyledUnderline,
    };
  }, []);

  return <StyledEditor settings={settings} formats={formats} readOnly={false} />;
});

ReactDOM.render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>,
  document.getElementById('root'),
);
