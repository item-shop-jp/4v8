import * as React from 'react';
import styled from 'styled-components';
import { EditorController } from '../../types/editor';
import { Formats } from '../../types/format';

export interface CodeBlockProps {
  blockId: string;
  formats?: Formats;
  contents: React.ReactNode;
  editor: EditorController;
}
const Container = styled.div`
  background: #272822;
  outline: 0;
  padding: 1em;
  margin: 0.5em 0;
  overflow: auto;
  border-radius: 0.3em;
  color: #f8f8f2;
  text-shadow: 0 1px rgba(0, 0, 0, 0.3);
  font-size: 1em;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;
  tab-size: 2;
  hyphens: none;
  padding-left: calc(12px + 1.5em * var(--indent));
`;

export const CodeBlock = React.memo(
  ({ blockId, editor, contents, formats, ...props }: CodeBlockProps) => {
    return (
      <Container id="test" spellCheck={false} {...props}>
        {contents}
      </Container>
    );
  },
);
