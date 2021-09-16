export interface Modules {
  [key: string]: Module;
}

export interface Module {
  options?: any;
  onInit(): void;
  onDestroy(): void;
}

export interface ModuleOptions {
  [key: string]: any;
}
