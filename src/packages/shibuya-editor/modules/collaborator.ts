import { Module } from '../types/module';
import { EventEmitter } from '../utils/event-emitter';
import { EditorController } from '../types/editor';
import { EditorEvents } from '../constants';

export interface Member {
  id: string;
  name: string;
  imageUrl?: string;
}

export interface CollaboratingMember extends Member {
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
  private members: Member[] = [];

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

  updatePosition(member: CollaboratingMember) {
    this.eventEmitter.emit(EditorEvents.EVENT_COLLABORATOR_UPDATE_POSITION, member);
  }

  removeAll() {
    this.eventEmitter.emit(EditorEvents.EVENT_COLLABORATOR_REMOVE_ALL);
  }

  setMembers(members: Member[]) {
    this.members = members;
  }

  getMembers(): Member[] {
    return this.members;
  }
}
