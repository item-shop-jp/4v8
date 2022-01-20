import * as React from 'react';
import styled from 'styled-components';
import { EditorController } from '../../types/editor';
import { Formats } from '../../types/format';
import { Inline } from '../../types/inline';
import { BlockAttributes } from '../../types/block';

export interface Header6Props {
  blockId: string;
  formats?: Formats;
  contents: Inline[];
  length: number;
  attributes: BlockAttributes;
  editor: EditorController;
  onClick: (e: React.MouseEvent) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
}
const Header = styled.h6`
  outline: 0;
  transition: all 0.3s, color 0.3s;
  padding: 2px 12px;
  box-sizing: border-box;
  ::after {
    opacity: 0.3;
    content: attr(placeholder);
  }
`;

export const Header6 = React.memo(
  ({ blockId, length, contents, attributes, editor, ...props }: Header6Props) => {
    return (
      <Header {...props} placeholder={length < 1 ? 'Heading 6' : ''}>
        {contents}
      </Header>
    );
  },
);
