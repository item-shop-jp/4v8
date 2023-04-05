import * as React from 'react';
import { Icon, IconProps, baseIconProps, Path } from './icon';

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
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        {checked ? (
          <path
            d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM16 16H2V2H16V16ZM14.99 6L13.58 4.58L6.99 11.17L4.41 8.6L2.99 10.01L6.99 14L14.99 6Z"
            fill="#18181B"
          />
        ) : (
          <path
            d="M16 2V16H2V2H16ZM16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0Z"
            fill="#18181B"
          />
        )}
      </Icon>
    );
  },
);
