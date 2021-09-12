import * as React from 'react';
import { Modules } from '../types/module';

export function useModule(): [
  Modules,
  {
    addModule: (name: string, module: any) => void;
    removeAll: () => void;
  },
] {
  const [modules, setModules] = React.useState<Modules>({});
  const modulesRef = React.useRef<Modules>({});

  const addModule = React.useCallback((name: string, module: any) => {
    const moduleInstance = new module();
    setModules((prevModules) => {
      return { ...prevModules, [name]: moduleInstance };
    });
    moduleInstance.onInit();
  }, []);

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
