import {ReactElement} from 'react';

import {Button} from '../../common/components/Button.tsx';
import {ControlClasses, ControlProps, SortType} from '../../models';

type SortProps = ControlProps<SortType | null>;

function getClasses(option: SortType, currenOption: SortType | null): string {
  const classesMap: ControlClasses = {
    active: 'bg-indigo-300 hover:bg-indigo-200',
    inactive: 'hover:bg-indigo-300'
  };

  return option === currenOption ? classesMap.active : classesMap.inactive;
}

export function Sort({currentOption, onChange}: SortProps): ReactElement {
  const sortOptionsList: SortType[] = ['age', 'name'];

  return(
    <div className="space-x-2">
      {sortOptionsList.map(sortOption => (
        <Button
          key={sortOption}
          className={getClasses(sortOption, currentOption)}
          onClick={() => onChange(sortOption === currentOption ? null : sortOption)}
        >
          Sort by {sortOption}
        </Button>
      ))}
    </div>
  );
}
