import * as React from 'react';
import { Icon, IconProps, baseIconProps, Path } from './icon';

export const FormatBold: React.FC<IconProps> = React.memo(
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
        d="M13 8.99171C13.8084 8.43337 14.375 7.51671 14.375 6.66671C14.375 4.78337 12.9167 3.33337 11.0417 3.33337H5.83337V15H11.7C13.4417 15 14.7917 13.5834 14.7917 11.8417C14.7917 10.575 14.075 9.49171 13 8.99171V8.99171ZM8.33337 5.41671H10.8334C11.525 5.41671 12.0834 5.97504 12.0834 6.66671C12.0834 7.35837 11.525 7.91671 10.8334 7.91671H8.33337V5.41671ZM11.25 12.9167H8.33337V10.4167H11.25C11.9417 10.4167 12.5 10.975 12.5 11.6667C12.5 12.3584 11.9417 12.9167 11.25 12.9167Z"
        fill={fill}
      />
    </Icon>
  ),
);
