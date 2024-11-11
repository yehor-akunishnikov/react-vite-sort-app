import {ReactElement} from 'react';

import {Button} from '../../common/components/Button.tsx';
import {ControlClasses, ControlProps} from '../../models';
import {SortType} from '../../store/models.ts';

type SortProps = ControlProps<SortType | null>;

function getClasses(option: SortType, currenOption: SortType | null): string {
  const classesMap: ControlClasses = {
    active: 'bg-indigo-300 hover:bg-indigo-200',
    inactive: 'hover:bg-indigo-300'
  };

  return option === currenOption ? classesMap.active : classesMap.inactive;
}

export function Sort({currentOption, dispatch}: SortProps): ReactElement {
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
          className={getClasses(sortOption, currentOption)}
          onClick={() => onChange(sortOption, currentOption)}
        >
          Sort by {sortOption}
        </Button>
      ))}
    </div>
  );
}
