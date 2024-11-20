import {FormEventHandler, ReactElement} from 'react';

import {ControlProps} from '../../models';

type SearchProps = ControlProps<string> & {setSearch: (search: string) => void};

export function Search({currentOption, setSearch}: SearchProps): ReactElement {
  const onSearchInputChanges: FormEventHandler<HTMLInputElement>  = (event) => {
    const eventTarget = event.target as HTMLInputElement;
    setSearch(eventTarget.value);
  }

  return (
    <input
      defaultValue={currentOption}
      className="w-full py-1 px-3 border border-black rounded"
      placeholder="Search..."
      type="text"
      onInput={onSearchInputChanges}
      data-testid={'searchInput'}
    />
  );
}
