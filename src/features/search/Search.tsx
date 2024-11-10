import {ReactElement} from 'react';

import {ControlProps} from '../../models';

type SearchProps = ControlProps<string>;

export function Search({currentOption, onChange}: SearchProps): ReactElement {
  return (
    <input
      defaultValue={currentOption}
      className="w-full py-1 px-3 border border-black rounded"
      placeholder="Search..."
      type="text"
      onInput={(e) => onChange((e.target as HTMLInputElement).value)}
    />
  );
}
