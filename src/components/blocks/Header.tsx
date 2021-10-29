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
const Header1 = styled.h1`
  font-size: 24px;
  outline: 0;
  transition: all 0.3s, color 0.3s;
  ::after {
    opacity: 0.3;
    content: attr(placeholder);
  }
`;

const Header2 = styled.h2`
  font-size: 20px;
  outline: 0;
`;

const Header3 = styled.h3`
  font-size: 16px;
  outline: 0;
`;

export const Header = React.memo(({ blockId, length, contents, attributes, editor, ...props }: Props) => {
  switch (attributes['header']) {
    case 1:
      return (
        <Header1 {...props} placeholder={length < 1 ? 'Heading 1' : ''}>
          {contents}
        </Header1>
      );
    case 2:
      return <Header2 {...props}>{contents}</Header2>;
    case 3:
      return <Header3 {...props}>{contents}</Header3>;
    default:
      return <Header1 {...props}>{contents}</Header1>;
  }
});
