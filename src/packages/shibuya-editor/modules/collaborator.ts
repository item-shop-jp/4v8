import { Module } from '../types/module';
import { EventEmitter } from '../utils/event-emitter';
import { EditorController } from '../types/editor';
import { EditorEvents } from '../constants';
import { Subscription } from 'rxjs';

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
}

export class CollaboratorModule implements Module {
  private eventEmitter;
  private editor;
  private subs = new Subscription();

  constructor({ eventEmitter, editor }: Props) {
    this.editor = editor;
    this.eventEmitter = eventEmitter;
  }

  onInit() {
    this.eventEmitter.info('init collaborator module');
    this.subs.add(
      this.eventEmitter.select(EditorEvents.EVENT_SELECTION_CHANGE).subscribe((v) => {
        const caret = this.editor.getCaretPosition();
        this.editor.getModule('collaborator').updatePosition({
          id: 'OodywE2HkiW1KeTBPCa96',
          name: 'ktgr',
          blockId: caret?.blockId ?? null,
          imageUrl: 'https://pbs.twimg.com/profile_images/1287576269442318337/TAhRwDuP_normal.jpg',
        });
      }),
    );
  }

  onDestroy() {
    this.eventEmitter.info('destroy collaborator module');
  }

  updatePosition(user: User) {
    this.eventEmitter.emit(EditorEvents.EVENT_COLLABORATOR_UPDATE_POSITION, user);
  }

  removeAll() {
    this.eventEmitter.emit(EditorEvents.EVENT_COLLABORATOR_REMOVE_ALL);
  }
}
