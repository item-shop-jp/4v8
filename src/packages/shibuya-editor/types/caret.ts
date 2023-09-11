export interface CaretPosition {
  blockId: string;
  childBlockId: string | null;
  blockFormat: string;
  index: number;
  length: number;
  collapsed: boolean;
  isTop: boolean;
  isBottom: boolean;
  rect: DOMRect;
}
