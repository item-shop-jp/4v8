export const KeyCodes = {
  ESC: 'Escape',
  ENTER: 'Enter',
  TAB: 'Tab',
  S: 'KeyS',
  SPACE: 'Space',
  DEL: 'Delete',
  ARROW_UP: 'ArrowUp',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  ARROW_DOWN: 'ArrowDown',
};

export const EditorEvents = {
  EVENT_EDITOR_CREATE: 'event:editor-create',
  EVENT_BLOCK_CREATE: 'event:block-update',
  EVENT_BLOCK_UPDATE: 'event:block-update',
  EVENT_BLOCK_DELETE: 'event:block-delete',
  EVENT_BLOCK_SWAP: 'event:block-swap',
  EVENT_SELECTION_CHANGE: 'event:selection-change',
  EVENT_TEXT_CHANGE: 'event:text-change',
  EVENT_LOG_INFO: 'event:log-info',
  EVENT_LOG_WARNING: 'event:log-warning',
  EVENT_LOG_ERROR: 'event:log-error',
};

export const EventSources = {
  API: 'api',
  SILENT: 'silent',
  USER: 'user',
};

export const LogLevels = {
  NONE: 0,
  ERROR: 1,
  WARNING: 2,
  INFO: 3,
};
