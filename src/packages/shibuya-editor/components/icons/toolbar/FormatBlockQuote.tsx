import * as React from 'react';
import { Icon, IconProps, baseIconProps, Path } from '../Icon';

export const FormatBlockQuote: React.FC<IconProps> = React.memo(
  ({ size = baseIconProps.size, fill = baseIconProps.fill, ...props }) => (
    <Icon
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M15.5167 15H11.15L12.8167 11.6667H10.8333V5H17.5V11.0333L15.5167 15ZM13.85 13.3333H14.4833L15.8333 10.6333V6.66667H12.5V10H15.5167L13.85 13.3333ZM7.18333 15H2.81667L4.48333 11.6667H2.5V5H9.16667V11.0333L7.18333 15ZM5.51667 13.3333H6.15L7.5 10.6333V6.66667H4.16667V10H7.18333L5.51667 13.3333Z"
        fill="white"
      />
    </Icon>
  ),
);
