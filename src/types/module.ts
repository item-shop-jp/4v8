export interface Modules {
  [key: string]: BaseModule;
}

export class BaseModule {
  protected options: ModuleOptions = {};
  constructor() {}
  onInit() {}
  onDestroy() {}
}

export interface ModuleOptions {
  [key: string]: any;
}
