import { throttle } from 'throttle-debounce';
import { Module } from '../types/module';
import { EventEmitter } from '../utils/event-emitter';
import { EditorController } from '../hooks/use-editor';
import { getBlockId, getBlockElementById } from '../utils/block';
import { EditorEvents } from '../constants';

interface Props {
  eventEmitter: EventEmitter;
  editor: EditorController;
}

interface Op {
  blockId: string;
}

export class HisotryModule implements Module {
  private eventEmitter;
  private editor;
  private undo = [];
  private redo = [];

  constructor({ eventEmitter, editor }: Props) {
    this.editor = editor;
    this.eventEmitter = eventEmitter;
  }

  onInit() {
    this.eventEmitter.info('init selector module');
  }

  onDestroy() {
    this.eventEmitter.info('destroy selector module');
  }
}
