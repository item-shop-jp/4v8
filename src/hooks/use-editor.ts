import * as React from 'react';
import { EventEmitter } from '../utils/event-emitter';
import { getBlockId } from '../utils/block';
import { CaretRange, CaretPosition } from '../types/caret';

interface Props {
  eventEmitter: EventEmitter;
}

export interface EditorController {
  focus: () => void;
  blur: () => void;
  getCaretPosition: () => CaretPosition | null;
  updateCaretPosition: () => CaretPosition | null;
}

export function useEditor({ eventEmitter }: Props): [React.MutableRefObject<HTMLDivElement | null>, EditorController] {
  const editorRef = React.useRef(null);
  const lastCaretPositionRef = React.useRef<CaretPosition | null>();

  const focus = React.useCallback(() => {
    console.log('focus');
  }, []);

  const blur = React.useCallback(() => {
    console.log('blur');
  }, []);

  const getCaretPosition = React.useCallback(() => {
    const nativeRange = getNativeRange();
    if (!nativeRange) return null;
    return normalizeRange(nativeRange);
  }, []);

  const updateCaretPosition = React.useCallback(() => {
    const postion = getCaretPosition();
    lastCaretPositionRef.current = postion;
    return postion;
  }, [editorRef.current]);

  const getNativeRange = React.useCallback(() => {
    const selection = document.getSelection();
    if (!selection || selection.rangeCount < 1) return null;
    const range = selection.getRangeAt(0);
    if (!range) return null;
    return range;
  }, []);

  const normalizeRange = React.useCallback((nativeRange: Range) => {
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
  }, []);

  return [editorRef, { focus, blur, getCaretPosition, updateCaretPosition }];
}
