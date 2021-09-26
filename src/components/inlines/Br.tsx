import * as React from 'react';
import styled from 'styled-components';
import { Inline } from '../../types/inline';

interface Props {
  inline: Inline;
}

const BR = styled.br``;

export const Br = React.memo(({ inline, ...props }: Props) => {
  return <BR {...props} />;
});
