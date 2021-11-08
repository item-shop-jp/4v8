import * as React from 'react';
import { Subscription } from 'rxjs';
import * as json0diff from 'json0-ot-diff';
import DiffMatchPatch from 'diff-match-patch';
import { EventEmitter } from '../utils/event-emitter';
import * as blockUtils from '../utils/block';
import { getInlineId } from '../utils/inline';
import { caretRangeFromPoint } from '../utils/range';
import { copyObject } from '../utils/object';
import { CaretPosition } from '../types/caret';
import { ModuleOptions } from '../types/module';
import { Block } from '../types/block';
import { InlineAttributes } from '../types/inline';
import { Shadow } from '../types/shadow';
import { EditorEvents } from '../constants';
import { KeyBoardModule } from '../modules';

interface Props {
  eventEmitter: EventEmitter;
}

interface PositionParams {
  caretPosition?: CaretPosition;
  index?: number;
  length?: number;
}

export interface EditorController {
  focus: () => void;
  blur: () => void;
  getFormats: (blockId: string, index: number, length?: number) => void;
  formatText: (blockId: string, index: number, length: number, attributes: InlineAttributes) => void;
  getBlocks: () => Block[];
  updateBlocks: (blocks: Block[]) => void;
  getBlock: (blockId: string) => Block | null;
  getBlockLength: (blockId: string) => number | null;
  createBlock: (appendBlock: Block, prevBlockId?: string) => void;
  updateBlock: (block: Block) => void;
  deleteBlock: (blockId: string) => void;
  sync: () => void;
  setCaretPosition: (caretPosition: Partial<CaretPosition>) => void;
  getCaretPosition: () => CaretPosition | null;
  getNativeRange: () => Range | null;
  updateCaretPosition: (caretPosition?: CaretPosition) => CaretPosition | null;
  updateCaretRect: (rect?: DOMRect) => DOMRect | null;
  prev: (params?: PositionParams) => boolean;
  next: (params?: PositionParams) => boolean;
  render: (affectedIds?: string[]) => void;
  addModule: (
    name: string,
    module: {
      new (params: { eventEmitter: EventEmitter; options: any }): any;
    },
    options?: any,
  ) => void;
  addModules: (
    modules: {
      name: string;
      module: {
        new (params: { eventEmitter: EventEmitter; editor: EditorController; options: any }): any;
      };
    }[],
    options?: ModuleOptions,
  ) => void;
  getModule: <T = any>(name: string) => T | null;
  removeAllModules: () => void;
  getEventEmitter: () => EventEmitter;
}

export function useEditor({ eventEmitter }: Props): [React.MutableRefObject<HTMLDivElement | null>, EditorController] {
  const editorRef = React.useRef<HTMLDivElement>(null);
  const lastCaretPositionRef = React.useRef<CaretPosition | null>();
  const lastCaretRectRef = React.useRef<DOMRect | null>();
  const blocksRef = React.useRef<Block[]>([]);
  const shadowBlocksRef = React.useRef<Shadow[]>([]);
  const modulesRef = React.useRef<any>({});
  const [modules, setModules] = React.useState<any>({});

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
      const element = blockUtils.getBlockElementById(lastBlock.id);
      if (!element) return;
      setCaretPosition({
        blockId: lastBlock.id,
        index: element.innerText.length,
      });
    }

    updateCaretPosition();
  }, []);

  const blur = React.useCallback(() => {
    const selection = document.getSelection();
    if (!selection) return null;
    selection.removeAllRanges();
  }, []);

  const prev = React.useCallback(({ caretPosition, index = 0 }: PositionParams = {}): boolean => {
    const position = caretPosition ?? lastCaretPositionRef.current;
    const currentIndex = blocksRef.current.findIndex((v) => v.id === position?.blockId);
    if (currentIndex < 1 || !blocksRef.current[currentIndex - 1]) return false;
    if (!lastCaretRectRef.current) {
      setCaretPosition({
        blockId: blocksRef.current[currentIndex - 1].id,
        index,
      });
      return false;
    }
    const nextBlock = blockUtils.getBlockElementById(blocksRef.current[currentIndex - 1].id);
    if (!nextBlock) return false;
    const nextRect = nextBlock.getBoundingClientRect();
    const range = caretRangeFromPoint(lastCaretRectRef.current.x, nextRect.y);
    const selection = document.getSelection();
    if (!selection || !range) return false;
    selection.setBaseAndExtent(range.startContainer, range.startOffset, range.startContainer, range.startOffset);
    const nativeRange = getNativeRange();
    if (!nativeRange) return false;
    const newCaretPosition = normalizeRange(nativeRange);
    if (!newCaretPosition) return false;

    updateCaretPosition();
    return true;
  }, []);

  const next = React.useCallback(({ caretPosition, index = 0 }: PositionParams = {}): boolean => {
    const position = caretPosition ?? lastCaretPositionRef.current;
    const currentIndex = blocksRef.current.findIndex((v) => v.id === position?.blockId);
    if (currentIndex === -1 || !blocksRef.current[currentIndex + 1]) return false;
    if (!lastCaretRectRef.current) {
      setCaretPosition({
        blockId: blocksRef.current[currentIndex + 1].id,
        index,
      });
      return false;
    }
    const nextBlock = blockUtils.getBlockElementById(blocksRef.current[currentIndex + 1].id);
    if (!nextBlock) return false;
    const nextRect = nextBlock.getBoundingClientRect();
    const range = caretRangeFromPoint(lastCaretRectRef.current.x, nextRect.y);
    const selection = document.getSelection();
    if (!selection || !range) return false;
    selection.setBaseAndExtent(range.startContainer, range.startOffset, range.startContainer, range.startOffset);
    const nativeRange = getNativeRange();
    if (!nativeRange) return false;
    const newCaretPosition = normalizeRange(nativeRange);
    if (!newCaretPosition) return false;

    updateCaretPosition();
    return true;
  }, []);

  const getFormats = React.useCallback((blockId: string, index: number, length: number = 0) => {
    const block = blocksRef.current.find((v) => v.id === blockId);
    if (!block) return null;
    return blockUtils.getFormats(block.contents, index, length);
  }, []);

  const formatText = React.useCallback(
    (blockId: string, index: number, length: number, attributes: InlineAttributes = {}) => {
      const block = blocksRef.current.find((v) => v.id === blockId);
      if (!block) return null;
      const contents = blockUtils.setAttributesForInlineContents(block.contents, attributes, index, length);
      updateBlock({ ...block, contents });
      render([block.id]);
    },
    [],
  );

  const getBlocks = React.useCallback((): Block[] => {
    return blocksRef.current;
  }, []);

  const updateBlocks = React.useCallback((blocks: Block[]) => {
    blocksRef.current = blocks;
  }, []);

  const getBlock = React.useCallback((blockId: string): Block | null => {
    return blocksRef.current.find((v) => v.id === blockId) ?? null;
  }, []);

  const getBlockLength = React.useCallback((blockId: string): number | null => {
    const element = blockUtils.getBlockElementById(blockId);
    if (!element) return null;
    return blockUtils.getBlockLength(element);
  }, []);

  const getCaretPosition = React.useCallback(() => {
    const nativeRange = getNativeRange();
    if (!nativeRange) return null;
    return normalizeRange(nativeRange);
  }, []);

  const updateCaretPosition = React.useCallback((caretPosition?: CaretPosition) => {
    if (caretPosition) {
      lastCaretPositionRef.current = caretPosition;
    } else {
      const nativeRange = getNativeRange();
      if (!nativeRange) return null;
      const range = normalizeRange(nativeRange);
      lastCaretPositionRef.current = range;
    }
    return lastCaretPositionRef.current;
  }, []);

  const updateCaretRect = React.useCallback((rect?: DOMRect) => {
    if (rect) {
      lastCaretRectRef.current = rect;
    } else {
      const nativeRange = getNativeRange();
      if (!nativeRange) return null;
      lastCaretRectRef.current = nativeRange.getBoundingClientRect();
    }
    return lastCaretRectRef.current;
  }, []);

  const getNativeRange = React.useCallback(() => {
    const selection = document.getSelection();
    if (!selection || selection.rangeCount < 1) return null;
    const range = selection.getRangeAt(0);
    if (!range) return null;
    return range;
  }, []);

  const setCaretPosition = React.useCallback(({ blockId = '', index = 0, length = 0 }: Partial<CaretPosition>) => {
    const element = blockUtils.getBlockElementById(blockId);
    if (!element) return;
    const selection = document.getSelection();
    if (!selection) return;
    try {
      const range = document.createRange();
      const start = blockUtils.getNativeIndexFromBlockIndex(element, index);
      const end = blockUtils.getNativeIndexFromBlockIndex(element, index + length);
      if (!start || !end) return;
      range.setStart(start.node, start.index);
      range.setEnd(end.node, end.index);
      selection.removeAllRanges();
      selection.addRange(range);
      updateCaretPosition();
    } catch (e) {
      eventEmitter.warning('Invalid Range', e);
    }
  }, []);

  const normalizeRange = React.useCallback((nativeRange: Range) => {
    const [startInlineId, startInlineElement] = getInlineId(nativeRange.startContainer as HTMLElement);
    const [endInlineId, endInlineElement] = getInlineId(nativeRange.endContainer as HTMLElement);
    const [blockId, blockElement] = blockUtils.getBlockId(nativeRange.startContainer as HTMLElement);

    if (!editorRef.current || !startInlineId || !endInlineId || !blockId) {
      return null;
    }

    const start = blockUtils.getBlockIndexFromNativeIndex(
      nativeRange.startContainer as HTMLElement,
      nativeRange.startOffset,
    );
    const end = blockUtils.getBlockIndexFromNativeIndex(nativeRange.endContainer as HTMLElement, nativeRange.endOffset);

    if (!start || !end) return null;

    const range: CaretPosition = {
      blockId,
      blockFormat: blockElement?.dataset.format ?? '',
      index: start.index,
      length: end.index - start.index,
      collapsed: nativeRange.collapsed,
    };
    return range;
  }, []);

  const addModule = React.useCallback(
    (
      name: string,
      module: {
        new (params: { eventEmitter: EventEmitter; editor: EditorController; options: any }): any;
      },
      options: any = {},
    ) => {
      const moduleInstance = new module({ eventEmitter, editor: editorController, options });
      setModules((prevModules: any) => {
        return { ...prevModules, [name]: moduleInstance };
      });
      moduleInstance.onInit();
    },
    [],
  );

  const addModules = React.useCallback(
    (
      modules: {
        name: string;
        module: {
          new (params: { eventEmitter: EventEmitter; editor: EditorController; options: any }): any;
        };
      }[],
      options: ModuleOptions = {},
    ) => {
      modules.forEach(({ name, module }) => {
        const moduleInstance = new module({
          eventEmitter,
          editor: editorController,
          options: options[name] ?? {},
        });
        setModules((prevModules: any) => {
          return { ...prevModules, [name]: moduleInstance };
        });
        moduleInstance.onInit();
      });
    },
    [],
  );

  const getEventEmitter = React.useCallback(() => {
    return eventEmitter;
  }, []);

  const getModule = React.useCallback(<T = any>(name: string): T | null => {
    if (!modulesRef.current[name]) return null;
    return modulesRef.current[name];
  }, []);

  const removeAllModules = React.useCallback(() => {
    Object.keys(modulesRef.current).forEach((key) => {
      modulesRef.current[key].onDestroy();
    });
    setModules({});
  }, []);

  const sync = React.useCallback(() => {
    const nativeRange = getNativeRange();
    if (!nativeRange) return;
    const [blockId, blockElement] = blockUtils.getBlockId(nativeRange.startContainer as HTMLElement);
    const block = blocksRef.current.find((v) => v.id === blockId);
    const composing = getModule<KeyBoardModule>('keyboard')?.composing;
    if (!blockId || !block || !blockElement || composing) return;
    setTimeout(() => {
      const { contents, affected, affectedLength } = blockUtils.getInlineContents(blockElement);
      updateCaretPosition();
      eventEmitter.emit(EditorEvents.EVENT_BLOCK_UPDATE, { ...block, contents });
      if (affected) {
        render([blockId]);
        let caretIndex = lastCaretPositionRef.current?.index ?? 0;
        caretIndex += affectedLength;
        setCaretPosition({ ...lastCaretPositionRef.current, index: caretIndex >= 0 ? caretIndex : 0 });
      }
      setTimeout(() => updateCaretRect(), 10);
    }, 10);
  }, []);

  const createBlock = React.useCallback((appendBlock: Block, prevBlockId?: string) => {
    const currentIndex = blocksRef.current.findIndex((v) => v.id === prevBlockId);
    updateBlocks(
      currentIndex !== -1
        ? [...blocksRef.current.slice(0, currentIndex + 1), appendBlock, ...blocksRef.current.slice(currentIndex + 1)]
        : [...blocksRef.current, appendBlock],
    );
  }, []);

  const updateBlock = React.useCallback((block: Block) => {
    eventEmitter.emit(EditorEvents.EVENT_BLOCK_UPDATE, {
      ...block,
      contents: blockUtils.optimizeInlineContents(block.contents),
    });
  }, []);

  const deleteBlock = React.useCallback((blockId: string) => {
    updateBlocks(blocksRef.current.filter((v) => v.id !== blockId));
  }, []);

  const render = React.useCallback((affectedIds: string[] = []) => {
    eventEmitter.emit(EditorEvents.EVENT_BLOCK_RERENDER, affectedIds);
  }, []);

  const updateShadow = React.useCallback(() => {
    const blocks = copyObject(blocksRef.current);
    const updatedShadow = blocks.map((block) => {
      return {
        ...block,
        contents: block.contents.map((content) => {
          return {
            attributes: content.attributes,
            text: content.text,
            type: content.type,
            isEmbed: content.isEmbed,
            data: content.data,
          };
        }),
      };
    });
    const diff = json0diff(shadowBlocksRef.current, updatedShadow, DiffMatchPatch);
    console.log(JSON.stringify(diff));
    shadowBlocksRef.current = updatedShadow;
  }, []);

  const editorController = React.useMemo(() => {
    return {
      focus,
      blur,
      getFormats,
      formatText,
      getBlocks,
      updateBlocks,
      getBlock,
      getBlockLength,
      createBlock,
      updateBlock,
      deleteBlock,
      sync,
      getCaretPosition,
      setCaretPosition,
      updateCaretPosition,
      updateCaretRect,
      getNativeRange,
      prev,
      next,
      render,
      addModule,
      addModules,
      getModule,
      removeAllModules,
      getEventEmitter,
    };
  }, []);

  React.useEffect(() => {
    const subs = new Subscription();
    subs.add(
      eventEmitter.on<Block>(EditorEvents.EVENT_BLOCK_UPDATE).subscribe((block) => {
        const currentIndex = blocksRef.current.findIndex((v) => v.id === block.id);
        if (currentIndex === -1) return;
        blocksRef.current = [
          ...blocksRef.current.slice(0, currentIndex),
          {
            ...blocksRef.current[currentIndex],
            ...block,
          },
          ...blocksRef.current.slice(currentIndex + 1),
        ];
        updateShadow();
      }),
    );
    return () => {
      subs.unsubscribe();
    };
  }, []);

  // real-time collaborative test
  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     blocksRef.current = [...blocksRef.current, createBlock('TEXT')];
  //     render();
  //   }, 2000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  React.useEffect(() => {
    modulesRef.current = modules;
  }, [modules]);

  React.useEffect(() => {
    const handleSelectionChange = (e: Event) => {
      if (!editorRef.current) return;
      updateCaretPosition();
    };
    document.addEventListener('selectionchange', handleSelectionChange);
    return () => {
      document.removeEventListener('selectionchange', handleSelectionChange);
    };
  }, []);

  return [editorRef, editorController];
}
