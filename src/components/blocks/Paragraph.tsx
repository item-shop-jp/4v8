import * as React from 'react';
import styled from 'styled-components';
import { Formats } from '../../types/format';
import { EditorController } from '../../hooks/use-editor';
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
  padding: 0;
  font-size: 1rem;
  outline: 0;
  margin-top: 2px;
  margin-bottom: 1px;
`;

export const Paragraph = React.memo(({ blockId, formats, editor, contents, ...props }: ParagraphProps) => {
  return <P {...props}>{contents}</P>;
});
