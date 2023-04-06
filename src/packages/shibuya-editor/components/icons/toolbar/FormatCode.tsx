import * as React from 'react';
import { Icon, IconProps, baseIconProps, Path } from '../Icon';

export const FormatCode: React.FC<IconProps> = React.memo(
  ({ size = baseIconProps.size, fill = baseIconProps.fill, ...props }) => (
    <Icon
      width={size}
      height={size}
      fill={fill}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M7.83329 13.8333L3.99996 10L7.83329 6.16667L6.66663 5L1.66663 10L6.66663 15L7.83329 13.8333ZM12.1666 13.8333L16 10L12.1666 6.16667L13.3333 5L18.3333 10L13.3333 15L12.1666 13.8333Z"
        fill={fill}
      />
    </Icon>
  ),
);
