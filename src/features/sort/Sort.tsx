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

export function Sort({currentOption}: SortProps): ReactElement {
  return(
    <div className="space-x-2">
      <Button className={getClasses('name', currentOption)}>Sort by name</Button>
      <Button className={getClasses('age', currentOption)}>Sort by age</Button>
    </div>
  );
}
