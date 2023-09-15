import * as React from 'react';
import { Icon, IconProps, baseIconProps, Path } from './Icon';

export const Copy: React.FC<IconProps> = React.memo(
  ({ size = baseIconProps.size, fill = baseIconProps.fill, ...props }) => (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      height={size + 'px'}
      viewBox="0 0 24 24"
      width={size + 'px'}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
    </Icon>
  ),
);
