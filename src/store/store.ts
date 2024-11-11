import {useReducer} from 'react';

import {getDefaultState, reducer} from './reducers.ts';

export function useStore() {
  const [state, dispatch] = useReducer(reducer, null, getDefaultState);

  return {state, dispatch};
}
