import { Subscription } from 'rxjs';
import { Module } from '../types/module';
import { EventEmitter } from '../utils/event-emitter';
import { EditorEvents, LogLevels } from '../constants';

interface Props {
  eventEmitter: EventEmitter;
  options: {
    logLevel: 0 | 1 | 2 | 3;
  };
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
    this.eventEmitter.emit(EditorEvents.EVENT_LOG_INFO, 'init logger module');
  }

  onDestroy() {
    this.eventEmitter.emit(EditorEvents.EVENT_LOG_INFO, 'destroy logger module');
    setTimeout(() => this.subs.unsubscribe());
  }

  private _watchLogEvents() {
    if (this.logLevel >= LogLevels.INFO) {
      const sub = this.eventEmitter.on(EditorEvents.EVENT_LOG_INFO).subscribe((payload) => {
        console.info('LOG_INFO:', payload);
      });
      this.subs.add(sub);
    }
    if (this.logLevel >= LogLevels.WARNING) {
      const sub = this.eventEmitter.on(EditorEvents.EVENT_LOG_WARNING).subscribe((payload) => {
        console.warn('LOG_WARNING:', payload);
      });
      this.subs.add(sub);
    }
    if (this.logLevel >= LogLevels.ERROR) {
      const sub = this.eventEmitter.on(EditorEvents.EVENT_LOG_ERROR).subscribe((payload) => {
        console.error('LOG_ERROR:', payload);
      });
      this.subs.add(sub);
    }
  }
}
