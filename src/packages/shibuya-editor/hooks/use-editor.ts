import * as React from 'react';
import { Subscription } from 'rxjs';
import isEqual from 'lodash.isequal';
import { debounce } from 'throttle-debounce';
import * as json0 from 'ot-json0';
import DiffMatchPatch from 'diff-match-patch';
import { EventEmitter } from '../utils/event-emitter';
import * as blockUtils from '../utils/block';
import { createInline, getInlineId } from '../utils/inline';
import { caretRangeFromPoint, getRectByRange } from '../utils/range';
import { getHtmlElement } from '../utils/dom';
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
}

export function useEditor({
  settings,
  eventEmitter,
}: Props): [React.MutableRefObject<HTMLDivElement | null>, EditorController] {
  const editorRef = React.useRef<HTMLDivElement>(null);
  const lastCaretPositionRef = React.useRef<CaretPosition | null>();
  const lastCaretRectRef = React.useRef<DOMRect | null>();
  const blocksRef = React.useRef<Block[]>([]);
  const modulesRef = React.useRef<any>({});

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

  const hasFocus = React.useCallback(() => {
    const selection = document.getSelection();
    if (!selection || !editorRef.current) return false;
    return editorRef.current.contains(selection.focusNode);
  }, []);

  const prev = React.useCallback(
    ({ index, margin = 10, blockId }: PositionParams = {}): boolean => {
      const position = lastCaretPositionRef.current;
      const currentIndex = blocksRef.current.findIndex(
        (v) => v.id === (blockId ?? position?.blockId),
      );
      if (currentIndex < 1 || !blocksRef.current[currentIndex - 1]) return false;
      if (!lastCaretRectRef.current) {
        setCaretPosition({
          blockId: blocksRef.current[currentIndex - 1].id,
          index: 0,
          nextElementDirection: 'up',
        });
        return false;
      }
      const prevBlock = blockUtils.getBlockElementById(blocksRef.current[currentIndex - 1].id);
      if (!prevBlock) return false;
      // for embedded elements
      if (prevBlock.contentEditable === 'false') {
        return prev({ blockId: prevBlock.dataset.blockId });
      }
      let prevRect = prevBlock.getBoundingClientRect();
      const container = getHtmlElement(settings.scrollContainer);
      const containerOffsetTop = container ? container.getBoundingClientRect().top : 0;

      if (container) {
        if (prevRect.top <= containerOffsetTop + settings.scrollMarginTop) {
          const outerEl = blockUtils.getOuter(prevBlock);
          const offsetTop =
            (editorRef.current?.parentElement?.offsetTop ?? 0) -
            containerOffsetTop +
            (outerEl?.offsetTop ?? 0);

          if (currentIndex - 1 < 1) {
            container.scrollTop = settings.scrollMarginTop;
          } else {
            container.scrollTop = offsetTop - settings.scrollMarginTop + 30;
          }
        }
      } else {
        if (document.scrollingElement && prevRect.top <= containerOffsetTop) {
          let editorScrollTop =
            document.scrollingElement.scrollTop + prevRect.top - settings.scrollMarginTop;
          if (currentIndex - 1 < 1) {
            editorScrollTop -= 30;
          }
          document.scrollingElement.scrollTop = editorScrollTop;
        }
      }
      prevRect = prevBlock.getBoundingClientRect();

      if (typeof index === 'number' && index >= 0) {
        setTimeout(() => {
          setCaretPosition({
            blockId: blocksRef.current[currentIndex - 1].id,
            index,
          });
        }, 10);

        return true;
      }

      const range = caretRangeFromPoint(
        lastCaretRectRef.current.x,
        prevRect.y + prevRect.height - margin,
      );
      const selection = document.getSelection();
      if (!selection || !range) return false;

      // rangeがブロック外に飛んでいる場合は要素の最後に飛ばす
      const [rangeBlockId] = blockUtils.getBlockId(range.commonAncestorContainer as HTMLElement);
      if (!rangeBlockId) {
        const nextBlockLength = getBlockLength(blocksRef.current[currentIndex - 1].id) ?? 0;
        setCaretPosition({
          blockId: blocksRef.current[currentIndex - 1].id,
          index: nextBlockLength,
          nextElementDirection: 'up',
        });
        updateCaretRect();
        return true;
      }

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
    },
    [],
  );

  const next = React.useCallback(
    ({ index = 0, margin = 10, blockId }: PositionParams = {}): boolean => {
      const position = lastCaretPositionRef.current;
      const currentIndex = blocksRef.current.findIndex(
        (v) => v.id === (blockId ?? position?.blockId),
      );
      if (currentIndex === -1 || !blocksRef.current[currentIndex + 1]) return false;

      if (!lastCaretRectRef.current) {
        setTimeout(() => {
          setCaretPosition({
            blockId: blocksRef.current[currentIndex + 1].id,
            index,
          });
        }, 10);
        return false;
      }

      const nextBlock = blockUtils.getBlockElementById(blocksRef.current[currentIndex + 1].id);

      if (!nextBlock) return false;
      // for embedded elements
      if (nextBlock.contentEditable === 'false') {
        return next({ blockId: nextBlock.dataset.blockId });
      }
      let nextRect = nextBlock.getBoundingClientRect();
      const container = getHtmlElement(settings.scrollContainer);
      const scrollHeight = container?.clientHeight ?? window.innerHeight;

      if (container) {
        const containerRect = container.getBoundingClientRect() ?? 0;
        if (
          nextRect.top + nextRect.height >=
          containerRect.top + containerRect.height - settings.scrollMarginBottom
        ) {
          const outerEl = blockUtils.getOuter(nextBlock);
          const scrollTop =
            (editorRef.current?.parentElement?.offsetTop ?? 0) +
            (outerEl?.offsetTop ?? 0) -
            container.clientHeight +
            settings.scrollMarginBottom;
          if (container.scrollHeight > scrollTop + container.clientHeight) {
            container.scrollTop = scrollTop;
          } else {
            container.scrollTop = container.scrollHeight - container.clientHeight;
          }

          nextRect = nextBlock.getBoundingClientRect();
        }
      } else if (nextRect.top + nextRect.height >= scrollHeight - settings.scrollMarginBottom) {
        if (document.scrollingElement) {
          const nextTop = document.scrollingElement.scrollTop + nextRect.top;
          const p = nextTop - window.innerHeight + settings.scrollMarginBottom;
          document.scrollingElement.scrollTop = p;
        }

        nextRect = nextBlock.getBoundingClientRect();
      }
      const range = caretRangeFromPoint(lastCaretRectRef.current.x, nextRect.y + margin);
      const selection = document.getSelection();
      if (!selection || !range) return false;

      // rangeがブロック外に飛んでいる場合は要素の最初に飛ばす
      const [rangeBlockId] = blockUtils.getBlockId(range.commonAncestorContainer as HTMLElement);
      if (!rangeBlockId) {
        setCaretPosition({
          blockId: blocksRef.current[currentIndex + 1].id,
          index: 0,
        });
        updateCaretRect();
        return true;
      }

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
    },
    [],
  );

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
    },
    [],
  );

  const setBlocks = React.useCallback((blocks: Block[]) => {
    blocksRef.current = blocks.map((block) => {
      return { ...block, contents: blockUtils.optimizeInlineContents(block.contents) };
    });
    numberingList();
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
    ({
      blockId = '',
      childBlockId = null,
      index = 0,
      length = 0,
      nextElementDirection = 'down',
    }: Partial<CaretPosition> & { nextElementDirection?: 'up' | 'down' }) => {
      const element = blockUtils.getBlockElementById(blockId);
      if (!element) return;

      // ネストされた要素の場合
      if (childBlockId) {
        const selection = document.getSelection();
        if (!selection) return;
        const element = blockUtils.getBlockElementById(childBlockId, true);
        if (!element) return null;
        const blockLength = blockUtils.getBlockLength(element) ?? 0;

        if (index < 0) {
          index = 0;
        }
        if (index > blockLength) {
          index = blockLength;
        }
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
        return;
      }

      // for embedded elements
      if (element.contentEditable === 'false') {
        const nextBlockId =
          nextElementDirection === 'up'
            ? (element.parentElement?.previousElementSibling as HTMLDivElement).dataset.id
            : (element.parentElement?.nextElementSibling as HTMLDivElement).dataset.id;

        if (!nextBlockId) return;
        const nextBlockLength =
          nextElementDirection === 'up' ? getBlockLength(nextBlockId) ?? 0 : 0;
        setCaretPosition({
          blockId: nextBlockId,
          index: nextBlockLength,
          length: 0,
          nextElementDirection,
        });
        return;
      }

      const selection = document.getSelection();
      if (!selection) return;
      const blockLength = getBlockLength(blockId) ?? 0;

      if (index < 0) {
        index = 0;
      }
      if (index > blockLength) {
        index = blockLength;
      }
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

  const scrollIntoView = React.useCallback((blockId?: string) => {
    blockId = blockId ?? lastCaretPositionRef.current?.blockId ?? '';
    const element = blockUtils.getBlockElementById(blockId);
    if (!element) return;
    let nextRect =
      element.parentElement?.getBoundingClientRect() ?? element.getBoundingClientRect();
    const container = getHtmlElement(settings.scrollContainer);
    const scrollHeight = container?.clientHeight ?? window.innerHeight;
    if (container) {
      const containerRect = container.getBoundingClientRect() ?? 0;
      if (
        nextRect.top + nextRect.height >=
        containerRect.top + containerRect.height - settings.scrollMarginBottom
      ) {
        const scrollTop =
          (element.parentElement?.offsetTop ?? 0) -
          container.clientHeight +
          settings.scrollMarginBottom;
        if (container.scrollHeight > scrollTop + container.clientHeight) {
          container.scrollTop = scrollTop;
        } else {
          container.scrollTop = container.scrollHeight - container.clientHeight;
        }
        nextRect =
          element.parentElement?.getBoundingClientRect() ?? element.getBoundingClientRect();
      }
    } else if (nextRect.top + nextRect.height >= scrollHeight - settings.scrollMarginBottom) {
      if (document.scrollingElement) {
        const nextTop = document.scrollingElement.scrollTop + nextRect.top;
        const p = nextTop - window.innerHeight + settings.scrollMarginBottom;
        document.scrollingElement.scrollTop = p;
      }
    }
  }, []);

  const normalizeRange = React.useCallback((nativeRange: Range) => {
    const [startInlineId, startInlineElement] = getInlineId(
      nativeRange.startContainer as HTMLElement,
    );
    const [endInlineId, endInlineElement] = getInlineId(nativeRange.endContainer as HTMLElement);
    const [childBlockId, childBlockKey, childBlockElement] = blockUtils.getChildBlockId(
      nativeRange.startContainer as HTMLElement,
    );

    const [blockId, blockElement] = blockUtils.getBlockId(
      nativeRange.startContainer as HTMLElement,
    );
    if (!editorRef.current || !startInlineId || !endInlineId || !blockId || !blockElement) {
      return null;
    }

    // ネストされた要素の場合
    let start, end;
    if (childBlockId) {
      start = blockUtils.getChildBlockIndexFromNativeIndex(
        nativeRange.startContainer as HTMLElement,
        nativeRange.startOffset,
      );
      end = blockUtils.getChildBlockIndexFromNativeIndex(
        nativeRange.endContainer as HTMLElement,
        nativeRange.endOffset,
      );
    } else {
      start = blockUtils.getBlockIndexFromNativeIndex(
        nativeRange.startContainer as HTMLElement,
        nativeRange.startOffset,
      );
      end = blockUtils.getBlockIndexFromNativeIndex(
        nativeRange.endContainer as HTMLElement,
        nativeRange.endOffset,
      );
    }

    const caretRect = getRectByRange(nativeRange);
    if (!caretRect) return null;
    const blockRect = blockElement.getBoundingClientRect();
    if (!start || !end) return null;
    const paddingTopText = getComputedStyle(blockElement).paddingTop;
    const paddingTop = paddingTopText.match(/^[0-9]+px$/) ? parseInt(paddingTopText) : 0;
    const scrollbarHeight = blockRect.height - blockElement.clientHeight;
    const range: CaretPosition = {
      blockId,
      childBlockId: childBlockId ?? null,
      blockFormat: blockElement?.dataset.format ?? '',
      index: start.index,
      length: end.index - start.index,
      collapsed: nativeRange.collapsed,
      isTop: caretRect.y - (blockRect.y + paddingTop) < 10,
      isBottom:
        blockRect.y +
          blockRect.height -
          (caretRect.y + caretRect.height + paddingTop + scrollbarHeight) <
        10,
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
      modulesRef.current = { ...modulesRef.current, [name]: moduleInstance };
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
        modulesRef.current = { ...modulesRef.current, [name]: moduleInstance };
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
    modulesRef.current = {};
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

      if (!blockId || !block || !blockElement || composing) return;
      let { contents, affected, affectedLength } = blockUtils.convertHTMLtoInlines(blockElement);
      updateCaretPositionRef();
      if (isEqual(block.contents, contents)) return;

      // code-block対応(差分を1つにまとめる)
      if (block.type === 'CODE-BLOCK') {
        const blockText = contents.map((v) => v.text).join('');
        contents = [createInline('TEXT', blockText)];
      }
      updateBlock({ ...block, contents });
      if (affected || forceUpdate) {
        render([blockId]);
        let newCaretPosition = lastCaretPositionRef.current;
        if (!newCaretPosition) {
          if (!lastCaretRectRef.current) return;
          const range = caretRangeFromPoint(lastCaretRectRef.current.x, lastCaretRectRef.current.y);
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
      } else {
        updateCaretRect();
      }
    },
    [],
  );

  const syncChildBlock = React.useCallback(
    (
      parentBlockId: string,
      blockId: string,
      blockKey: string,
      blockElement: HTMLElement,
      forceUpdate = false,
    ) => {
      const parentBlock = blocksRef.current.find((v) => v.id === parentBlockId);
      const composing = getModule('keyboard').composing;
      if (!parentBlock || !blockId || !blockElement || composing) return;
      let { contents, affected, affectedLength } = blockUtils.convertHTMLtoInlines(blockElement);
      const childBlocks = copyObject(parentBlock.childBlocks ?? {});
      if (Object.prototype.hasOwnProperty.call(childBlocks, blockKey)) {
        if (isEqual(childBlocks[blockKey].contents, contents)) return;
        childBlocks[blockKey] = { ...childBlocks[blockKey], contents };
      } else {
        childBlocks[blockKey] = { ...blockUtils.createBlock('PARAGRAPH', contents), id: blockId };
      }

      updateCaretPositionRef();

      updateBlock({
        ...parentBlock,
        childBlocks: { ...childBlocks },
      });

      if (affected || forceUpdate) {
        render([parentBlockId]);
        let newCaretPosition = lastCaretPositionRef.current;
        if (!newCaretPosition) {
          if (!lastCaretRectRef.current) return;
          const range = caretRangeFromPoint(lastCaretRectRef.current.x, lastCaretRectRef.current.y);
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
      } else {
        updateCaretRect();
      }
    },
    [],
  );

  const createBlock = React.useCallback(
    (
      appendBlock: Block,
      prevBlockId?: string,
      type: 'prepend' | 'append' = 'append',
      source: Source = EventSources.USER,
    ) => {
      const currentIndex = blocksRef.current.findIndex((v) => v.id === prevBlockId);
      const block = copyObject(appendBlock);
      if (block.meta) {
        delete block.meta;
      }
      eventEmitter.emit(EditorEvents.EVENT_EDITOR_HISTORY_PUSH, {
        payload: {
          type: HistoryType.ADD_BLOCK,
          blockId: appendBlock.id,
          block,
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
          : type === 'prepend'
          ? [appendBlock, ...blocksRef.current]
          : [...blocksRef.current, appendBlock],
      );
    },
    [],
  );

  const updateBlocks = React.useCallback((blocks: Block[]) => {
    blocksRef.current = blocks;
  }, []);

  const updateBlock = React.useCallback(
    (targetBlock: Block, source: Source = EventSources.USER) => {
      const currentIndex = blocksRef.current.findIndex((v) => v.id === targetBlock.id);
      if (currentIndex === -1) return;
      const block = copyObject(targetBlock);
      const prev = copyObject(blocksRef.current[currentIndex]);
      Object.keys(block.attributes).forEach((key) => {
        if (typeof block.attributes[key] === 'boolean' && !block.attributes[key]) {
          delete block.attributes[key];
        }
      });
      const contents = blockUtils.optimizeInlineContents(block.contents);
      blocksRef.current = [
        ...blocksRef.current.slice(0, currentIndex),
        {
          ...blocksRef.current[currentIndex],
          ...block,
          contents,
        },
        ...blocksRef.current.slice(currentIndex + 1),
      ];

      if (block.meta) {
        delete block.meta;
      }
      if (prev.meta) {
        delete prev.meta;
      }
      const prevBlock = {
        ...prev,
        contents: prev.contents.map((content) => {
          return {
            attributes: content.attributes,
            text: content.text,
            type: content.type,
            isEmbed: content.isEmbed,
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
          };
        }),
      };

      const redo = json0diff(prevBlock, currentBlock, DiffMatchPatch);
      const undo = json0diff(currentBlock, prevBlock, DiffMatchPatch);
      if (redo && undo) {
        eventEmitter.emit(EditorEvents.EVENT_EDITOR_HISTORY_PUSH, {
          payload: {
            type: HistoryType.UPDATE_CONTENTS,
            blockId: block.id,
            undo,
            redo,
          },
          source,
        });
      }
    },
    [],
  );

  const deleteBlock = React.useCallback((blockId: string, source: Source = EventSources.USER) => {
    const currentIndex = blocksRef.current.findIndex((v) => v.id === blockId);

    if (currentIndex === -1) return;

    eventEmitter.emit(EditorEvents.EVENT_EDITOR_HISTORY_PUSH, {
      payload: {
        type: HistoryType.REMOVE_BLOCK,
        blockId: blocksRef.current[currentIndex].id,
        block: copyObject(blocksRef.current[currentIndex]),
        prevBlockId: blocksRef.current[currentIndex - 1]?.id,
      },
      source,
    });

    updateBlocks(blocksRef.current.filter((v) => v.id !== blockId));
  }, []);

  const deleteBlocks = React.useCallback(
    (blockIds: string[], source: Source = EventSources.USER) => {
      const deleteBlocks = blocksRef.current.filter((v) => blockIds.includes(v.id));

      if (deleteBlocks.length < 1) return;

      eventEmitter.emit(EditorEvents.EVENT_EDITOR_HISTORY_PUSH, {
        payload: deleteBlocks.map((block) => {
          const currentIndex = blocksRef.current.findIndex((v) => v.id === block.id);
          return {
            type: HistoryType.REMOVE_BLOCK,
            blockId: block.id,
            block: copyObject(block),
            prevBlockId: blocksRef.current[currentIndex - 1]?.id,
          };
        }),
        source,
      });

      updateBlocks(blocksRef.current.filter((v) => !blockIds.includes(v.id)));
    },
    [],
  );

  const render = React.useCallback((affectedIds: string[] = [], isForce = false) => {
    if (isForce) {
      eventEmitter.emit(EditorEvents.EVENT_BLOCK_RERENDER_FORCE, affectedIds);
    } else {
      eventEmitter.emit(EditorEvents.EVENT_BLOCK_RERENDER, affectedIds);
    }
  }, []);

  const numberingList = React.useCallback(() => {
    let listNumbers: number[] = [];
    let lastIndent = 0;
    const affectedIds: string[] = [];
    updateBlocks(
      blocksRef.current.map((v, i) => {
        const indent = v.attributes?.indent ?? 0;
        if (v.type === 'ORDERED-LIST') {
          if (!listNumbers[indent]) {
            listNumbers[indent] = 0;
          }
          if (lastIndent < indent) {
            listNumbers[indent] = 0;
          }
          lastIndent = indent;

          if (v.meta?.listNumber !== ++listNumbers[indent]) {
            affectedIds.push(v.id);
          }

          return {
            ...v,
            meta: { ...v.meta, listNumber: listNumbers[indent] },
          };
        }
        if (v.type === 'BULLET-LIST' && lastIndent < indent) {
          return {
            ...v,
            meta: { ...v.meta, listNumber: 0 },
          };
        }
        listNumbers = [];
        lastIndent = indent;

        return {
          ...v,
          meta: { ...v.meta, listNumber: 0 },
        };
      }),
    );
    render(affectedIds);
  }, []);

  const getSettings = React.useCallback(() => {
    return settings;
  }, [settings]);

  const getEditorRef = React.useCallback(() => {
    return editorRef.current as HTMLDivElement;
  }, []);

  const editorController = React.useMemo(() => {
    return {
      focus,
      blur,
      hasFocus,
      getFormats,
      formatText,
      setBlocks,
      getBlocks,
      getBlock,
      getBlockLength,
      createBlock,
      updateBlock,
      updateBlocks,
      deleteBlock,
      deleteBlocks,
      sync,
      syncChildBlock,
      getCaretPosition,
      setCaretPosition,
      updateCaretPositionRef,
      updateCaretRect,
      scrollIntoView,
      getNativeRange,
      prev,
      next,
      numberingList,
      render,
      addModule,
      addModules,
      getModule,
      removeAllModules,
      getEventEmitter,
      getSettings,
      getEditorRef,
    };
  }, []);

  //real-time collaborative test
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
