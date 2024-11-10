import {ReactElement} from 'react';

import {FavoriteColor, User} from '../../models';

type UserItemProps = {
  user: User;
};

function getFavoriteColorClasses(favoriteColor: FavoriteColor): string {
  const classesMap = {
    red: 'bg-red-200',
    blue: 'bg-blue-200',
    orange: 'bg-orange-200',
    green: 'bg-green-200'
  };

  return [
    'px-2 border border-black rounded',
    classesMap[favoriteColor],
  ].join(' ');
}

export function UsersListItem({user}: UserItemProps): ReactElement {
  return (
    <li className="flex justify-between py-2 px-3 border border-black rounded">
      <div className="flex items-center gap-x-1">
        <span>{user.name}</span>
        <span>{user.age}</span>
      </div>

      <span className={getFavoriteColorClasses(user.favoriteColor)}>
        {user.favoriteColor}
      </span>
    </li>
  );
}
