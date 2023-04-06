import * as React from 'react';
import { Icon, IconProps, baseIconProps, Path } from './Icon';

export interface CheckSquareProps extends IconProps {
  checked?: boolean;
}

export const CheckSquare: React.FC<CheckSquareProps> = React.memo(
  ({ size = baseIconProps.size, fill = baseIconProps.fill, checked = false, ...props }) => {
    return (
      <Icon
        width={size}
        height={size}
        fill={fill}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        {checked ? (
          <path
            d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM17.99 9L16.58 7.58L9.99 14.17L7.41 11.6L5.99 13.01L9.99 17L17.99 9Z"
            fill={fill}
          />
        ) : (
          <path
            d="M19 5V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z"
            fill={fill}
          />
        )}
      </Icon>
    );
  },
);
