import {ReactElement} from 'react';

import {Button} from '../../common/components/Button.tsx';
import {ControlClasses, ControlProps, FavoriteColor} from '../../models';

type FilterProps = ControlProps<FavoriteColor | null> & {setFilter: (color: FavoriteColor | null) => void};

function getClasses(option: FavoriteColor, currentOption: FavoriteColor | null): string {
  const classesMap: Record<FavoriteColor, ControlClasses> = {
    red: {active: 'bg-red-300 hover:bg-red-200', inactive: 'hover:bg-red-300'},
    blue: {active: 'bg-blue-300 hover:bg-blue-200', inactive: 'hover:bg-blue-300'},
    orange: {active: 'bg-orange-300 hover:bg-orange-200', inactive: 'hover:bg-orange-300'},
    green: {active: 'bg-green-300 hover:bg-green-200', inactive: 'hover:bg-green-300'}
  };

  return option === currentOption ? classesMap[option].active : classesMap[option].inactive;
}

export function Filter({currentOption, setFilter}: FilterProps): ReactElement {
  const colorList: FavoriteColor[] = ['red', 'blue', 'orange', 'green'];

  function onFilterClick(color: FavoriteColor | null) {
    if (color === currentOption) {
      setFilter(null);
    } else {
      setFilter(color);
    }
  }

  return(
    <div className="space-x-2">
      {colorList.map(color => (
        <Button
          key={color}
          className={getClasses(color, currentOption)}
          onClick={() => onFilterClick(color)}
          data-testid={'filterButton'}
        >
          {color[0].toUpperCase() + color.slice(1)}
        </Button>
      ))}
    </div>
  );
}
