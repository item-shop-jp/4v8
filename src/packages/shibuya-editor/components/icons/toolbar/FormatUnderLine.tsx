import * as React from 'react';
import { Icon, IconProps, baseIconProps, Path } from '../Icon';

export const FormatUnderLine: React.FC<IconProps> = React.memo(
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
        d="M10.6583 14.125C13.1833 13.8 15 11.5333 15 8.99167V3.54167C15 2.96667 14.5333 2.5 13.9583 2.5C13.3833 2.5 12.9166 2.96667 12.9166 3.54167V9.08333C12.9166 10.475 11.975 11.7417 10.6083 12.0167C8.73329 12.4083 7.08329 10.975 7.08329 9.16667V3.54167C7.08329 2.96667 6.61663 2.5 6.04163 2.5C5.46663 2.5 4.99996 2.96667 4.99996 3.54167V9.16667C4.99996 12.1417 7.60829 14.5167 10.6583 14.125ZM4.16663 16.6667C4.16663 17.125 4.54163 17.5 4.99996 17.5H15C15.4583 17.5 15.8333 17.125 15.8333 16.6667C15.8333 16.2083 15.4583 15.8333 15 15.8333H4.99996C4.54163 15.8333 4.16663 16.2083 4.16663 16.6667Z"
        fill={fill}
      />
    </Icon>
  ),
);
