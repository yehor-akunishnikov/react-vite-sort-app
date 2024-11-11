import {createContext, useReducer} from 'react';

import {getDefaultState, reducer} from './reducers.ts';

export function useStore() {
  const [state, dispatch] = useReducer(reducer, null, getDefaultState);

  return {state, dispatch};
}

export const StoreContext = createContext<
  ReturnType<typeof useStore>['state']
>(null as unknown as ReturnType<typeof useStore>['state']);
export const StoreDispatchContext = createContext<
  ReturnType<typeof useStore>['dispatch']
>(null as unknown as ReturnType<typeof useStore>['dispatch']);
