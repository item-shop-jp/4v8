import { Subscription } from 'rxjs';
import { Module } from '../types/module';
import { EventEmitter } from '../utils/event-emitter';
import { EditorEvents, LogLevels } from '../constants';
import { EditorController } from '../types/editor';

interface Props {
  eventEmitter: EventEmitter;
  editor: EditorController;
  options: {
    logLevel: 0 | 1 | 2 | 3;
  };
}

interface Log {
  message: string;
  data: any;
}

export class LoggerModule implements Module {
  private eventEmitter;
  private logLevel;
  private subs: Subscription;

  constructor({ eventEmitter, options: { logLevel = 1 } }: Props) {
    this.subs = new Subscription();
    this.eventEmitter = eventEmitter;
    this.logLevel = logLevel;
  }

  onInit() {
    this._watchLogEvents();
    this.eventEmitter.info('init logger module');
  }

  onDestroy() {
    this.eventEmitter.info('destroy logger module');
    setTimeout(() => this.subs.unsubscribe());
  }

  private _watchLogEvents() {
    if (this.logLevel >= LogLevels.INFO) {
      const sub = this.eventEmitter.on<Log>(EditorEvents.EVENT_LOG_INFO).subscribe(({ message, data = '' }) => {
        console.info('LOG_INFO:', message, data);
      });
      this.subs.add(sub);
    }
    if (this.logLevel >= LogLevels.WARNING) {
      const sub = this.eventEmitter.on<Log>(EditorEvents.EVENT_LOG_WARNING).subscribe(({ message, data = '' }) => {
        console.warn('LOG_WARNING:', message, data);
      });
      this.subs.add(sub);
    }
    if (this.logLevel >= LogLevels.ERROR) {
      const sub = this.eventEmitter.on<Log>(EditorEvents.EVENT_LOG_ERROR).subscribe(({ message, data = '' }) => {
        console.error('LOG_ERROR:', message, data);
      });
      this.subs.add(sub);
    }
  }
}
