import { SelectorModuleProps } from '../modules/selector';

export interface Modules {
  [key: string]: Module;
}

export interface Module {
  onInit(): void;
  onDestroy(): void;
}

export interface ModuleOptions {
  selector?: SelectorModuleProps['options'];
  [key: string]: any;
}
