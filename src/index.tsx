import React from 'react';
import ReactDOM from 'react-dom';
import styled, { css } from 'styled-components';
import { Editor } from './Editor';
import { LogLevels } from './constants';
import { Paragraph, Header1 } from './components/blocks';

const ScrollContainer = styled.div`
  margin: 50px auto;
  max-width: 600px;
  height: 600px;
  overflow: auto;
  position: relative;
`;

const StyledEditor = styled(Editor)``;

const StyledParagraph = styled(Paragraph)`
  opacity: 0.8;
`;

const StyledH1 = styled(Header1)`
  color: red;
`;

const StyledUnderline = css`
  border-bottom: green 0.05em solid;
`;

export const Container: React.VFC = React.memo(() => {
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
