import * as React from 'react';
import styled from 'styled-components';
import { Inline } from '../../types/inline';

interface Props {
  inline: Inline;
}

const SPAN = styled.span``;

export const InlineText = ({ inline, ...props }: Props) => {
  console.log('render');
  const memoInnerHTML = React.useMemo(() => {
    return { __html: inline.text.replace('\n', '<br>') };
  }, [inline]);

  React.useEffect(() => {
    console.log('render');
    return () => {
      console.log('destory');
    };
  });

  return <SPAN dangerouslySetInnerHTML={memoInnerHTML} {...props} />;
};
