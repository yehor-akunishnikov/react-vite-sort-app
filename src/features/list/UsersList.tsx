import {ReactElement} from 'react';

import {UsersListItem} from './UsersListItem.tsx';
import {User} from '../../models';

type UsersListProps = {
  users: User[];
};

export function UsersList({users}: UsersListProps): ReactElement {
  return (
    <ul className="users-list p-2 space-y-2 border border-black rounded">
      {
        users.slice(0, 10).map(user => (
          <UsersListItem
            key={user.name + user.age}
            user={user}
          />
        ))
      }
    </ul>
  );
}
