import * as React from 'react';
import { Subscription } from 'rxjs';
import { EventEmitter } from '../utils/event-emitter';
import { getBlockId, getBlockElementById } from '../utils/block';
import { CaretPosition } from '../types/caret';
import { Block } from '../types/block';
import { EditorEvents } from '../constants';

interface Props {
  eventEmitter: EventEmitter;
}

export interface EditorController {
  focus: () => void;
  blur: () => void;
  getBlocks: () => Block[];
  setCaretPosition: (caretPosition: Partial<CaretPosition>) => void;
  getCaretPosition: () => CaretPosition | null;
  getNativeRange: () => Range | null;
  updateCaretPosition: () => CaretPosition | null;
}

export function useEditor({
  eventEmitter,
}: Props): [Block[], React.MutableRefObject<HTMLDivElement | null>, EditorController] {
  const editorRef = React.useRef<HTMLDivElement>(null);
  const lastCaretPositionRef = React.useRef<CaretPosition | null>();
  const blocksRef = React.useRef<Block[]>([]);
  const [blocks, setBlocks] = React.useState<Block[]>([]);

  const focus = React.useCallback(() => {
    if (lastCaretPositionRef.current) {
      setCaretPosition({
        blockId: lastCaretPositionRef.current.blockId,
        index: lastCaretPositionRef.current.index,
        length: lastCaretPositionRef.current.length,
      });
    } else {
      const lastBlock = blocksRef.current[blocksRef.current.length - 1];
      if (!lastBlock) return;
      const element = getBlockElementById(lastBlock.id);
      if (!element) return;
      setCaretPosition({
        blockId: lastBlock.id,
        index: element.innerText.length,
      });
    }

    updateCaretPosition();
  }, []);

  const blur = React.useCallback(() => {
    const nativeRange = getNativeRange();
    if (!nativeRange) return;
    (nativeRange.startContainer as HTMLElement).blur();
  }, []);

  const getBlocks = React.useCallback((): Block[] => {
    return blocksRef.current;
  }, []);

  const getCaretPosition = React.useCallback(() => {
    const nativeRange = getNativeRange();
    if (!nativeRange) return null;
    return normalizeRange(nativeRange);
  }, []);

  const updateCaretPosition = React.useCallback(
    (caretPosition?: CaretPosition) => {
      if (caretPosition) {
        lastCaretPositionRef.current = caretPosition;
      } else {
        const nativeRange = getNativeRange();
        if (!nativeRange) return null;
        lastCaretPositionRef.current = normalizeRange(nativeRange);
      }
      return lastCaretPositionRef.current;
    },
    [editorRef.current],
  );

  const getNativeRange = React.useCallback(() => {
    const selection = document.getSelection();
    if (!selection || selection.rangeCount < 1) return null;
    const range = selection.getRangeAt(0);
    if (!range) return null;
    return range;
  }, []);

  const setCaretPosition = React.useCallback(({ blockId = '', index = 0, length = 0 }: Partial<CaretPosition>) => {
    const element = getBlockElementById(blockId);
    if (!element) return null;
    element.focus();
    const nativeRange = getNativeRange();
    if (!nativeRange) return null;
    console.log('set', blockId, index, length);
    try {
      nativeRange.setStart(nativeRange.startContainer, index);
      nativeRange.setEnd(nativeRange.endContainer, index + length);
      updateCaretPosition();
    } catch (e) {
      eventEmitter.warning('Invalid Range', e);
    }
  }, []);

  // const getAffectedBlocks = React.useCallback((caretPosition?: CaretPosition): Block[] => {
  //   const postion = caretPosition ?? getCaretPosition();
  //   if (!postion) return [];
  //   const startIndex = blocksRef.current.findIndex((v) => v.id === postion.start.blockId);
  //   const endIndex = blocksRef.current.findIndex((v) => v.id === postion.end.blockId);
  //   if (startIndex === -1) return [];
  //   if (startIndex === endIndex) {
  //     return [blocksRef.current[startIndex]];
  //   } else {
  //     return [...blocksRef.current.slice(startIndex, endIndex)];
  //   }
  // }, []);

  const normalizeRange = React.useCallback((nativeRange: Range) => {
    const startBlockId = getBlockId(nativeRange.startContainer as HTMLElement);
    const endBlockId = getBlockId(nativeRange.endContainer as HTMLElement);

    if (!editorRef.current || !startBlockId || !endBlockId || startBlockId !== endBlockId) {
      return null;
    }

    const range: CaretPosition = {
      blockId: startBlockId,
      index: nativeRange.startOffset,
      length: nativeRange.endOffset - nativeRange.startOffset,
      collapsed: nativeRange.collapsed,
      rect: nativeRange.getBoundingClientRect(),
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
      setCaretPosition,
      updateCaretPosition,
      getNativeRange,
    },
  ];
}
