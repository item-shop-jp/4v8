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
  outline: 0;
  margin: 0 0 0 12px;
  padding: 2px 12px;
  box-sizing: border-box;
  border-left: 3px solid #ccc;
  padding-left: calc(12px + 1.5em * var(--indent));
`;

export const CodeBlock = React.memo(
  ({ blockId, editor, contents, formats, ...props }: CodeBlockProps) => {
    return <Container {...props}>{contents}</Container>;
  },
);
