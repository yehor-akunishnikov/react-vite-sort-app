import {ReactElement, useContext, useEffect} from 'react';

import {Pagination} from './features/pagination/Pagination.tsx';
import {UsersList} from './features/list/UsersList.tsx';
import {Search} from './features/search/Search.tsx';
import {Filter} from './features/filter/Filter.tsx';
import {Sort} from './features/sort/Sort.tsx';

import {StoreDispatchContext} from './store/store.ts';
import {User} from './models';

import './App.css';

function App(): ReactElement {
  const dispatch = useContext(StoreDispatchContext);

  useEffect(() => {
    fetch('src/assets/users.json')
      .then((res) => res.json())
      .then((loadedUsers: User[]) => dispatch({
        type: 'LoadUsers',
        payload: {users: loadedUsers}
      }));
  });

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="w-full max-w-screen-md p-4 space-y-4">
        <div>
          <Search />
        </div>

        <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
          <Sort />
          <Filter />
        </div>

        <UsersList />

        <Pagination />
      </div>
    </div>
  );
}

export default App;
