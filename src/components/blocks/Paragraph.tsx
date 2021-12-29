import * as React from 'react';
import styled, { css } from 'styled-components';
import { Formats } from '../../types/format';
import { EditorController } from '../../types/editor';
import { Inline } from '../../types/inline';

export interface ParagraphProps {
  blockId: string;
  formats?: Formats;
  contents: Inline[];
  editor: EditorController;
  onClick: (e: React.MouseEvent) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
}

const P = styled.p`
  width: 100%;
  font-size: 1rem;
  outline: 0;
  margin: 0;
`;

export const Paragraph = React.memo(
  ({ blockId, formats, editor, contents, ...props }: ParagraphProps) => {
    return <P {...props}>{contents}</P>;
  },
);
