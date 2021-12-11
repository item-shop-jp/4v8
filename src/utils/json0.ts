import stringLength from 'string-length';
import { JSON0 } from '../types/history';

export function getTextLength(ops: JSON0[] = []): number {
  let length = 0;
  ops.forEach((op) => {
    if (op.li) {
      length += stringLength(op.li.text);
    }
    if (op.ld) {
      length -= stringLength(op.ld.text);
    }
    if (op.si) {
      length += stringLength(op.si);
    }
    if (op.sd) {
      length -= stringLength(op.sd);
    }
  });
  return length;
}
