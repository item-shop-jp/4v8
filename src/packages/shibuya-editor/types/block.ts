import { Inline } from './inline';

export type BlockType =
  | 'PARAGRAPH'
  | 'ORDEREDLIST'
  | 'BULLETLIST'
  | 'BLOCKQUOTE'
  | 'HEADER1'
  | 'HEADER2'
  | 'HEADER3'
  | 'HEADER4'
  | 'HEADER5'
  | 'HEADER6'
  | 'IMAGE'
  | string;

export interface Block {
  id: string;
  contents: Inline[];
  attributes: BlockAttributes;
  type: BlockType;
  data?: any;
  meta?: BlockAttributes;
}

export interface BlockAttributes {
  [key: string]: any;
}
