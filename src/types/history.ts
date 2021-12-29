import { Block } from './block';
import { Inline } from './inline';

export type OperationType = 'update_contents' | 'add_block' | 'remove_block';

export interface JSON0 {
  p: [keyof Block, number, keyof Inline, number];
  li: any;
  ld: any;
  si: string;
  sd: string;
}

export interface Op {
  type: OperationType;
  blockId: string;
  undo?: JSON0[];
  redo?: JSON0[];
  block?: Block;
}
