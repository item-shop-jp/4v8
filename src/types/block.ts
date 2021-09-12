import { Inline } from './inline';

export type BlockType = 'TEXT' | 'HEADER';

export interface Block {
  contents: Inline[];
  attributes: BlockAttributes;
  type: BlockType;
}

export interface BlockAttributes {
  [key: string]: any;
}
