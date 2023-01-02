import * as React from 'react';
import styled from 'styled-components';
import { EditorController } from '../../types/editor';
import { Formats } from '../../types/format';
import { BlockAttributes } from '../../types/block';

export interface BlockquoteProps {
  blockId: string;
  formats?: Formats;
  contents: React.ReactNode;
  editor: EditorController;
}
const Container = styled.blockquote`
  outline: 0;
  margin: 0 0 0 12px;
  padding: 2px 12px;
  box-sizing: border-box;
  border-left: 3px solid #ccc;
  padding-left: calc(12px + 1.5em * var(--indent));
`;

export const Blockquote = React.memo(({ blockId, contents, editor, ...props }: BlockquoteProps) => {
  return (
    <Container spellCheck={false} {...props}>
      {contents}
    </Container>
  );
});
