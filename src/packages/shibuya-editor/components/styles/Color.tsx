import { css } from 'styled-components';

export const Color = (color: string) => css`
  ${color && `color: ${color};`}
`;
