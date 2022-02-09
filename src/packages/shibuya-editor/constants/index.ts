import { Source } from '../types/editor';
import { AddOp, UpdateOp, RemoveOp } from '../types/history';

export const KeyCodes = {
  ESC: 'Escape',
  ENTER: 'Enter',
  NUMPAD_ENTER: 'NumpadEnter',
  TAB: 'Tab',
  C: 'KeyC',
  S: 'KeyS',
  Z: 'KeyZ',
  SPACE: 'Space',
  BACKSPACE: 'Backspace',
  DEL: 'Delete',
  ARROW_UP: 'ArrowUp',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  ARROW_DOWN: 'ArrowDown',
};

export const EditorEvents = {
  EVENT_EDITOR_CREATE: 'editor-create',
  EVENT_EDITOR_CHANGE: 'editor-change',
  EVENT_BLOCK_RERENDER: 'block-rerender',
  EVENT_BLOCK_SELECTED: 'block-selected', // Selector Mode
  EVENT_SELECTION_CHANGE: 'selection-change',
  EVENT_LOG_INFO: 'log-info',
  EVENT_LOG_WARNING: 'log-warning',
  EVENT_LOG_ERROR: 'log-error',
};

export const HistoryType = {
  UPDATE_CONTENTS: 'update_contents' as UpdateOp['type'],
  ADD_BLOCK: 'add_block' as AddOp['type'],
  REMOVE_BLOCK: 'remove_block' as RemoveOp['type'],
};

export const EventSources: {
  [key: string]: Source;
} = {
  SILENT: 'silent',
  USER: 'user',
  COLLABORATOR: 'collaborator',
};

export const LogLevels = {
  NONE: 0,
  ERROR: 1,
  WARNING: 2,
  INFO: 3,
};
