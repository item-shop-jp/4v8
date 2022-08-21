import * as React from 'react';
import styled, { css } from 'styled-components';
import { Formats } from '../../types/format';
import { EditorController } from '../../types/editor';
import { Inline } from '../../types/inline';

export interface ParagraphProps {
  blockId: string;
  formats?: Formats;
  contents: React.ReactNode;
  editor: EditorController;
}

const P = styled.p`
  width: 100%;
  font-size: 1rem;
  outline: 0;
  margin: 0;
  padding: 2px 12px;
  box-sizing: border-box;
  transition: all 0.3s;
  padding-left: calc(12px + 1.5em * var(--indent));
`;

export const Paragraph = React.memo(
  ({ blockId, formats, editor, contents, ...props }: ParagraphProps) => {
    return <P {...props}>{contents}</P>;
  },
);
