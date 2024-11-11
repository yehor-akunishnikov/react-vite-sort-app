import {FormEvent, ReactElement, useContext} from 'react';

import {StoreContext, StoreDispatchContext} from '../../store/store.ts';

export function Search(): ReactElement {
  const dispatch = useContext(StoreDispatchContext);
  const state = useContext(StoreContext);

  function onInput(e: FormEvent): void {
    dispatch({
      type: 'SetSearch',
      payload: {
        search: (e.target as HTMLInputElement).value
      }
    });
  }

  return (
    <input
      defaultValue={state.processing.search}
      className="w-full py-1 px-3 border border-black rounded"
      placeholder="Search..."
      type="text"
      onInput={onInput}
    />
  );
}
