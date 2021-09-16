import * as React from 'react';
import { EventEmitter } from '../utils/event-emitter';
import { getBlockId } from '../utils/block';
import { CaretRange, CaretPosition } from '../types/caret';

interface Props {
  eventEmitter: EventEmitter;
}

export function useEditor({
  eventEmitter,
}: Props): [React.MutableRefObject<HTMLDivElement | null>, { focus: () => void }] {
  const editorRef = React.useRef(null);
  const lastRangeRef = React.useRef<CaretRange>({ index: 0, length: 0 });
  console.log(eventEmitter);

  const focus = React.useCallback(() => {
    updateCaret(lastRangeRef.current);
  }, []);

  const updateCaret = React.useCallback(
    (range: CaretRange) => {
      console.log(getNativeRange(), range);
    },
    [editorRef.current],
  );

  const getNativeRange = () => {
    const selection = document.getSelection();
    if (!selection || selection.rangeCount < 1) return null;
    const range = selection.getRangeAt(0);
    if (!range) return null;
    return normalizeRange(range);
  };

  const normalizeRange = (nativeRange: Range) => {
    const startBlockId = getBlockId(nativeRange.startContainer as HTMLElement);
    const endBlockId = getBlockId(nativeRange.endContainer as HTMLElement);

    if (!editorRef.current || !startBlockId || !endBlockId) {
      return null;
    }

    const range: CaretPosition = {
      start: {
        blockId: startBlockId,
        offset: nativeRange.startOffset,
      },
      end: { blockId: endBlockId, offset: nativeRange.endOffset },
    };
    return range;
  };

  return [editorRef, { focus }];
}
