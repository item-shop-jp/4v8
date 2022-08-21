import React from 'react';
import { createRoot } from 'react-dom/client';
import styled, { css } from 'styled-components';
import { EditorEvents, LogLevels } from './packages/shibuya-editor/constants';
import { EditorController } from './packages/shibuya-editor/types/editor';
import { Editor, Paragraph, Header1 } from './packages/shibuya-editor';

const ScrollContainer = styled.div`
  margin: 50px auto;
  max-width: 600px;
  height: 600px;
  overflow: auto;
  position: relative;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 12px 0;
`;

const BasicContainer = styled.div`
  margin: 50px auto;
  max-width: 624px;
  position: relative;
`;

const StyledEditor = styled(Editor)`
  border: none;
`;

const StyledParagraph = styled(Paragraph)``;

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
    uploader: {
      onUpload: async ({ base64 }: { original: File; base64: string | null; isImage: boolean }) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(base64);
          }, 2000);
        });
      },
    },
  },
  scrollMarginBottom: 150,
  scrollMarginTop: 50,
  allowFormats: [],
  indentatableFormats: [
    'ORDEREDLIST',
    'BULLETLIST',
    'PARAGRAPH',
    'BLOCKQUOTE',
    'HEADER1',
    'HEADER2',
    'HEADER3',
  ],
  exclusiveLockMode: true,
};

export const Container: React.FC = React.memo(() => {
  const editorRef1 = React.useRef<EditorController>(null);
  const editorRef2 = React.useRef<EditorController>(null);
  const formats = React.useMemo(() => {
    return {
      'block/paragraph': StyledParagraph,
      'style/underline': StyledUnderline,
    };
  }, []);

  React.useEffect(() => {
    if (!editorRef1.current) return;

    editorRef1.current.setBlocks(
      JSON.parse(
        '[{"id":"OodywE2HkiW1KeTBPCa96","contents":[{"id":"OYbvu_ZB9QppDCeIOSfbZ","attributes":{"bold": true},"text":"今日はいい天気ですね🤗","type":"TEXT","isEmbed":false}],"attributes":{},"type":"PARAGRAPH"},{"id":"zB28GJ_DWSjPfe_IGov5-","contents":[{"id":"lNkUDGfX2rsgZhzq_lZ3f","text":"﻿","type":"TEXT","attributes":{},"isEmbed":false}],"attributes":{},"type":"PARAGRAPH"}]',
      ),
    );

    const eventEmitter = editorRef1.current.getEventEmitter();
    eventEmitter.select(EditorEvents.EVENT_EDITOR_CHANGED).subscribe((payload) => {
      //console.log(payload);
      // payload.forEach((v: any) => {
      //   console.log(JSON.stringify(editorRef1.current?.getBlock(v.blockId)));
      // });
    });
  }, []);

  return (
    <>
      <BasicContainer id="scroll1">
        <Editor settings={settings} formats={formats} readOnly={false} ref={editorRef1} />
      </BasicContainer>
      {/* <ScrollContainer id="scroll2">
        <StyledEditor
          scrollContainer={'#scroll2'}
          settings={settings}
          formats={formats}
          readOnly={false}
          ref={editorRef2}
        />
      </ScrollContainer> */}
    </>
  );
});

const appRoot = createRoot(document.getElementById('root') as Element);
appRoot.render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>,
);
