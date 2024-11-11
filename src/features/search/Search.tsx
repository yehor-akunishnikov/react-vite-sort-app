import {FormEvent, ReactElement} from 'react';

import {ControlProps} from '../../models';

type SearchProps = ControlProps<string>;

export function Search({currentOption, dispatch}: SearchProps): ReactElement {
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
      defaultValue={currentOption}
      className="w-full py-1 px-3 border border-black rounded"
      placeholder="Search..."
      type="text"
      onInput={onInput}
    />
  );
}
