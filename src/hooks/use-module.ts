import * as React from 'react';
import { Modules, ModuleOptions } from '../types/module';
import { EventEmitter } from '../utils/event-emitter';

interface Props {
  eventEmitter: EventEmitter;
}

export function useModule({ eventEmitter }: Props): [
  Modules,
  {
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
          new (params: { eventEmitter: EventEmitter; options: any }): any;
        };
      }[],
      options?: ModuleOptions,
    ) => void;
    removeAll: () => void;
  },
] {
  const [modules, setModules] = React.useState<Modules>({});
  const modulesRef = React.useRef<Modules>({});

  const addModule = React.useCallback(
    (
      name: string,
      module: {
        new (params: { eventEmitter: EventEmitter; options: any }): any;
      },
      options: any = {},
    ) => {
      const moduleInstance = new module({ eventEmitter, options });
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
          new (params: { eventEmitter: EventEmitter; options: any }): any;
        };
      }[],
      options: ModuleOptions = {},
    ) => {
      modules.forEach(({ name, module }) => {
        const moduleInstance = new module({ eventEmitter, options: options[name] ?? {} });
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
