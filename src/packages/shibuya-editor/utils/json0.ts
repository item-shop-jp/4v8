import { uniCount } from 'unicount';
import { JSON0 } from '../types/history';
import { Inline } from '../types/inline';

export function getTextLength(ops: JSON0[] = []): number {
  let length = 0;

  ops.forEach((op) => {
    if (op.li) {
      length += uniCount((op.li.text ?? '').replaceAll(/\uFEFF/gi, ''));
    }
    if (op.ld) {
      length -= uniCount((op.ld.text ?? '').replaceAll(/\uFEFF/gi, ''));
    }
    if (op.si) {
      length += uniCount(op.si.replaceAll(/\uFEFF/gi, ''));
    }
    if (op.sd) {
      length -= uniCount(op.sd.replaceAll(/\uFEFF/gi, ''));
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
      // emoji support
      const currentTextIndex = uniCount(contents[i].text.slice(0, textIndex));
      index += currentTextIndex;
      break;
    }
    index += uniCount(contents[i].text);
  }

  return index;
}
