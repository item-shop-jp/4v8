import { Module } from '../types/module';
import { EventEmitter } from '../utils/event-emitter';
import { EditorController } from '../types/editor';
import { EditorEvents } from '../constants';
import { Subscription } from 'rxjs';
import { Block } from '../types';

interface Props {
  eventEmitter: EventEmitter;
  editor: EditorController;
  options: {
    onChange: (blocks: Block[]) => void;
  };
}

export class TocModule implements Module {
  private eventEmitter;
  private editor;
  private options: Props['options'];
  private subs: Subscription;

  constructor({ eventEmitter, editor, options }: Props) {
    this.editor = editor;
    this.eventEmitter = eventEmitter;
    this.options = { ...options };
    this.subs = new Subscription();
  }

  onInit() {
    this.eventEmitter.info('init toc module');
    const eventEmitter = this.editor.getEventEmitter();

    this.subs.add(
      eventEmitter.select(EditorEvents.EVENT_EDITOR_CHANGED).subscribe((v) => {
        const blocks = this.editor.getBlocks();
        const headerBlocks = blocks.filter((v) => {
          return ['HEADER1', 'HEADER2', 'HEADER3', 'HEADER4', 'HEADER5', 'HEADER6'].includes(
            v.type,
          );
        });
        if (typeof this.options.onChange === 'function') {
          this.options.onChange(headerBlocks);
        }
      }),
    );
  }

  onDestroy() {
    this.eventEmitter.info('destroy toc module');
    this.subs.unsubscribe();
  }
}
