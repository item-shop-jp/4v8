import { Module } from '../types/module';
import { EventEmitter } from '../utils/event-emitter';
import { EditorController } from '../types/editor';
import { EditorEvents } from '../constants';

export interface User {
  id: string;
  name: string;
  imageUrl?: string;
  blockId: string | null;
  onClick?: (el: HTMLElement) => void;
}

interface Props {
  eventEmitter: EventEmitter;
  editor: EditorController;
  options: {
    marginTop: number; // スクロールコンテナ内のmargin設定用
  };
}

export class CollaboratorModule implements Module {
  private eventEmitter;
  private editor;
  private options: Props['options'];

  constructor({ eventEmitter, editor, options }: Props) {
    this.editor = editor;
    this.eventEmitter = eventEmitter;
    this.options = { ...options };
  }

  onInit() {
    this.eventEmitter.info('init collaborator module');
  }

  onDestroy() {
    this.eventEmitter.info('destroy collaborator module');
  }

  getOptions() {
    return this.options;
  }

  updatePosition(user: User) {
    this.eventEmitter.emit(EditorEvents.EVENT_COLLABORATOR_UPDATE_POSITION, user);
  }

  removeAll() {
    this.eventEmitter.emit(EditorEvents.EVENT_COLLABORATOR_REMOVE_ALL);
  }
}
