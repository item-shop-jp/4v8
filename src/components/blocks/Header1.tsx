import * as React from 'react';
import styled from 'styled-components';
import { EditorController } from '../../hooks/use-editor';
import { Formats } from '../../types/format';
import { Inline } from '../../types/inline';
import { BlockAttributes } from '../../types/block';

interface Props {
  blockId: string;
  formats?: Formats;
  contents: Inline[];
  length: number;
  attributes: BlockAttributes;
  editor: EditorController;
  onClick: (e: React.MouseEvent) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
}
const Header = styled.h1`
  font-size: 24px;
  outline: 0;
  transition: all 0.3s, color 0.3s;
  ::after {
    opacity: 0.3;
    content: attr(placeholder);
  }
`;

// const Header2 = styled.h2`
//   font-size: 20px;
//   outline: 0;
// `;

// const Header3 = styled.h3`
//   font-size: 16px;
//   outline: 0;
// `;

export const Header1 = React.memo(({ blockId, length, contents, attributes, editor, ...props }: Props) => {
  return (
    <Header {...props} placeholder={length < 1 ? 'Heading 1' : ''}>
      {contents}
    </Header>
  );
});