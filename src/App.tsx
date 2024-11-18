import {ReactElement, useEffect, useState} from 'react';

import {Pagination} from './features/pagination/Pagination.tsx';
import {UsersList} from './features/list/UsersList.tsx';
import {Search} from './features/search/Search.tsx';
import {Filter} from './features/filter/Filter.tsx';
import {Sort} from './features/sort/Sort.tsx';
import {FavoriteColor, SortType, User} from './models';

import './App.css';
import {sortArray} from "./features/sort/utils.ts";
import {filterArray} from "./features/filter/utils.ts";
import {searchArray} from "./features/search/utils.ts";
import {changePage} from "./features/pagination/utils.ts";

function App(): ReactElement {
  // State of components
  const [defaultUsers, setDefaultUsers] = useState<User[]>([]);
  const [currentUsers, setCurrentUsers] = useState<User[]>([]);
  const [filter, setFilter] = useState<FavoriteColor | null>(null);
  const [sortBy, setSortBy] = useState<SortType | null>(null);
  const [search, setSearch] = useState<string>('');
  const [paginationState, setPaginationState] = useState<number>(0);
  const [currentPagesCount, setCurrentPagesCount] = useState<number>(0);


  // On initialization
  useEffect(() => {
    fetch('src/assets/users.json')
        .then((res) => res.json())
        .then(defaultUsers => {
          setDefaultUsers(defaultUsers);
          setCurrentPagesCount(Math.ceil(defaultUsers.length / 10));
          setCurrentUsers(changePage(defaultUsers, paginationState));
        })
  }, []);

  // Use effect for tracking states:
  useEffect(() => {
    let usersArrayCopy: User[] = [...defaultUsers];

    usersArrayCopy = sortArray(usersArrayCopy, sortBy);
    usersArrayCopy = filterArray(usersArrayCopy, filter);
    usersArrayCopy = searchArray(usersArrayCopy, search);
    setCurrentPagesCount(Math.ceil(usersArrayCopy.length / 10));
    usersArrayCopy = changePage(usersArrayCopy, paginationState);

    setCurrentUsers(usersArrayCopy);
  }, [filter, sortBy, search, paginationState]);

  // Sort feature:

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
