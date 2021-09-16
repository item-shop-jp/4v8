import * as React from 'react';
import styled from 'styled-components';
import { Block } from '../../types/block';
import { convertInlineArrayToHTML } from '../../utils/html';

interface Props {
  block: Block;
}

const P = styled.p``;

export const Text = React.memo(({ block }: Props) => {
  const memoInnerHTML = React.useMemo(() => {
    return { __html: convertInlineArrayToHTML(block.contents) };
  }, [block]);

  return <P data-block-id="1234-5678" dangerouslySetInnerHTML={memoInnerHTML} />;
});
