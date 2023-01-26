import styled from 'styled-components';

export interface IconProps {
  size?: string;
  fill?: string;
}

export const baseIconProps: IconProps = {
  size: '24',
};
const Icon = styled.svg`
  max-width: 100%;
  height: auto;
  max-height: 100%;
`;

const Path = styled.path<IconProps>`
  fill: ${({ fill }) => (fill ? fill : '#fff')};
`;

export { Icon, Path };
