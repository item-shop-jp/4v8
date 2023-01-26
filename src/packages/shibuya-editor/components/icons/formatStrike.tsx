import * as React from 'react';
import { Icon, IconProps, baseIconProps, Path } from './icon';

export const FormatStrike: React.FC<IconProps> = React.memo(
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
        d="M6.03333 7.29167C5.81667 6.89167 5.70833 6.43333 5.70833 5.9C5.70833 5.39167 5.81667 4.93333 6.04167 4.50833C6.25833 4.09167 6.56667 3.73333 6.96667 3.43333C7.36667 3.14167 7.84167 2.90833 8.38333 2.74167C8.93333 2.58333 9.54167 2.5 10.2 2.5C10.875 2.5 11.4833 2.59167 12.0417 2.78333C12.5917 2.96667 13.0667 3.23333 13.45 3.56667C13.8417 3.9 14.1417 4.3 14.35 4.75833C14.5583 5.21667 14.6667 5.71667 14.6667 6.26667H12.1583C12.1583 6.00833 12.1167 5.775 12.0333 5.55833C11.9583 5.33333 11.8333 5.15 11.6667 4.99167C11.5 4.83333 11.2917 4.71667 11.0417 4.625C10.7917 4.54167 10.4917 4.49167 10.1583 4.49167C9.83333 4.49167 9.54167 4.525 9.3 4.6C9.05833 4.675 8.85833 4.775 8.7 4.9C8.54167 5.03333 8.41667 5.18333 8.33333 5.35833C8.25 5.53333 8.20833 5.71667 8.20833 5.90833C8.20833 6.30833 8.41667 6.64167 8.825 6.91667C9.14167 7.125 9.46667 7.31667 10 7.5H6.15833C6.11667 7.43333 6.06667 7.35833 6.03333 7.29167ZM17.5 10V8.33333H2.5V10H10.5167C10.6667 10.0583 10.85 10.1167 10.975 10.1667C11.2833 10.3083 11.525 10.45 11.7 10.5917C11.875 10.7333 11.9917 10.8917 12.0583 11.0667C12.1167 11.2333 12.15 11.425 12.15 11.6417C12.15 11.8333 12.1083 12.0167 12.0333 12.1917C11.9583 12.3583 11.8417 12.5083 11.6833 12.6333C11.525 12.7583 11.3333 12.85 11.0917 12.925C10.85 12.9917 10.5667 13.0333 10.25 13.0333C9.89167 13.0333 9.55833 13 9.26667 12.925C8.975 12.85 8.71667 12.7333 8.50833 12.575C8.3 12.4167 8.13333 12.2083 8.01667 11.95C7.9 11.6917 7.80833 11.3167 7.80833 10.9417H5.33333C5.33333 11.4 5.4 11.8833 5.53333 12.2583C5.66667 12.6333 5.84167 12.9667 6.075 13.2667C6.30833 13.5583 6.575 13.8167 6.89167 14.0333C7.2 14.25 7.54167 14.4333 7.90833 14.575C8.275 14.7167 8.65833 14.825 9.05833 14.9C9.45833 14.9667 9.85833 15.0083 10.2583 15.0083C10.925 15.0083 11.5333 14.9333 12.075 14.775C12.6167 14.6167 13.0833 14.4 13.4667 14.1167C13.85 13.8333 14.15 13.475 14.3583 13.0583C14.5667 12.6417 14.675 12.1667 14.675 11.6333C14.675 11.1333 14.5917 10.6833 14.4167 10.2917C14.375 10.2 14.325 10.1 14.275 10.0167H17.5V10Z"
        fill={fill}
      />
    </Icon>
  ),
);
