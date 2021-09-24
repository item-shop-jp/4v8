import * as React from 'react';
import styled from 'styled-components';
import { Block } from '../../types/block';
import { Formats } from '../../types/format';
import { InlineContent } from '../../utils/inline';

interface Props {
  block: Block;
  formats?: Formats;
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

export const Header = React.memo(({ block, formats }: Props) => {
  switch (block.attributes['header']) {
    case 1:
      return (
        <Header1>
          <InlineContent contents={block.contents} formats={formats} />
        </Header1>
      );
    case 2:
      return (
        <Header2>
          <InlineContent contents={block.contents} formats={formats} />
        </Header2>
      );
    case 3:
      return (
        <Header3>
          <InlineContent contents={block.contents} formats={formats} />
        </Header3>
      );
    default:
      return (
        <Header1>
          <InlineContent contents={block.contents} formats={formats} />
        </Header1>
      );
  }
});
