export interface Caret {
  blockId: string;
  offset: number;
}

export interface CaretPosition {
  start: Caret;
  end: Caret;
  collapsed: boolean;
}
