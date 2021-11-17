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
  ${({ attributes: { bold } }) => bold && 'font-weight: bold'};
  ${({ attributes: { underline } }) => underline && 'border-bottom: 0.05em solid'};
  ${({ attributes: { strike } }) => strike && 'text-decoration: line-through'};
`;

export const InlineText = ({ inline, ...props }: Props) => {
  const memoInnerHTML = React.useMemo(() => {
    return { __html: inline.text.replaceAll('\n', '<br>') };
  }, [inline]);

  return <InlineContent dangerouslySetInnerHTML={memoInnerHTML} attributes={inline.attributes} {...props} />;
};
