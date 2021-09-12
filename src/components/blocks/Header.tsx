import * as React from 'react';
import styled from 'styled-components';
import { Block } from '../../types/block';
import { convertInlineArrayToHTML } from '../../utils/html';

interface Props {
  block: Block;
}

const Header1 = styled.h1`
  font-size: 24px;
`;

const Header2 = styled.h2`
  font-size: 20px;
`;

const Header3 = styled.h3`
  font-size: 16px;
`;

export const Header = React.memo(({ block }: Props) => {
  const memoInnerHTML = React.useMemo(() => {
    return { __html: convertInlineArrayToHTML(block.contents) };
  }, [block]);

  switch (block.attributes['header']) {
    case 1:
      return <Header1 dangerouslySetInnerHTML={memoInnerHTML} />;
    case 2:
      return <Header2 dangerouslySetInnerHTML={memoInnerHTML} />;
    case 3:
      return <Header3 dangerouslySetInnerHTML={memoInnerHTML} />;
    default:
      return <Header1 dangerouslySetInnerHTML={memoInnerHTML} />;
  }
});
