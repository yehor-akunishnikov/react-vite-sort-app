import {ReactElement, useContext} from 'react';

import {StoreContext, StoreDispatchContext} from '../../store/store.ts';
import {Button} from '../../common/components/Button.tsx';
import {SortType} from '../../store/models.ts';
import {ControlClasses} from '../../models';

function getClasses(option: SortType, currenOption: SortType | null): string {
  const classesMap: ControlClasses = {
    active: 'bg-indigo-300 hover:bg-indigo-200',
    inactive: 'hover:bg-indigo-300'
  };

  return option === currenOption ? classesMap.active : classesMap.inactive;
}

export function Sort(): ReactElement {
  const dispatch = useContext(StoreDispatchContext);
  const state = useContext(StoreContext);

  const sortOptionsList: SortType[] = ['age', 'name'];

  function onChange(sortOption: SortType, currentOption: SortType | null): void {
    dispatch({
      type: 'SetSort',
      payload: {
        sort: sortOption === currentOption ? null : sortOption
      }
    });
  }

  return(
    <div className="space-x-2">
      {sortOptionsList.map(sortOption => (
        <Button
          key={sortOption}
          className={getClasses(sortOption, state.processing.sort)}
          onClick={() => onChange(sortOption, state.processing.sort)}
        >
          Sort by {sortOption}
        </Button>
      ))}
    </div>
  );
}
