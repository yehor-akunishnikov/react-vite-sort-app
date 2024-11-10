import {useEffect, useState} from 'react';

import {FavoriteColor, SortType, User} from '../models';
import {applyFilters} from '../common/utils/utils.ts';

export function useStore() {
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

    if (pagesTotal !== newPagesTotal) {
      setPagesTotal(newPagesTotal);
      setCurrentPage(0);
    }

    setUsers(newUsersList);
  }, [defaultUsers, sort, filter, search, currentPage, pagesTotal]);

  return {
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
  };
}