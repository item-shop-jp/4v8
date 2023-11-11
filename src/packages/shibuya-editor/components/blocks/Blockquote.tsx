import * as React from 'react';
import styled from 'styled-components';
import { EditorController } from '../../types/editor';
import { Formats } from '../../types/format';

export interface BlockquoteProps {
  blockId: string;
  formats?: Formats;
  contents: React.ReactNode;
  editor: EditorController;
}
const Container = styled.blockquote`
  outline: 0;
  margin: 2rem 0;
  box-sizing: border-box;
  border-left: 2px solid #eee;
  color: #666;
  padding: 2px 0 2px calc(1.5rem + 1.5em * var(--indent));
  font-size: 0.875rem;
  line-height: 1.6;
`;

export const Blockquote = React.memo(({ blockId, contents, editor, ...props }: BlockquoteProps) => {
  return (
    <Container spellCheck={false} {...props}>
      {contents}
    </Container>
  );
});
