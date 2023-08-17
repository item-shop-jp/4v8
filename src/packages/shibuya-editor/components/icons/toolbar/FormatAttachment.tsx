import * as React from 'react';
import { Icon, IconProps, baseIconProps, Path } from '../Icon';

export const FormatAttachment: React.FC<IconProps> = React.memo(
  ({ size = baseIconProps.size, fill = baseIconProps.fill, ...props }) => (
    <Icon
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M15.4167 13.3346H5.83333C3.99167 13.3346 2.5 11.843 2.5 10.0013C2.5 8.15964 3.99167 6.66797 5.83333 6.66797H16.25C17.4 6.66797 18.3333 7.6013 18.3333 8.7513C18.3333 9.9013 17.4 10.8346 16.25 10.8346H7.5C7.04167 10.8346 6.66667 10.4596 6.66667 10.0013C6.66667 9.54297 7.04167 9.16797 7.5 9.16797H15.4167V7.91797H7.5C6.35 7.91797 5.41667 8.8513 5.41667 10.0013C5.41667 11.1513 6.35 12.0846 7.5 12.0846H16.25C18.0917 12.0846 19.5833 10.593 19.5833 8.7513C19.5833 6.90964 18.0917 5.41797 16.25 5.41797H5.83333C3.3 5.41797 1.25 7.46797 1.25 10.0013C1.25 12.5346 3.3 14.5846 5.83333 14.5846H15.4167V13.3346Z"
        fill="white"
      />
    </Icon>
  ),
);
