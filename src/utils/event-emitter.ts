import { Subject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { EditorEvents } from '../constants';

interface EditorEvent {
  key: string;
  data: any;
}

export class EventEmitter {
  private _eventBus: Subject<EditorEvent>;
  constructor() {
    this._eventBus = new Subject<EditorEvent>();
  }

  emit(key: string, data: any = {}) {
    this._eventBus.next({ key, data });
  }

  on<T = any>(key: string): Observable<T> {
    return this._eventBus.asObservable().pipe(
      filter((event) => event.key === key),
      map((event) => event.data),
    );
  }

  info(message: string, data?: any) {
    this.emit(EditorEvents.EVENT_LOG_INFO, { message, data });
  }

  warning(message: string, data?: any) {
    this.emit(EditorEvents.EVENT_LOG_WARNING, { message, data });
  }

  error(message: string, data?: any) {
    this.emit(EditorEvents.EVENT_LOG_ERROR, { message, data });
  }
}
