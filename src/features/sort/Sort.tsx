import {ReactElement} from 'react';

import {Button} from '../../common/components/Button.tsx';
import {ControlClasses, ControlProps, SortType} from '../../models';

type SortProps = ControlProps<SortType | null> & {setSortBy: (sortBy: SortType | null) => void};

function getClasses(option: SortType, currentOption: SortType | null): string {
  const classesMap: ControlClasses = {
    active: 'bg-indigo-300 hover:bg-indigo-200',
    inactive: 'hover:bg-indigo-300'
  };

  return option === currentOption ? classesMap.active : classesMap.inactive;
}

export function Sort({currentOption, setSortBy}: SortProps): ReactElement {
  const sortOptionsList: SortType[] = ['age', 'name'];

  function onSortClick(sortBy: SortType | null): void {
    if (sortBy === currentOption) {
      setSortBy(null);
    } else {
      setSortBy(sortBy);
    }
  }

  return(
    <div className="space-x-2">
      {sortOptionsList.map((sortOption) => (
        <Button
          key={sortOption}
          className={getClasses(sortOption, currentOption)}
          onClick={() => onSortClick(sortOption)}
          data-testid = {'sortBtn'}
        >
          Sort by {sortOption}
        </Button>
      ))}
    </div>
  );
}
