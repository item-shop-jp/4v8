import { Inline } from './inline';

export type BlockType =
  | 'PARAGRAPH'
  | 'ORDERED-LIST'
  | 'BULLET-LIST'
  | 'BLOCKQUOTE'
  | 'CODE-BLOCK'
  | 'HEADER1'
  | 'HEADER2'
  | 'HEADER3'
  | 'HEADER4'
  | 'HEADER5'
  | 'HEADER6'
  | 'IMAGE'
  | 'FILE'
  | string;

export interface Block {
  id: string;
  contents: Inline[];
  attributes: BlockAttributes;
  type: BlockType;
  meta?: BlockAttributes;
}

export interface BlockAttributes {
  [key: string]: any;
}
