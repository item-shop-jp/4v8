import { Inline } from './inline';

export type BlockType = 'TEXT' | 'HEADER1' | 'HEADER2' | 'HEADER3' | 'HEADER4' | 'HEADER5' | 'HEADER6';

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
