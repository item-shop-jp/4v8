import * as React from 'react';
import { Modules, ModuleOptions } from '../types/module';
import { EventEmitter } from '../utils/event-emitter';
import { EditorController } from './use-editor';

interface Props {
  editor: EditorController;
  eventEmitter: EventEmitter;
}

export interface ModuleController {
  addModule: (
    name: string,
    module: {
      new (params: { eventEmitter: EventEmitter; options: any }): any;
    },
    options?: any,
  ) => void;
  addModules: (
    modules: {
      name: string;
      module: {
        new (params: { eventEmitter: EventEmitter; editor: EditorController; options: any }): any;
      };
    }[],
    options?: ModuleOptions,
  ) => void;
  removeAll: () => void;
}

export function useModule({ eventEmitter, editor }: Props): [Modules, ModuleController] {
  const [modules, setModules] = React.useState<Modules>({});
  const modulesRef = React.useRef<Modules>({});

  const addModule = React.useCallback(
    (
      name: string,
      module: {
        new (params: { eventEmitter: EventEmitter; editor: EditorController; options: any }): any;
      },
      options: any = {},
    ) => {
      const moduleInstance = new module({ eventEmitter, editor, options });
      setModules((prevModules) => {
        return { ...prevModules, [name]: moduleInstance };
      });
      moduleInstance.onInit();
    },
    [],
  );

  const addModules = React.useCallback(
    (
      modules: {
        name: string;
        module: {
          new (params: { eventEmitter: EventEmitter; editor: EditorController; options: any }): any;
        };
      }[],
      options: ModuleOptions = {},
    ) => {
      modules.forEach(({ name, module }) => {
        const moduleInstance = new module({ eventEmitter, editor, options: options[name] ?? {} });
        setModules((prevModules) => {
          return { ...prevModules, [name]: moduleInstance };
        });
        moduleInstance.onInit();
      });
    },
    [],
  );

  const removeAll = React.useCallback(() => {
    Object.keys(modulesRef.current).forEach((key) => {
      modulesRef.current[key].onDestroy();
    });
    setModules({});
  }, []);

  React.useEffect(() => {
    modulesRef.current = modules;
  }, [modules]);

  return [modules, { addModule, addModules, removeAll }];
}
