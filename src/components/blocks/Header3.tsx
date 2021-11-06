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
const Header = styled.h3`
  outline: 0;
  transition: all 0.3s, color 0.3s;
  ::after {
    opacity: 0.3;
    content: attr(placeholder);
  }
`;

export const Header3 = React.memo(({ blockId, length, contents, attributes, editor, ...props }: Props) => {
  return (
    <Header {...props} placeholder={length < 1 ? 'Heading 3' : ''}>
      {contents}
    </Header>
  );
});
