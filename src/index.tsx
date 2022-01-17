import React from 'react';
import ReactDOM from 'react-dom';
import styled, { css } from 'styled-components';
import { LogLevels } from './packages/shibuya-editor/constants';
import { EditorController } from './packages/shibuya-editor/types/editor';
import { Editor, Paragraph, Header1 } from './packages/shibuya-editor';

const ScrollContainer = styled.div`
  margin: 50px auto;
  max-width: 600px;
  height: 600px;
  overflow: auto;
  position: relative;
`;

const BasicContainer = styled.div`
  margin: 50px auto 300px;
  max-width: 600px;
  position: relative;
`;

const StyledParagraph = styled(Paragraph)`
  opacity: 0.8;
`;

const StyledUnderline = css`
  border-bottom: green 0.05em solid;
`;

const settings = {
  modules: {
    logger: {
      logLevel: LogLevels.INFO,
    },
    history: {
      maxStack: 50,
      delay: 1000,
    },
  },
  scrollMarginBottom: 150,
  scrollMarginTop: 50,
  allowAttributes: ['bold', 'strike'],
  allowFormats: [],
  exclusiveLockMode: true,
};

export const Container: React.VFC = React.memo(() => {
  const editorRef = React.useRef<EditorController>(null);
  const formats = React.useMemo(() => {
    return {
      'block/paragraph': StyledParagraph,
      'style/underline': StyledUnderline,
    };
  }, []);

  React.useEffect(() => {
    console.log(editorRef.current);
    editorRef.current?.setBlocks(
      JSON.parse(
        '[{"id":"OodywE2HkiW1KeTBPCa96","contents":[{"id":"OYbvu_ZB9QppDCeIOSfbZ","attributes":{"bold": true},"text":"今日はいい天気ですね🤗","type":"TEXT","isEmbed":false}],"attributes":{},"type":"PARAGRAPH"},{"id":"zB28GJ_DWSjPfe_IGov5-","contents":[{"id":"lNkUDGfX2rsgZhzq_lZ3f","text":"﻿","type":"TEXT","attributes":{},"isEmbed":false}],"attributes":{},"type":"PARAGRAPH"}]',
      ),
    );
  });

  return (
    <BasicContainer id="scroll">
      <Editor settings={settings} formats={formats} readOnly={false} ref={editorRef} />
    </BasicContainer>
  );
});

ReactDOM.render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>,
  document.getElementById('root'),
);
