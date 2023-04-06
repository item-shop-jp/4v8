import * as React from 'react';
import { Icon, IconProps, baseIconProps, Path } from '../Icon';

export const FormatItalic: React.FC<IconProps> = React.memo(
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
        d="M8.33333 3.33337V5.83337H10.175L7.325 12.5H5V15H11.6667V12.5H9.825L12.675 5.83337H15V3.33337H8.33333Z"
        fill={fill}
      />
    </Icon>
  ),
);
