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
  width: 100%;
  padding: 0;
  font-size: 1rem;
  outline: 0;
  margin-top: 2px;
  margin-bottom: 1px;
`;

export const Text = React.memo(({ block, readOnly = false, ...props }: Props) => {
  const memoInnerHTML = React.useMemo(() => {
    return { __html: convertInlineArrayToHTML(block.contents) };
  }, [block]);

  return <P className="notranslate" dangerouslySetInnerHTML={memoInnerHTML} contentEditable={!readOnly} {...props} />;
});
