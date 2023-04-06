import * as React from 'react';
import { Icon, IconProps, baseIconProps, Path } from '../Icon';

export const FormatHeader1: React.FC<IconProps> = React.memo(
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
        d="M3.33337 14.8485V3.33337H4.72779V8.46122H10.8677V3.33337H12.2621V14.8485H10.8677V9.69819H4.72779V14.8485H3.33337Z"
        fill={fill}
      />
      <Path
        d="M16.7873 8.78792V14.8485H15.5059V10.0042H15.4704L14.0825 10.8742V9.73785L15.5829 8.78792H16.7873Z"
        fill={fill}
      />
    </Icon>
  ),
);
