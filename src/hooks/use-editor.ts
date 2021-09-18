import * as React from 'react';
import { Subscription } from 'rxjs';
import { EventEmitter } from '../utils/event-emitter';
import { getBlockId, getBlockElementById } from '../utils/block';
import { CaretPosition, Caret } from '../types/caret';
import { Block } from '../types/block';
import { EditorEvents } from '../constants';

interface Props {
  eventEmitter: EventEmitter;
}

export interface EditorController {
  focus: () => void;
  blur: () => void;
  getBlocks: () => Block[];
  setCaretPosition: (start: Caret, end?: Caret) => void;
  getCaretPosition: () => CaretPosition | null;
  getNativeRange: () => Range | null;
  updateCaretPosition: () => CaretPosition | null;
  getAffectedBlocks: () => Block[];
}

export function useEditor({
  eventEmitter,
}: Props): [Block[], React.MutableRefObject<HTMLDivElement | null>, EditorController] {
  const editorRef = React.useRef<HTMLDivElement>(null);
  const lastCaretPositionRef = React.useRef<CaretPosition | null>();
  const blocksRef = React.useRef<Block[]>([]);
  const [blocks, setBlocks] = React.useState<Block[]>([]);

  const focus = React.useCallback(() => {
    console.log('focus');
    editorRef.current?.focus();
  }, []);

  const blur = React.useCallback(() => {
    console.log('blur');
    editorRef.current?.blur();
  }, []);

  const getBlocks = React.useCallback((): Block[] => {
    return blocksRef.current;
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

  const setCaretPosition = React.useCallback((start: Caret, end?: Caret) => {
    const nativeRange = getNativeRange();
    const startElement = getBlockElementById(start.blockId);
    if (!nativeRange || !startElement) return null;
    console.log(startElement, start.offset);
    try {
      nativeRange.setStart(startElement, start.offset);
      if (end) {
        const endElement = getBlockElementById(end.blockId);
        if (endElement) {
          nativeRange.setEnd(endElement, end.offset);
        }
      } else {
        nativeRange.setEnd(startElement, start.offset);
      }
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getAffectedBlocks = React.useCallback((caretPosition?: CaretPosition): Block[] => {
    const postion = caretPosition ?? getCaretPosition();
    if (!postion) return [];
    const startIndex = blocksRef.current.findIndex((v) => v.id === postion.start.blockId);
    const endIndex = blocksRef.current.findIndex((v) => v.id === postion.end.blockId);
    if (startIndex === -1) return [];
    if (startIndex === endIndex) {
      return [blocksRef.current[startIndex]];
    } else {
      return [...blocksRef.current.slice(startIndex, endIndex)];
    }
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
      collapsed: nativeRange.collapsed,
    };
    return range;
  }, []);

  React.useEffect(() => {
    const subs = new Subscription();
    const sub = eventEmitter.on<Block[]>(EditorEvents.EVENT_EDITOR_UPDATE).subscribe((blocks) => {
      setBlocks(blocks);
    });
    subs.add(sub);
    return () => {
      subs.unsubscribe();
    };
  }, []);

  React.useEffect(() => {
    blocksRef.current = blocks;
  }, [blocks]);

  return [
    blocks,
    editorRef,
    {
      focus,
      blur,
      getBlocks,
      getCaretPosition,
      updateCaretPosition,
      getNativeRange,
      setCaretPosition,
      getAffectedBlocks,
    },
  ];
}
