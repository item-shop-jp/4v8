import { EventEmitter } from '../utils/event-emitter';

export interface Modules {
  [key: string]: Module;
}

export interface Module {
  options?: any;
  onInit(): void;
  onDestroy(): void;
}
