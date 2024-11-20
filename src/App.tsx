import {ReactElement} from 'react';

import {Pagination} from './features/pagination/Pagination.tsx';
import {UsersList} from './features/list/UsersList.tsx';
import {Search} from './features/search/Search.tsx';
import {Filter} from './features/filter/Filter.tsx';
import {Sort} from './features/sort/Sort.tsx';

import './App.css';
import {useUsersStore} from "./hooks/useUsersStore.ts";

function App(): ReactElement {
  const {
    currentUsers,
    filter,
    sortBy,
    search,
    paginationState,
    currentPagesCount,
    setFilter,
    setSortBy,
    setSearch,
    setPaginationState,
  } = useUsersStore();

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="w-full max-w-screen-md p-4 space-y-4">
        <div>
          <Search currentOption={search} setSearch={(value) => {
            setSearch(value);
            setPaginationState(0);
          }}/>
        </div>

        <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
          <Sort currentOption={sortBy} setSortBy={setSortBy}/>
          <Filter currentOption={filter} setFilter={(value) => {
            setFilter(value);
            setPaginationState(0);
          }}/>
        </div>

        <div>
          <UsersList users={currentUsers}/>
        </div>

        <Pagination currentOption={paginationState}
                    currentPagesCount={currentPagesCount}
                    setPaginationState={setPaginationState}/>
      </div>
    </div>
  );
}

export default App;
