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
  box-sizing: border-box;
  padding: 0 12px 0 calc(1.5rem * var(--indent));
  line-height: 1.7;
  margin-bottom: 1.2rem;
`;

export const Paragraph = React.memo(
  ({ blockId, formats, editor, contents, ...props }: ParagraphProps) => {
    return (
      <P spellCheck={false} {...props}>
        {contents}
      </P>
    );
  },
);
