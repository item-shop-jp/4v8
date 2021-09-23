export interface CaretPosition {
  blockId: string;
  blockFormat: string;
  index: number;
  length: number;
  rect: DOMRect;
  collapsed: boolean;
}
