import {ReactElement} from 'react';

import {Button} from '../../common/components/Button.tsx';
import {ControlClasses, ControlProps, FavoriteColor} from '../../models';

type FilterProps = ControlProps<FavoriteColor | null>;

function getClasses(option: FavoriteColor, currenOption: FavoriteColor | null): string {
  const classesMap: Record<FavoriteColor, ControlClasses> = {
    red: {active: 'bg-red-300 hover:bg-red-200', inactive: 'hover:bg-red-300'},
    blue: {active: 'bg-blue-300 hover:bg-blue-200', inactive: 'hover:bg-blue-300'},
    orange: {active: 'bg-orange-300 hover:bg-orange-200', inactive: 'hover:bg-orange-300'},
    green: {active: 'bg-green-300 hover:bg-green-200', inactive: 'hover:bg-green-300'}
  };

  return option === currenOption ? classesMap[option].active : classesMap[option].inactive;
}

export function Filter({currentOption, dispatch}: FilterProps): ReactElement {
  const filterOptionsList: FavoriteColor[] = ['red', 'blue', 'orange', 'green'];

  function onChange(filterOption: FavoriteColor, currentOption: FavoriteColor | null): void {
    dispatch({
      type: 'SetFilter',
      payload: {
        filter: currentOption === filterOption ? null : filterOption
      }
    });
  }

  return(
    <div className="space-x-2">
      {filterOptionsList.map(filterOption => (
        <Button
          key={filterOption}
          className={getClasses(filterOption, currentOption)}
          onClick={() => onChange(filterOption, currentOption)}
        >
          {filterOption[0].toUpperCase() + filterOption.slice(1)}
        </Button>
      ))}
    </div>
  );
}
