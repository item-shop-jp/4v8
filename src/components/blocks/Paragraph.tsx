import * as React from 'react';
import styled, { css } from 'styled-components';
import { Formats } from '../../types/format';
import { EditorController } from '../../hooks/use-editor';
import { Inline } from '../../types/inline';

export interface ParagraphProps {
  blockId: string;
  formats?: Formats;
  contents: Inline[];
  editor: EditorController;
  selected: boolean;
  onClick: (e: React.MouseEvent) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
}

interface PProps {
  selected: boolean;
}

const P = styled.p<PProps>`
  width: 100%;
  padding: 0;
  font-size: 1rem;
  outline: 0;
  margin-top: 2px;
  margin-bottom: 1px;
  transition: background-color 0.2s;
  ${({ selected }) =>
    selected &&
    css`
      background-color: rgba(46, 170, 220, 0.2);
    `}
`;

export const Paragraph = React.memo(({ blockId, formats, editor, contents, selected, ...props }: ParagraphProps) => {
  return (
    <P selected={selected} {...props}>
      {contents}
    </P>
  );
});
