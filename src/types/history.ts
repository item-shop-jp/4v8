import { TextOp } from 'ot-text-unicode';
import { Block } from './block';
import { Source } from './editor';

export type OperationType = 'update_contents' | 'add_block' | 'remove_block';

export interface JSONOpComponent {
  i?: any;
  r?: any;
  p?: number;
  d?: number;
  es?: TextOp;
  ena?: number;
  e?: any;
  et?: string;
}

export type JSONOpList = (number | string | JSONOpComponent | JSONOpList)[];

export interface Op {
  type: OperationType;
  blockId: string;
  ops?: JSONOpList;
  block?: Block;
  source: Source;
}
