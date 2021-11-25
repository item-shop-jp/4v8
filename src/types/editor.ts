import { ModuleOptions } from './module';

export interface Settings {
  scrollMarginBottom?: number;
  scrollMarginTop?: number;
  allowAttributes?: string[];
  allowFormats?: string[];
  modules?: ModuleOptions;
}
