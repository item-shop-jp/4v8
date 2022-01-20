import * as React from 'react';
import { Subscription } from 'rxjs';
import isEqual from 'lodash.isequal';
import { debounce } from 'throttle-debounce';
import * as json0 from 'ot-json0';
import DiffMatchPatch from 'diff-match-patch';
import { EventEmitter } from '../utils/event-emitter';
import * as blockUtils from '../utils/block';
import { getInlineId } from '../utils/inline';
import { caretRangeFromPoint, getRectByRange } from '../utils/range';
import { getScrollContainer } from '../utils/dom';
import { CaretPosition } from '../types/caret';
import { ModuleOptions } from '../types/module';
import { Block } from '../types/block';
import { InlineAttributes } from '../types/inline';
import { Settings, PositionParams, EditorController, Source } from '../types/editor';
import { EditorEvents, HistoryType, EventSources } from '../constants';
import {
  EditorModule,
  KeyBoardModule,
  ToolbarModule,
  SelectorModule,
  HistoryModule,
} from '../modules';
import { copyObject } from '../utils/object';

const json0diff = require('json0-ot-diff');

interface Props {
  settings: Settings;
  eventEmitter: EventEmitter;
  scrollContainer?: HTMLElement | string;
}

export function useEditor({
  settings: { scrollMarginTop = 100, scrollMarginBottom = 250, collaborationLevel = 'inline' },
  eventEmitter,
  scrollContainer,
}: Props): [React.MutableRefObject<HTMLDivElement | null>, EditorController] {
  const editorRef = React.useRef<HTMLDivElement>(null);
  const lastCaretPositionRef = React.useRef<CaretPosition | null>();
  const lastCaretRectRef = React.useRef<DOMRect | null>();
  const blocksRef = React.useRef<Block[]>([]);
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

    updateCaretPositionRef();
  }, []);

  const blur = React.useCallback(() => {
    const selection = document.getSelection();
    if (!selection) return null;
    selection.removeAllRanges();
  }, []);

  const prev = React.useCallback(({ index, margin = 10 }: PositionParams = {}): boolean => {
    const position = lastCaretPositionRef.current;
    const currentIndex = blocksRef.current.findIndex((v) => v.id === position?.blockId);
    if (currentIndex < 1 || !blocksRef.current[currentIndex - 1]) return false;
    if (!lastCaretRectRef.current) {
      setCaretPosition({
        blockId: blocksRef.current[currentIndex - 1].id,
        index: 0,
      });
      return false;
    }
    const prevBlock = blockUtils.getBlockElementById(blocksRef.current[currentIndex - 1].id);
    if (!prevBlock) return false;
    let prevRect = prevBlock.getBoundingClientRect();
    const container = getScrollContainer(scrollContainer);
    const containerOffsetTop = container ? container.getBoundingClientRect().top : 0;

    if (prevRect.top <= (container ? containerOffsetTop : containerOffsetTop + scrollMarginTop)) {
      if (container) {
        container.scrollTop = currentIndex - 1 < 1 ? 0 : prevBlock.offsetTop;
      } else {
        if (document.scrollingElement) {
          let editorScrollTop =
            document.scrollingElement.scrollTop + prevRect.top - scrollMarginTop;
          if (currentIndex - 1 < 1) {
            editorScrollTop -= 30;
          }
          document.scrollingElement.scrollTop = editorScrollTop;
        }
      }
      prevRect = prevBlock.getBoundingClientRect();
    }

    if (typeof index === 'number' && index >= 0) {
      setCaretPosition({
        blockId: blocksRef.current[currentIndex - 1].id,
        index,
      });
      return true;
    }

    const range = caretRangeFromPoint(
      lastCaretRectRef.current.x,
      prevRect.y + prevRect.height - margin,
    );
    const selection = document.getSelection();
    if (!selection || !range) return false;
    selection.setBaseAndExtent(
      range.startContainer,
      range.startOffset,
      range.startContainer,
      range.startOffset,
    );
    const nativeRange = getNativeRange();
    if (!nativeRange) return false;
    const newCaretPosition = normalizeRange(nativeRange);
    if (!newCaretPosition) return false;

    updateCaretPositionRef();
    return true;
  }, []);

  const next = React.useCallback(({ index = 0, margin = 10 }: PositionParams = {}): boolean => {
    const position = lastCaretPositionRef.current;
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
    let nextRect = nextBlock.getBoundingClientRect();
    const container = getScrollContainer(scrollContainer);
    const scrollHeight = container?.clientHeight ?? window.innerHeight;
    if (
      nextRect.top + nextRect.height >=
      (container ? scrollHeight : scrollHeight - scrollMarginBottom)
    ) {
      if (container) {
        container.scrollTop = nextBlock.offsetTop - container.clientHeight + scrollMarginBottom;
      } else {
        if (document.scrollingElement) {
          const nextTop = document.scrollingElement.scrollTop + nextRect.top;
          const p = nextTop - window.innerHeight + scrollMarginBottom;
          document.scrollingElement.scrollTop = p;
        }
      }
      nextRect = nextBlock.getBoundingClientRect();
    }
    const range = caretRangeFromPoint(lastCaretRectRef.current.x, nextRect.y + margin);
    const selection = document.getSelection();
    if (!selection || !range) return false;
    selection.setBaseAndExtent(
      range.startContainer,
      range.startOffset,
      range.startContainer,
      range.startOffset,
    );
    const nativeRange = getNativeRange();
    if (!nativeRange) return false;
    const newCaretPosition = normalizeRange(nativeRange);
    if (!newCaretPosition) return false;

    updateCaretPositionRef();
    return true;
  }, []);

  const getFormats = React.useCallback((blockId: string, index: number, length: number = 0) => {
    const block = blocksRef.current.find((v) => v.id === blockId);
    if (!block) return {};
    if (length === 0) {
      index = index === 0 ? index : index - 1;
      length = 1;
    }
    return blockUtils.getDuplicateAttributes(block.contents, index, length);
  }, []);

  const formatText = React.useCallback(
    (blockId: string, index: number, length: number, attributes: InlineAttributes = {}) => {
      const block = blocksRef.current.find((v) => v.id === blockId);
      if (!block) return null;
      const contents = blockUtils.setAttributesForInlineContents(
        copyObject(block.contents),
        attributes,
        index,
        length,
      );
      updateBlock({ ...block, contents });
      render([block.id]);
    },
    [],
  );

  const setBlocks = React.useCallback((blocks: Block[]) => {
    blocksRef.current = blocks;
    render();
  }, []);

  const getBlocks = React.useCallback((): Block[] => {
    return blocksRef.current;
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

  const updateCaretPositionRef = React.useCallback((caretPosition?: CaretPosition) => {
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
      const clientRect = getRectByRange(nativeRange);
      if (!clientRect) return null;
      lastCaretRectRef.current = clientRect;
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

  const setCaretPosition = React.useCallback(
    ({ blockId = '', index = 0, length = 0 }: Partial<CaretPosition>) => {
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
        updateCaretPositionRef();
      } catch (e) {
        eventEmitter.warning('Invalid Range', e);
      }
    },
    [],
  );

  const normalizeRange = React.useCallback((nativeRange: Range) => {
    const [startInlineId, startInlineElement] = getInlineId(
      nativeRange.startContainer as HTMLElement,
    );
    const [endInlineId, endInlineElement] = getInlineId(nativeRange.endContainer as HTMLElement);
    const [blockId, blockElement] = blockUtils.getBlockId(
      nativeRange.startContainer as HTMLElement,
    );

    if (!editorRef.current || !startInlineId || !endInlineId || !blockId || !blockElement) {
      return null;
    }

    const start = blockUtils.getBlockIndexFromNativeIndex(
      nativeRange.startContainer as HTMLElement,
      nativeRange.startOffset,
    );
    const end = blockUtils.getBlockIndexFromNativeIndex(
      nativeRange.endContainer as HTMLElement,
      nativeRange.endOffset,
    );

    const caretRect = getRectByRange(nativeRange);
    if (!caretRect) return null;
    const blockRect = blockElement.getBoundingClientRect();

    if (!start || !end) return null;

    const range: CaretPosition = {
      blockId,
      blockFormat: blockElement?.dataset.format ?? '',
      index: start.index,
      length: end.index - start.index,
      collapsed: nativeRange.collapsed,
      isTop: caretRect.y - blockRect.y < 10,
      isBottom: blockRect.y + blockRect.height - (caretRect.y + caretRect.height) < 10,
      rect: caretRect,
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
      const moduleInstance = new module({
        eventEmitter,
        editor: editorController,
        options,
      });
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

  const getModule = React.useCallback(
    <T = any>(
      name: string,
    ):
      | T
      | EditorModule
      | KeyBoardModule
      | ToolbarModule
      | SelectorModule
      | HistoryModule
      | null => {
      if (!modulesRef.current[name]) return null;
      return modulesRef.current[name];
    },
    [],
  );

  const removeAllModules = React.useCallback(() => {
    Object.keys(modulesRef.current).forEach((key) => {
      modulesRef.current[key].onDestroy();
    });
    setModules({});
  }, []);

  const sync = React.useCallback(
    (blockId?: string, blockElement?: HTMLElement, forceUpdate = false) => {
      if (!blockId) {
        const nativeRange = getNativeRange();
        if (!nativeRange) return;
        [blockId, blockElement] = blockUtils.getBlockId(nativeRange.startContainer as HTMLElement);
      }
      if (!blockElement && blockId) {
        const el = blockUtils.getBlockElementById(blockId);
        if (el) {
          blockElement = el;
        }
      }

      const block = blocksRef.current.find((v) => v.id === blockId);
      const composing = getModule('keyboard').composing;

      setTimeout(() => {
        if (!blockId || !block || !blockElement || composing) return;
        const { contents, affected, affectedLength } = blockUtils.getInlineContents(blockElement);
        updateCaretPositionRef();
        if (isEqual(block.contents, contents)) return;
        updateBlock({ ...block, contents });
        if (affected || forceUpdate) {
          render([blockId]);
          let newCaretPosition = lastCaretPositionRef.current;
          if (!newCaretPosition) {
            if (!lastCaretRectRef.current) return;
            const range = caretRangeFromPoint(
              lastCaretRectRef.current.x,
              lastCaretRectRef.current.y,
            );
            const selection = document.getSelection();
            if (!selection || !range) return;
            selection.setBaseAndExtent(
              range.startContainer,
              range.startOffset,
              range.startContainer,
              range.startOffset,
            );
            const nativeRange = getNativeRange();
            if (!nativeRange) return;
            newCaretPosition = normalizeRange(nativeRange);
          }
          const blockLength = blockUtils.getBlockLength(blockElement) ?? 0;
          let caretIndex = newCaretPosition?.index ?? 0;
          caretIndex += affectedLength;
          if (blockLength < caretIndex) {
            caretIndex = blockLength;
          }
          blur();

          setTimeout(() => {
            setCaretPosition({
              ...newCaretPosition,
              index: caretIndex >= 0 ? caretIndex : 0,
            });
            updateCaretRect();
          }, 10);
        }
      }, 10);
    },
    [],
  );

  const createBlock = React.useCallback(
    (appendBlock: Block, prevBlockId?: string, source: Source = EventSources.USER) => {
      const currentIndex = blocksRef.current.findIndex((v) => v.id === prevBlockId);

      eventEmitter.emit(EditorEvents.EVENT_EDITOR_CHANGE, {
        payload: {
          type: HistoryType.ADD_BLOCK,
          blockId: appendBlock.id,
          block: appendBlock,
          prevBlockId,
        },
        source,
      });

      updateBlocks(
        currentIndex !== -1
          ? [
              ...blocksRef.current.slice(0, currentIndex + 1),
              appendBlock,
              ...blocksRef.current.slice(currentIndex + 1),
            ]
          : [...blocksRef.current, appendBlock],
      );
    },
    [],
  );

  const updateBlocks = React.useCallback((blocks: Block[]) => {
    blocksRef.current = blocks;
  }, []);

  const updateBlock = React.useCallback((block: Block, source: Source = EventSources.USER) => {
    const currentIndex = blocksRef.current.findIndex((v) => v.id === block.id);
    if (currentIndex === -1) return;
    const contents = blockUtils.optimizeInlineContents(block.contents);
    const prevBlock = {
      ...blocksRef.current[currentIndex],
      contents: blocksRef.current[currentIndex].contents.map((content) => {
        return {
          attributes: content.attributes,
          text: content.text,
          type: content.type,
          isEmbed: content.isEmbed,
          data: content.data,
        };
      }),
    };
    const currentBlock = {
      ...block,
      contents: contents.map((content) => {
        return {
          attributes: content.attributes,
          text: content.text,
          type: content.type,
          isEmbed: content.isEmbed,
          data: content.data,
        };
      }),
    };
    const redo = json0diff(prevBlock, currentBlock, DiffMatchPatch);
    const undo = json0diff(currentBlock, prevBlock, DiffMatchPatch);

    if (redo && undo) {
      eventEmitter.emit(EditorEvents.EVENT_EDITOR_CHANGE, {
        payload: {
          type: HistoryType.UPDATE_CONTENTS,
          blockId: block.id,
          undo,
          redo,
        },
        source,
      });
    }

    blocksRef.current = [
      ...blocksRef.current.slice(0, currentIndex),
      {
        ...blocksRef.current[currentIndex],
        ...block,
        contents,
      },
      ...blocksRef.current.slice(currentIndex + 1),
    ];
  }, []);

  const deleteBlock = React.useCallback((blockId: string) => {
    updateBlocks(blocksRef.current.filter((v) => v.id !== blockId));
  }, []);

  const render = React.useCallback((affectedIds: string[] = []) => {
    eventEmitter.emit(EditorEvents.EVENT_BLOCK_RERENDER, affectedIds);
  }, []);

  const editorController = React.useMemo(() => {
    return {
      focus,
      blur,
      getFormats,
      formatText,
      setBlocks,
      getBlocks,
      getBlock,
      getBlockLength,
      createBlock,
      updateBlock,
      deleteBlock,
      sync,
      getCaretPosition,
      setCaretPosition,
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

  // real-time collaborative test
  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     const block = getBlock(blocksRef.current[0].id);
  //     if (!block) return;
  //     const contents = [
  //       ...block.contents.slice(0, block.contents.length - 1),
  //       {
  //         ...block.contents[block.contents.length - 1],
  //         text: 'あ' + block.contents[block.contents.length - 1].text,
  //       },
  //     ];
  //     console.log(JSON.stringify(contents));
  //     updateBlock({ ...block, contents }, EventSources.COLLABORATOR);
  //     render([block.id]);
  //   }, 4000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  React.useEffect(() => {
    modulesRef.current = modules;
  }, [modules]);

  React.useEffect(() => {
    const debouncedSelectionChange = debounce(200, (e: Event) => {
      if (!editorRef.current) return;
      updateCaretPositionRef();
      eventEmitter.emit(EditorEvents.EVENT_SELECTION_CHANGE, e);
    });
    document.addEventListener('selectionchange', debouncedSelectionChange);
    return () => {
      document.removeEventListener('selectionchange', debouncedSelectionChange);
    };
  }, []);

  return [editorRef, editorController];
}