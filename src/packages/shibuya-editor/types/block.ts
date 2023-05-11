import { Inline } from './inline';

export type BlockType =
  | 'PARAGRAPH'
  | 'ORDERED-LIST'
  | 'BULLET-LIST'
  | 'BLOCKQUOTE'
  | 'CODE-BLOCK'
  | 'DECISION'
  | 'TASK'
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
  childBlocks: {
    [key: string]: Block;
  };
  meta?: BlockAttributes;
}

export interface BlockAttributes {
  [key: string]: any;
}
