import * as React from 'react';
import styled from 'styled-components';

interface Props {
  color: string;
  onClick: (e: React.MouseEvent, color: string) => void;
}

interface ColorProps {
  color: string;
}

const Container = styled.div<ColorProps>`
  width: 12px;
  height: 12px;
  background: ${({ color }) => color};
  cursor: pointer;
  border-radius: 40px;
`;

export const Color = React.memo(({ color, onClick }: Props) => {
  const handleClick = React.useCallback(
    (e: React.MouseEvent) => {
      onClick(e, color);
    },
    [color, onClick],
  );

  return <Container color={color} onClick={handleClick} />;
});
