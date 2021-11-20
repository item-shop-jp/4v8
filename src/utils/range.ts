export function caretRangeFromPoint(x: number, y: number): Range | null {
  // for chrome & safari & edge
  if (document.caretRangeFromPoint) {
    return document.caretRangeFromPoint(x, y);
  }
  // @ts-ignore for firefox
  if (document.caretPositionFromPoint) {
    // @ts-ignore
    const position = document.caretPositionFromPoint(x, y);
    const range = document.createRange();
    range.setStart(position.offsetNode, position.offset);
    range.setEnd(position.offsetNode, position.offset);
    return range;
  }
  return null;
}
