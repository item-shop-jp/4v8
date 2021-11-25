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

const BasicContainer = styled.div`
  margin: 250px auto 300px;
  max-width: 600px;
  position: relative;
`;

const StyledParagraph = styled(Paragraph)`
  opacity: 0.8;
`;

const StyledH1 = styled(Header1)`
  color: red;
`;

const StyledUnderline = css`
  border-bottom: green 0.05em solid;
`;

const settings = {
  modules: {
    logger: {
      logLevel: LogLevels.INFO,
    },
  },
  scrollMarginBottom: 250,
  scrollMarginTop: 50,
  allowAttributes: ['bold', 'strike'],
  allowFormats: [],
};

export const Container: React.VFC = React.memo(() => {
  const formats = React.useMemo(() => {
    return {
      'block/paragraph': StyledParagraph,
      'block/header1': StyledH1,
      'style/underline': StyledUnderline,
    };
  }, []);

  return (
    <BasicContainer id="scroll">
      <Editor settings={settings} formats={formats} readOnly={false} />
    </BasicContainer>
  );
});

ReactDOM.render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>,
  document.getElementById('root'),
);
