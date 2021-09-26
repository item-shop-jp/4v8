import * as React from 'react';
import styled from 'styled-components';
import { Block } from '../../types/block';
import { Formats } from '../../types/format';
import { InlineContent } from '../../utils/inline';

interface Props {
  block: Block;
  formats?: Formats;
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

export const Text = React.memo(({ block, formats, ...props }: Props) => {
  const memoContents = React.useMemo(() => {
    return InlineContent({ contents: block.contents, formats });
  }, [block]);

  return <P {...props}>{memoContents}</P>;
});
