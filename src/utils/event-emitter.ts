import { Subject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

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

  on<T>(key: string): Observable<T> {
    return this._eventBus.asObservable().pipe(
      filter((event) => event.key === key),
      map((event) => event.data),
    );
  }
}
