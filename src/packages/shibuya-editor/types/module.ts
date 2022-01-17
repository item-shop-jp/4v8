export interface Modules {
  [key: string]: Module;
}

export interface Module {
  onInit(): void;
  onDestroy(): void;
}

export interface ModuleOptions {
  [key: string]: any;
}
