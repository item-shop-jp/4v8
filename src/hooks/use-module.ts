import * as React from 'react';
import { Modules, BaseModule } from '../types/module';
import { EventEmitter } from '../utils/event-emitter';

interface Props {
  eventEmitter: EventEmitter;
}

export function useModule({ eventEmitter }: Props): [
  Modules,
  {
    addModule: <T extends BaseModule>(
      name: string,
      module: { new (params: { eventEmitter: EventEmitter }): T },
    ) => void;
    removeAll: () => void;
  },
] {
  const [modules, setModules] = React.useState<Modules>({});
  const eventEmitterRef = React.useRef(eventEmitter);
  const modulesRef = React.useRef<Modules>({});

  const addModule = React.useCallback(
    <T extends BaseModule>(
      name: string,
      module: { new (params: { eventEmitter: EventEmitter }): T },
    ) => {
      const moduleInstance = new module({ eventEmitter });
      setModules((prevModules) => {
        return { ...prevModules, [name]: moduleInstance };
      });
      moduleInstance.onInit();
      eventEmitterRef.current.emit('module_created', name);
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

  return [modules, { addModule, removeAll }];
}
