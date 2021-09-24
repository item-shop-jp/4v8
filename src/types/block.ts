import { Inline } from './inline';

export type BlockType = 'TEXT' | 'HEADER';

export interface Block {
  id: string;
  contents: Inline[];
  attributes: BlockAttributes;
  type: BlockType;
  data?: any;
}

export interface BlockAttributes {
  [key: string]: any;
}
