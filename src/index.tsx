import React from 'react';
import { Subscription } from 'rxjs';
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
  padding: 0 300px;
`;

const BasicContainer = styled.div`
  margin: 50px auto;
  max-width: 624px;
  position: relative;
`;

const StyledEditor = styled(Editor)`
  border: none;
  padding-top: 50px;
`;

const StyledParagraph = styled(Paragraph)``;

const StyledUnderline = () => css`
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
    collaborator: {
      marginTop: 0,
    },
    uploader: {
      onUpload: async ({ base64 }: { original: File; base64: string | null; isImage: boolean }) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({ original: base64, attributes: { files: ['1234'] } });
          }, 2000);
        });
      },
    },
  },
  scrollMarginBottom: 150,
  scrollMarginTop: 50,
  allowFormats: [],
  indentableFormats: [
    'ORDERED-LIST',
    'BULLET-LIST',
    'PARAGRAPH',
    'BLOCKQUOTE',
    'HEADER1',
    'HEADER2',
    'HEADER3',
  ],
};

export const Container: React.FC = React.memo(() => {
  const editorRef1 = React.useRef<EditorController>(null);
  const editorRef2 = React.useRef<EditorController>(null);
  const formats = React.useMemo(() => {
    return {
      'block/paragraph': StyledParagraph,
      'inline/style/underline': StyledUnderline,
    };
  }, []);

  React.useEffect(() => {
    if (!editorRef2.current) return;
    const subs: Subscription = new Subscription();

    setTimeout(() => {
      editorRef2.current?.setBlocks(
        JSON.parse(
          '[{"id":"OodywE2HkiW1KeTBPCa96","contents":[{"id":"OYbvu_ZB9QppDCeIOSfbZ","attributes":{"bold":true},"text":"今日はいい天気ですね!!🤗","type":"TEXT","isEmbed":false}],"attributes":{"assignees":[{"id":"aaa2","name":"笹川裕也","selected":false},{"id":"aaa1","name":"田中 健太郎","imageUrl":"https://lh3.googleusercontent.com/a-/AAuE7mDqNcnkUNpr7-X6WOAp4QaSI399ToQaP38tSD5x=s100","selected":false}]},"type":"TASK","meta":{"listNumber":0}},{"id":"3ceed0ef-e871-4ee6-82e4-eb7ce2b3d26a","contents":[{"id":"acfc3988-a912-4f3e-b137-47be1a251275","text":"﻿","type":"TEXT","attributes":{},"isEmbed":false}],"attributes":{"tableR":2,"tableC":2},"meta":{"listNumber":0},"type":"TABLE","childBlocks":{"r0-c0":{"id":"2087fd84-0cd7-46bc-ba3f-217bd3370605","contents":[{"id":"3ac9fbe3-e36b-4437-a091-af12250056b7","attributes":{},"text":"﻿","type":"TEXT","isEmbed":false}],"attributes":{},"meta":{},"childBlocks":{},"type":"PARAGRAPH"},"r0-c1":{"id":"32172d94-452c-4d0f-82b0-1a1462be93fd","contents":[{"id":"cde55a28-88f9-499a-9623-15bea8e53c4d","attributes":{},"text":"2","type":"TEXT","isEmbed":false}],"attributes":{},"meta":{},"childBlocks":{},"type":"PARAGRAPH"},"r1-c0":{"id":"20661994-bd40-45d8-aad8-9d15947826c3","contents":[{"id":"07807ab0-ca07-40c2-b38f-fc7a0230664f","attributes":{},"text":"3","type":"TEXT","isEmbed":false}],"attributes":{},"meta":{},"childBlocks":{},"type":"PARAGRAPH"},"r1-c1":{"id":"e9f7a64b-1a59-45a4-bcfc-fe4015e3bcf5","contents":[{"id":"d663153c-e65c-4858-b3b4-dfef5d664ceb","attributes":{},"text":"4","type":"TEXT","isEmbed":false}],"attributes":{},"meta":{},"childBlocks":{},"type":"PARAGRAPH"}}}]',
        ),
      );
    }, 20);

    editorRef2.current.getModule('collaborator').setMembers([
      {
        id: 'aaa1',
        name: '田中 健太郎',
        imageUrl:
          'https://lh3.googleusercontent.com/a-/AAuE7mDqNcnkUNpr7-X6WOAp4QaSI399ToQaP38tSD5x=s100',
      },
      { id: 'aaa2', name: '笹川裕也' },
      { id: 'aaa3', name: '佐藤 太郎' },
      { id: 'aaa4', name: '鈴木 次郎' },
      { id: 'aaa5', name: '高橋 三郎 ' },
      { id: 'aaa6', name: '田中 花子' },
      { id: 'aaa7', name: '渡辺 一郎' },
      { id: 'aaa8', name: '伊藤 美咲' },
      { id: 'aaa9', name: '山本 健太' },
      { id: 'aaa10', name: '小林 誠' },
      { id: 'aaa11', name: '加藤 あきら' },
      { id: 'aaa12', name: '佐々木 美優' },
      { id: 'aaa13', name: '松本 博文' },
    ]);

    const eventEmitter = editorRef2.current.getEventEmitter();
    subs.add(
      eventEmitter.select(EditorEvents.EVENT_EDITOR_CHANGED).subscribe((payload) => {
        // payload.forEach((v: any) => {
        //   const block = editorRef2.current?.getBlock(v.blockId);
        //   console.log(JSON.stringify(block));
        // });
      }),
    );
    return () => {
      subs.unsubscribe();
    };
  }, []);

  return (
    <>
      {/* <BasicContainer id="scroll1">
        <Editor settings={settings} formats={formats} readOnly={false} ref={editorRef1} />
      </BasicContainer> */}
      <ScrollContainer id="scroll2">
        <div style={{ height: '300px' }}></div>
        <StyledEditor
          settings={{ ...settings, scrollContainer: '#scroll2' }}
          formats={formats}
          readOnly={false}
          placeholder="ご自由にお書きください"
          ref={editorRef2}
        />
      </ScrollContainer>
    </>
  );
});

const appRoot = createRoot(document.getElementById('root') as Element);
appRoot.render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>,
);
