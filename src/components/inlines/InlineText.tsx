import * as React from 'react';
import styled from 'styled-components';
import { Inline } from '../../types/inline';

interface Props {
  inline: Inline;
}

const SPAN = styled.span``;

export const InlineText = ({ inline, ...props }: Props) => {
  const memoInnerHTML = React.useMemo(() => {
    return { __html: inline.text };
  }, [inline]);

  return <SPAN dangerouslySetInnerHTML={memoInnerHTML} {...props} />;
};
