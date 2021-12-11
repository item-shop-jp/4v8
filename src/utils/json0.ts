import stringLength from 'string-length';
import { JSON0 } from '../types/history';
import { Inline } from '../types/inline';

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

export function getStartIndex(contents: Inline[], ops: JSON0[] = []): number {
  let textIndex = 0;
  let arrayIndex = 0;
  ops.forEach((op) => {
    if (!op.p || op.p[0] !== 'contents') return;
    if (arrayIndex === 0 || arrayIndex >= op.p[1]) {
      arrayIndex = op.p[1];
      if (
        arrayIndex === 0 ||
        arrayIndex !== op.p[1] ||
        (arrayIndex === op.p[1] && textIndex > op.p[3])
      ) {
        textIndex = op.p[3];
      }
    }
  });

  let index = 0;
  for (let i = 0; i < contents.length; i++) {
    if (arrayIndex === i) {
      index += textIndex;
      break;
    }
    index += stringLength(contents[i].text);
  }

  return index;
}
