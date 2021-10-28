import * as React from 'react';
import styled from 'styled-components';
import { Formats } from '../../types/format';
import { EditorController } from '../../hooks/use-editor';
import { Inline } from '../../types/inline';
import { BlockAttributes } from '../../types/block';

interface Props {
  blockId: string;
  formats?: Formats;
  contents: Inline[];
  attributes: BlockAttributes;
  editor: EditorController;
  onClick: (e: React.MouseEvent) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
}
const Header1 = styled.h1`
  font-size: 24px;
  outline: 0;
`;

const Header2 = styled.h2`
  font-size: 20px;
  outline: 0;
`;

const Header3 = styled.h3`
  font-size: 16px;
  outline: 0;
`;

export const Header = React.memo(({ contents, attributes, ...props }: Props) => {
  switch (attributes['header']) {
    case 1:
      return (
        <Header1 {...props}>
          {contents}
        </Header1>
      );
    case 2:
      return (
        <Header2 {...props}>
          {contents}
        </Header2>
      );
    case 3:
      return (
        <Header3 {...props}>
          {contents}
        </Header3>
      );
    default:
      return (
        <Header1 {...props}>
          {contents}
        </Header1>
      );
  }
});
