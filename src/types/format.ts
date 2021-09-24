import * as React from 'react';
import { Block } from './block';

export interface Formats {
  [key: string]: React.FC<any>;
}
