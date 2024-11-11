import {ReactElement} from 'react';

import {StoreContext, StoreDispatchContext, useStore} from './store.ts';

type StoreProviderProps = {
  children: ReactElement | ReactElement[]
};

export function StoreProvider({ children }: StoreProviderProps) {
  const {state, dispatch} = useStore();

  return (
    <StoreContext.Provider value={state}>
      <StoreDispatchContext.Provider value={dispatch}>
        {children}
      </StoreDispatchContext.Provider>
    </StoreContext.Provider>
  );
}
