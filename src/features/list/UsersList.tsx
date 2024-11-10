import {ReactElement} from 'react';

import {UsersListItem} from './UsersListItem.tsx';
import {User} from '../../models';

import './UsersList.css';

type UsersListProps = {
  users: User[];
};

export function UsersList({users}: UsersListProps): ReactElement {
  return (
    <ul className="users-list p-2 space-y-2 border border-black rounded">
      {
        users.map(user => (
          <UsersListItem
            key={user.name + user.age}
            user={user}
          />
        ))
      }
    </ul>
  );
}
