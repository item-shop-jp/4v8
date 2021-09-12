import * as React from 'react';
import styled from 'styled-components';
import { Block } from '../models/Block';

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
    let html = '';
    block.contents.forEach((v) => {
      switch (v.type) {
        case 'TEXT':
          html = v.type;
          break;
        default:
          break;
      }
    });
    return { __html: html };
  }, [block]);

  switch (block.attributes['header']) {
    case 1:
      return <Header1 dangerouslySetInnerHTML={memoInnerHTML}></Header1>;
    case 2:
      return <Header2 dangerouslySetInnerHTML={memoInnerHTML}></Header2>;
    case 3:
      return <Header3 dangerouslySetInnerHTML={memoInnerHTML}></Header3>;
    default:
      return <Header1 dangerouslySetInnerHTML={memoInnerHTML}></Header1>;
  }
});
