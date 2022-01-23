import { Block } from './block';
import { Inline } from './inline';
import { HistoryType } from '../constants';

export interface JSON0 {
  p: [keyof Block, number, keyof Inline, number];
  li: any;
  ld: any;
  si: string;
  sd: string;
}

export interface UpdateOp {
  type: 'update_contents';
  blockId: string;
  undo: JSON0[];
  redo: JSON0[];
}

export interface AddOp {
  type: 'add_block';
  blockId: string;
  block: Block;
  prevBlockId?: string;
}

export interface RemoveOp {
  type: 'remove_block';
  blockId: string;
  block: Block;
  prevBlockId?: string;
}

export type Op = UpdateOp | AddOp | RemoveOp;
