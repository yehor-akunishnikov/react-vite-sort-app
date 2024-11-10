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

export function Filter({currentOption}: FilterProps): ReactElement {
  return(
    <div className="space-x-2">
      <Button className={getClasses('red', currentOption)}>Red</Button>
      <Button className={getClasses('blue', currentOption)}>Blue</Button>
      <Button className={getClasses('orange', currentOption)}>Orange</Button>
      <Button className={getClasses('green', currentOption)}>Green</Button>
    </div>
  );
}
