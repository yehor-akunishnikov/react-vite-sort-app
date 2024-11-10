import {ReactElement, useEffect, useState} from 'react';

import {Pagination} from './features/pagination/Pagination.tsx';
import {UsersList} from './features/list/UsersList.tsx';
import {Search} from './features/search/Search.tsx';
import {Filter} from './features/filter/Filter.tsx';
import {Sort} from './features/sort/Sort.tsx';

import {FavoriteColor, SortType, User} from './models';
import {applyFilters} from './common/utils/utils.ts';

import './App.css';

function App(): ReactElement {
  const [defaultUsers, setDefaultUsers] = useState<User[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  const [sort, setSort] = useState<SortType | null>(null);
  const [filter, setFilter] = useState<FavoriteColor | null>(null);
  const [search, setSearch] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [pagesTotal, setPagesTotal] = useState<number | undefined>();

  useEffect(() => {
    fetch('src/assets/users.json')
      .then((res) => res.json())
      .then((loadedUsers: User[]) => setDefaultUsers(loadedUsers));
  }, []);

  useEffect(() => {
    const {newUsersList, newPagesTotal} = applyFilters(defaultUsers, {
      sort,
      filter,
      search,
      itemsPerPage: 10,
      currentPage
    });

    setPagesTotal(newPagesTotal);
    setUsers(newUsersList);
  }, [defaultUsers, sort, filter, search, currentPage]);

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="w-full max-w-screen-md p-4 space-y-4">
        <div>
          <Search
            currentOption={search}
            onChange={setSearch}
          />
        </div>

        <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
          <Sort
            currentOption={sort}
            onChange={setSort}
          />
          <Filter
            currentOption={filter}
            onChange={setFilter}
          />
        </div>

        <UsersList users={users}/>

        <Pagination
          currentOption={currentPage}
          count={pagesTotal}
          onChange={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default App;
