import { BaseModule } from '../types/module';

export class KeyBoard extends BaseModule {
  constructor() {
    super();
  }

  onInit() {
    console.log('init keyboard');
  }
  onDestroy() {
    console.log('destory keyboard');
  }
}
