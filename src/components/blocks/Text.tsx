import * as React from 'react';
import styled from 'styled-components';
import { Block } from '../../types/block';
import { convertInlineArrayToHTML } from '../../utils/html';

interface Props {
  block: Block;
  readOnly: boolean;
  onClick: (e: React.MouseEvent) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
}

const P = styled.p`
  margin: 0;
  padding: 0;
  font-size: 1rem;
`;

export const Text = React.memo(({ block, readOnly = false, ...props }: Props) => {
  const memoInnerHTML = React.useMemo(() => {
    return { __html: convertInlineArrayToHTML(block.contents) };
  }, [block]);
  console.log(props);

  return <P data-block-id={block.id} dangerouslySetInnerHTML={memoInnerHTML} contentEditable={!readOnly} {...props} />;
});
