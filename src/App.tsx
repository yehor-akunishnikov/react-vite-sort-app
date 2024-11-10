import {ReactElement, useEffect, useState} from 'react';

import {Pagination} from './features/pagination/Pagination.tsx';
import {UsersList} from './features/list/UsersList.tsx';
import {Search} from './features/search/Search.tsx';
import {Filter} from './features/filter/Filter.tsx';
import {Sort} from './features/sort/Sort.tsx';
import {User} from './models';

import './App.css';

function App(): ReactElement {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('src/assets/users.json')
      .then((res) => res.json())
      .then(users => setUsers(users))
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="w-full max-w-screen-md p-4 space-y-4">
        <div>
          <Search currentOption={''}/>
        </div>

        <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
          <Sort currentOption={null}/>
          <Filter currentOption={null}/>
        </div>

        <div>
          <UsersList users={users}/>
        </div>

        <Pagination currentOption={0} count={10}/>
      </div>
    </div>
  );
}

export default App;
