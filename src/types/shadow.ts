import { Inline } from './inline';
import { BlockAttributes, BlockType } from './block';

export interface Shadow {
  id: string;
  contents: Omit<Inline, 'id'>[];
  attributes: BlockAttributes;
  type: BlockType;
  data?: any;
}
