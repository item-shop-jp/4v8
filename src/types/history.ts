import { Block } from './block';

export type OperationType = 'update_contents' | 'add_block' | 'remove_block';

export interface JSON0 {
  p: number | string[];
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
