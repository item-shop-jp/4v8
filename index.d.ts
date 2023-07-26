import * as React from 'react';
import {
  CollaboratorModule,
  DragDropModule,
  EditorModule,
  HistoryModule,
  LoggerModule,
  MarkdownShortcutModule,
  SelectorModule,
  SelectorModuleProps,
  ToolbarModule,
  UploaderModule,
  KeyBoardModule,
  TocModule,
} from './src/packages/shibuya-editor/modules';
import { FlattenSimpleInterpolation } from 'styled-components';

interface EditorProps {
  readOnly?: boolean;
  placeholder?: string;
  formats?: { [key: string]: any };
  settings?: Partial<Settings>;
}

export const Editor: React.MemoExoticComponent<
  React.ForwardRefExoticComponent<EditorProps & React.RefAttributes<EditorController>>
>;

export interface GlobalToolbarProps {
  editor: EditorController;
}

export interface BubbleToolbarProps {
  editor: EditorController;
  scrollContainer?: HTMLElement | string;
}

export interface BlockProps {
  blockId: string;
  formats?: Formats;
  contents: React.ReactNode;
  placeholder?: string;
  attributes: BlockAttributes;
  meta?: BlockAttributes;
  editor: EditorController;
  scrollContainer?: HTMLElement | string;
}

export interface InlineProps {
  inline: Inline;
  formats?: Formats;
  attributes: BlockAttributes;
  editor: EditorController;
  scrollContainer?: HTMLElement | string;
}

export interface LinkPopupProps {
  editor: EditorController;
  scrollContainer?: HTMLElement | string;
}

export interface Formats {
  'toolbar/global': React.FC<GlobalToolbarProps>;
  'toolbar/bubble': React.FC<BubbleToolbarProps>;
  'block/paragraph': React.FC<BlockProps>;
  'block/header1': React.FC<BlockProps>;
  'block/header2': React.FC<BlockProps>;
  'block/header3': React.FC<BlockProps>;
  'block/blockquote': React.FC<BlockProps>;
  'block/code-block': React.FC<BlockProps>;
  'block/ordered-list': React.FC<BlockProps>;
  'block/bullet-list': React.FC<BlockProps>;
  'inline/text': React.FC<InlineProps>;
  'inline/code-token': React.FC<InlineProps>;
  'inline/style/bold': () => FlattenSimpleInterpolation;
  'inline/style/underline': () => FlattenSimpleInterpolation;
  'inline/style/strike': () => FlattenSimpleInterpolation;
  'inline/style/code': () => FlattenSimpleInterpolation;
  'inline/style/italic': () => FlattenSimpleInterpolation;
  'inline/style/color': (color: string) => FlattenSimpleInterpolation;
  'inline/style/link': (url?: string) => FlattenSimpleInterpolation;
  'popup/link': React.FC<LinkPopupProps>;
  [key: string]: any;
}

export interface Modules {
  [key: string]: Module;
}

export interface Module {
  onInit(): void;
  onDestroy(): void;
}

export interface ModuleOptions {
  selector?: SelectorModuleProps['options'];
  [key: string]: any;
}

export type InlineType = 'TEXT' | string;

export interface InlineAttributes {
  [key: string]: any;
}

export interface Inline {
  id: string;
  attributes: InlineAttributes;
  text: string;
  type: InlineType;
  isEmbed: boolean;
}

export type BlockType =
  | 'PARAGRAPH'
  | 'ORDEREDLIST'
  | 'BULLETLIST'
  | 'BLOCKQUOTE'
  | 'HEADER1'
  | 'HEADER2'
  | 'HEADER3'
  | 'HEADER4'
  | 'HEADER5'
  | 'HEADER6'
  | 'IMAGE'
  | 'FILE'
  | string;

export interface BlockAttributes {
  [key: string]: any;
}

export interface Block {
  id: string;
  contents: Inline[];
  attributes: BlockAttributes;
  type: BlockType;
  meta?: BlockAttributes;
}

export const Paragraph: React.MemoExoticComponent<(props: BlockProps) => JSX.Element>;
export const Header1: React.MemoExoticComponent<(props: BlockProps) => JSX.Element>;
export const Header2: React.MemoExoticComponent<(props: BlockProps) => JSX.Element>;
export const Header3: React.MemoExoticComponent<(props: BlockProps) => JSX.Element>;
export const OrderedList: React.MemoExoticComponent<(props: BlockProps) => JSX.Element>;
export const BulletList: React.MemoExoticComponent<(props: BlockProps) => JSX.Element>;
export const Blockquote: React.MemoExoticComponent<(props: BlockProps) => JSX.Element>;
export const CodeBlock: React.MemoExoticComponent<(props: BlockProps) => JSX.Element>;

export interface Settings {
  scrollMarginBottom?: number;
  scrollMarginTop?: number;
  allowFormats?: string[];
  embeddedBlocks?: BlockType[];
  modules?: ModuleOptions;
  collaborationLevel?: 'block' | 'inline';
  indentableFormats?: BlockType[];
  scrollContainer?: HTMLElement | string;
}

export interface PositionParams {
  index?: number;
  margin?: number;
  blockId?: string;
}

export interface CaretPosition {
  blockId: string;
  blockFormat: string;
  index: number;
  length: number;
  collapsed: boolean;
  isTop: boolean;
  isBottom: boolean;
  rect: DOMRect;
}

export interface JSON0 {
  p: [keyof Block, number, keyof Inline, number];
  li: any;
  ld: any;
  si: string;
  sd: string;
}

export interface UpdateOp {
  type: 'update_contents';
  blockId: string;
  undo: JSON0[];
  redo: JSON0[];
  position?: CaretPosition;
}

export interface AddOp {
  type: 'add_block';
  blockId: string;
  block: Block;
  prevBlockId?: string;
  position?: CaretPosition;
}

export interface RemoveOp {
  type: 'remove_block';
  blockId: string;
  block: Block;
  prevBlockId?: string;
  position?: CaretPosition;
}

export type Op = UpdateOp | AddOp | RemoveOp;

export interface EditorEvent {
  key: string;
  data: any;
}

export class EventEmitter {
  emit: (key: string, data: any) => void;
  select: (key: string) => any;
  // select: <T = any>(key: string) => Observable<T>;
  info: (message: string, data?: any) => void;
  warning: (message: string, data?: any) => void;
  error: (message: string, data?: any) => void;
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
  setBlocks(blocks: Block[]): void;
  getBlocks(): Block[];
  getBlock(blockId: string): Block | null;
  getBlockLength(blockId: string): number | null;
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
  setCaretPosition(
    caretPosition: Partial<CaretPosition> & {
      nextElementDirection?: 'up' | 'down';
    },
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
  getModule(name: 'toc'): TocModule;
  getModule<T = any>(name: string): T | null;
  removeAllModules(): void;
  getEventEmitter(): EventEmitter;
  getSettings(): Settings;
  getEditorRef(): HTMLElement;
}
