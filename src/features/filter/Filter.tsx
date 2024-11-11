import {ReactElement, useContext} from 'react';

import {StoreContext, StoreDispatchContext} from '../../store/store.ts';
import {ControlClasses, FavoriteColor} from '../../models';
import {Button} from '../../common/components/Button.tsx';

function getClasses(option: FavoriteColor, currenOption: FavoriteColor | null): string {
  const classesMap: Record<FavoriteColor, ControlClasses> = {
    red: {active: 'bg-red-300 hover:bg-red-200', inactive: 'hover:bg-red-300'},
    blue: {active: 'bg-blue-300 hover:bg-blue-200', inactive: 'hover:bg-blue-300'},
    orange: {active: 'bg-orange-300 hover:bg-orange-200', inactive: 'hover:bg-orange-300'},
    green: {active: 'bg-green-300 hover:bg-green-200', inactive: 'hover:bg-green-300'}
  };

  return option === currenOption ? classesMap[option].active : classesMap[option].inactive;
}

export function Filter(): ReactElement {
  const dispatch = useContext(StoreDispatchContext);
  const state = useContext(StoreContext);

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
          className={getClasses(filterOption, state.processing.filter)}
          onClick={() => onChange(filterOption, state.processing.filter)}
        >
          {filterOption[0].toUpperCase() + filterOption.slice(1)}
        </Button>
      ))}
    </div>
  );
}
