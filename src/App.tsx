import {ReactElement} from 'react';

import {Pagination} from './features/pagination/Pagination.tsx';
import {UsersList} from './features/list/UsersList.tsx';
import {Search} from './features/search/Search.tsx';
import {Filter} from './features/filter/Filter.tsx';
import {Sort} from './features/sort/Sort.tsx';

import {useStore} from './hooks/useStore.ts';

import './App.css';

function App(): ReactElement {
  const {
    users,
    sort,
    filter,
    search,
    currentPage,
    pagesTotal,
    setSort,
    setFilter,
    setSearch,
    setCurrentPage
  } = useStore();

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
