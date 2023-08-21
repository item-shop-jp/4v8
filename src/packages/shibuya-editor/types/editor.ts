import { ModuleOptions } from './module';
import { InlineAttributes } from '../types/inline';
import { Block, BlockType } from '../types/block';
import { CaretPosition } from '../types/caret';
import { EventEmitter } from '../utils/event-emitter';
import {
  EditorModule,
  KeyBoardModule,
  ToolbarModule,
  SelectorModule,
  HistoryModule,
  LoggerModule,
  MarkdownShortcutModule,
  DragDropModule,
  CollaboratorModule,
} from '../modules';
import { UploaderModule } from '../modules/uploader';

export interface Settings {
  scrollMarginBottom: number;
  scrollMarginTop: number;
  allowFormats: string[];
  embeddedBlocks: BlockType[];
  modules?: ModuleOptions;
  collaborationLevel: 'block' | 'inline';
  indentableFormats: BlockType[];
  disableDecorationFormats: BlockType[]; // 装飾無効
  scrollContainer?: HTMLElement | string;
}

export interface PositionParams {
  index?: number;
  margin?: number;
  blockId?: string;
}

/*
 * user       => Update your blocks and then save the operation
 * silent     => Update your blocks, then don't save the operation
 */
export type Source = 'user' | 'silent' | 'collaborator';

export interface EditorController {
  focus(): void;
  blur(): void;
  hasFocus(): boolean;
  getFormats(blockId: string, index: number, length?: number): InlineAttributes;
  formatText(blockId: string, index: number, length: number, attributes: InlineAttributes): void;
  formatChildBlockText(
    blockId: string,
    childBlockId: string,
    index: number,
    length: number,
    attributes: InlineAttributes,
  ): void;
  setBlocks(blocks: Block[]): void;
  getBlocks(): Block[];
  getBlock(blockId: string): Block | null;
  getBlockLength(blockId: string): number | null;
  getChildBlockLength(blockId: string): number | null;
  createBlock(appendBlock: Block, prevBlockId?: string, type?: 'prepend' | 'append'): void;
  createBlock(
    appendBlock: Block,
    prevBlockId?: string,
    type?: 'prepend' | 'append',
    source?: Source,
  ): void;
  updateBlock(block: Block): void;
  updateBlock(block: Block, source: Source): void;
  deleteBlock(blockId: string): void;
  deleteBlock(blockId: string, source: Source): void;
  deleteBlocks(blockIds: string[]): void;
  deleteBlocks(blockIds: string[], source: Source): void;
  sync(blockId?: string, blockElement?: HTMLElement, forceUpdate?: boolean): void;
  syncChildBlock(
    parentBlockId: string,
    blockId?: string,
    blockKey?: string,
    blockElement?: HTMLElement,
    forceUpdate?: boolean,
  ): void;
  setCaretPosition(
    caretPosition: Partial<CaretPosition> & { nextElementDirection?: 'up' | 'down' },
  ): void;
  getCaretPosition(): CaretPosition | null;
  getNativeRange(): Range | null;
  scrollIntoView(blockId?: string): void;
  updateCaretPositionRef(caret?: CaretPosition): void;
  updateCaretRect(rect?: DOMRect): DOMRect | null;
  prev(params?: PositionParams): boolean;
  next(params?: PositionParams): boolean;
  render(affectedIds?: string[], isForce?: boolean): void;
  numberingList(): void;
  addModule(
    name: string,
    module: {
      new (params: { eventEmitter: EventEmitter; options: any }): any;
    },
    options?: any,
  ): void;
  addModules(
    modules: {
      name: string;
      module: {
        new (params: { eventEmitter: EventEmitter; editor: EditorController; options: any }): any;
      };
    }[],
    options?: ModuleOptions,
  ): void;
  getModule(name: 'editor'): EditorModule;
  getModule(name: 'keyboard'): KeyBoardModule;
  getModule(name: 'toolbar'): ToolbarModule;
  getModule(name: 'selector'): SelectorModule;
  getModule(name: 'history'): HistoryModule;
  getModule(name: 'logger'): LoggerModule;
  getModule(name: 'markdown-shortcut'): MarkdownShortcutModule;
  getModule(name: 'uploader'): UploaderModule;
  getModule(name: 'drag-drop'): DragDropModule;
  getModule(name: 'collaborator'): CollaboratorModule;
  getModule<T = any>(name: string): T | null;
  removeAllModules(): void;
  getEventEmitter(): EventEmitter;
  getSettings(): Settings;
  getEditorRef(): HTMLElement;
}
