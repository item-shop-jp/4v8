import * as React from 'react';
import styled from 'styled-components';
import { Inline } from '../../types/inline';

interface Props {
  inline: Inline;
}

interface InlineContentProps {
  attributes: Inline['attributes'];
}

const InlineContent = styled.span<InlineContentProps>`
  ${({ attributes }) => (attributes?.bold ? 'font-weight: bold' : '')};
`;

export const InlineText = ({ inline, ...props }: Props) => {
  const memoInnerHTML = React.useMemo(() => {
    return { __html: inline.text.replaceAll('\n', '<br>') };
  }, [inline]);
  console.log(inline);

  return <InlineContent dangerouslySetInnerHTML={memoInnerHTML} attributes={inline.attributes} {...props} />;
};
