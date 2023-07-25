import { Subscription } from 'rxjs';
import { debounce } from 'throttle-debounce';
import { Module } from '../types/module';
import { EventEmitter } from '../utils/event-emitter';
import { EditorController } from '../types/editor';
import { EditorEvents } from '../constants';
import { Block } from '../types';

interface Props {
  eventEmitter: EventEmitter;
  editor: EditorController;
  options: {
    onChange: (
      blocks: {
        type: string;
        label: string;
      }[],
    ) => void;
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

    const debouncedUpdate = debounce(200, () => {
      this.updateToc();
    });
    debouncedUpdate();
    this.subs.add(
      eventEmitter.select(EditorEvents.EVENT_EDITOR_HISTORY_PUSH).subscribe((v) => {
        debouncedUpdate();
      }),
    );
  }

  onDestroy() {
    this.eventEmitter.info('destroy toc module');
    this.subs.unsubscribe();
  }

  private updateToc(): void {
    const blocks = this.editor.getBlocks();
    const headerBlocks = blocks
      .filter((v) => {
        return ['HEADER1', 'HEADER2', 'HEADER3', 'HEADER4', 'HEADER5', 'HEADER6'].includes(v.type);
      })
      .map((v) => {
        const plainText = v.contents.map((v) => v.text).join('');
        return { type: v.type, label: plainText };
      });
    if (typeof this.options.onChange === 'function') {
      this.options.onChange(headerBlocks);
    }
  }
}
