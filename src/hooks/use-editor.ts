import * as React from 'react';
import { Subscription } from 'rxjs';
import { EventEmitter } from '../utils/event-emitter';
import { getBlockId, getBlockElementById, getBlockLength } from '../utils/block';
import { CaretPosition } from '../types/caret';
import { Modules, ModuleOptions } from '../types/module';
import { Block } from '../types/block';
import { EditorEvents } from '../constants';

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
  getBlocks: () => Block[];
  setCaretPosition: (caretPosition: Partial<CaretPosition>) => void;
  getCaretPosition: () => CaretPosition | null;
  getNativeRange: () => Range | null;
  updateCaretPosition: () => CaretPosition | null;
  next: (params?: PositionParams) => void;
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
  getModule: (name: string) => any;
  removeAllModules: () => void;
}

export function useEditor({
  eventEmitter,
}: Props): [Block[], React.MutableRefObject<HTMLDivElement | null>, EditorController] {
  const editorRef = React.useRef<HTMLDivElement>(null);
  const lastCaretPositionRef = React.useRef<CaretPosition | null>();
  const blocksRef = React.useRef<Block[]>([]);
  const modulesRef = React.useRef<Modules>({});
  const [blocks, setBlocks] = React.useState<Block[]>([]);
  const [modules, setModules] = React.useState<Modules>({});

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
    const selection = document.getSelection();
    if (!selection) return null;
    selection.removeAllRanges();
  }, []);

  const next = React.useCallback(({ caretPosition, index = 0, length = 0 }: PositionParams = {}) => {
    const position = caretPosition ?? lastCaretPositionRef.current;
    const currentIndex = blocksRef.current.findIndex((v) => v.id === position?.blockId);
    if (currentIndex === -1 || !blocksRef.current[currentIndex + 1]) return;

    setCaretPosition({
      blockId: blocksRef.current[currentIndex + 1].id,
      index,
    });
    return blocksRef.current;
  }, []);

  const getBlocks = React.useCallback((): Block[] => {
    return blocksRef.current;
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
      lastCaretPositionRef.current = normalizeRange(nativeRange);
    }
    return lastCaretPositionRef.current;
  }, []);

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
    const selection = document.getSelection();
    if (!selection) return null;
    const currentRange = selection.getRangeAt(0);
    if (!currentRange) return null;
    try {
      setTimeout(() => {
        const range = document.createRange();
        range.setStart(currentRange.startContainer, index);
        range.setEnd(currentRange.endContainer, index + length);

        selection.removeAllRanges();
        selection.addRange(range);
        updateCaretPosition();
      });
      element.blur();
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
    const [startBlockId, startBlockElement] = getBlockId(nativeRange.startContainer as HTMLElement);
    const [endBlockId, endBlockElement] = getBlockId(nativeRange.endContainer as HTMLElement);

    if (!editorRef.current || !startBlockId || !endBlockId || startBlockId !== endBlockId) {
      return null;
    }

    const range: CaretPosition = {
      blockId: startBlockId,
      blockFormat: startBlockElement?.dataset.format ?? '',
      index: nativeRange.startOffset,
      length: getBlockLength(startBlockElement?.childNodes),
      collapsed: nativeRange.collapsed,
      rect: nativeRange.getBoundingClientRect(),
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
      const moduleInstance = new module({ eventEmitter, editor: getEditorController(), options });
      setModules((prevModules) => {
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
          editor: getEditorController(),
          options: options[name] ?? {},
        });
        setModules((prevModules) => {
          return { ...prevModules, [name]: moduleInstance };
        });
        moduleInstance.onInit();
      });
    },
    [],
  );

  const getModule = React.useCallback((name: string) => {
    if (!modulesRef.current[name]) return null;
    return modulesRef.current[name];
  }, []);

  const removeAllModules = React.useCallback(() => {
    Object.keys(modulesRef.current).forEach((key) => {
      modulesRef.current[key].onDestroy();
    });
    setModules({});
  }, []);

  const getEditorController = React.useCallback(() => {
    return {
      focus,
      blur,
      getBlocks,
      getCaretPosition,
      setCaretPosition,
      updateCaretPosition,
      getNativeRange,
      next,
      addModule,
      addModules,
      getModule,
      removeAllModules,
    };
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

  React.useEffect(() => {
    modulesRef.current = modules;
  }, [modules]);

  return [blocks, editorRef, getEditorController()];
}
