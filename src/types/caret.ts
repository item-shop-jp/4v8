export interface CaretRange {
  index: number;
  length: number;
}

export interface CaretPosition {
  start: {
    blockId: string;
    offset: number;
  };
  end: {
    blockId: string;
    offset: number;
  };
}
