import * as React from 'react';
import { BaseModule } from '../types/module';

export class KeyBoardModule implements BaseModule {
  constructor() {}

  onInit() {
    console.log('init keyboard');
  }

  onDestroy() {
    console.log('destory keyboard');
  }

  onKeyDown(e: React.KeyboardEvent) {
    if (e.keyCode === 13) {
      e.preventDefault();
      e.stopPropagation();
    }

    console.log(e.keyCode);
  }
}
