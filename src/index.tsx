import React from 'react';
import { Subscription } from 'rxjs';
import { createRoot } from 'react-dom/client';
import styled, { css } from 'styled-components';
import { EditorEvents, LogLevels } from './packages/shibuya-editor/constants';
import { EditorController } from './packages/shibuya-editor/types/editor';
import { Editor, Paragraph, Header1 } from './packages/shibuya-editor';

const ScrollContainer = styled.div`
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
      marginTop: 310,
    },
    uploader: {
      onUpload: async ({ base64 }: { original: File; base64: string | null; isImage: boolean }) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({ original: base64, attributes: { files: ['1234'] } });
          }, 2000);
        });
      },
      onDownload: (files: string[]) => {
        // console.log(123, files);
      },
    },
    toc: {
      onChange: (labels: { type: string; label: string }[]) => {
        // console.log(123, labels);
      },
    },
  },
  scrollMarginBottom: 150,
  scrollMarginTop: 50,
  allowFormats: [],
  indentableFormats: ['ORDERED-LIST', 'BULLET-LIST', 'PARAGRAPH', 'BLOCKQUOTE', 'TASK', 'DECISION'],
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
        //   if (v.parentBlockId) {
        //     const block = editorRef2.current?.getBlock(v.parentBlockId);
        //     if (!block) return;
        //     const child = block.childBlocks.find((c) => c.id === v.blockId);
        //     console.log(JSON.stringify(child));
        //   } else {
        //     const block = editorRef2.current?.getBlock(v.blockId);
        //     console.log(JSON.stringify(block));
        //   }
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
