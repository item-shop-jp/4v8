export interface Modules {
  [key: string]: BaseModule;
}

export interface BaseModule {
  options?: ModuleOptions;
  onInit(): void;
  onDestroy(): void;
}

export interface ModuleOptions {
  [key: string]: any;
}
