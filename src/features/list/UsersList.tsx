import {ReactElement, useContext} from 'react';

import {StoreContext} from '../../store/store.ts';
import {UsersListItem} from './UsersListItem.tsx';

import './UsersList.css';

export function UsersList(): ReactElement {
  const state = useContext(StoreContext);

  return (
    <ul className="users-list p-2 space-y-2 border border-black rounded">
      {
        state.currentUsers.map(user => (
          <UsersListItem
            key={user.name + user.age}
            user={user}
          />
        ))
      }
    </ul>
  );
}
