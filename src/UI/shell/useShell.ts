import { appEffects } from './effects';
import { shell } from './shell';
import { selectPluginState, State } from '@/UI/core/core';
import { storeContext, StoreContext } from '@/UI/main';
import { useContext, useMemo } from 'react';
import { StoreApi } from 'zustand';
import { useStore } from 'zustand/react';

export const useShell = (
  ctx: StoreContext = storeContext,
  eff = appEffects,
) => {
  const store = useContext<StoreApi<State>>(ctx);

  return useMemo(() => {
    return {
      // State hooks
      usePluginState: () => useStore(store, selectPluginState),

      // Thunks
      ...shell(store, eff),
    };
  }, [store, eff]);
};
