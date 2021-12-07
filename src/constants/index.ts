import { Source } from '../types/editor';

export const KeyCodes = {
  ESC: 'Escape',
  ENTER: 'Enter',
  NUMPAD_ENTER: 'NumpadEnter',
  TAB: 'Tab',
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
  EVENT_EDITOR_CREATE: 'event:editor-create',
  EVENT_EDITOR_CHANGE: 'event:editor-change',
  EVENT_BLOCK_RERENDER: 'event:block-rerender',
  EVENT_BLOCK_SELECTED: 'event:block-selected', // Selector Mode
  EVENT_SELECTION_CHANGE: 'event:selection-change',
  EVENT_LOG_INFO: 'event:log-info',
  EVENT_LOG_WARNING: 'event:log-warning',
  EVENT_LOG_ERROR: 'event:log-error',
};

export const HistoryType = {
  UPDATE_CONTENTS: 'update_contents',
  ADD_BLOCK: 'add_block',
  REMOVE_BLOCK: 'remove_block',
};

export const EventSources: {
  [key: string]: Source;
} = {
  SILENT: 'silent',
  USER: 'user',
};

export const LogLevels = {
  NONE: 0,
  ERROR: 1,
  WARNING: 2,
  INFO: 3,
};
