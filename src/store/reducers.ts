import {Reducer} from 'react';

import {countPagesTotal, filterUsers, searchUsers, sliceUsers, sortUsers} from './utils.ts';
import {AppState, StoreAction} from './models.ts';

export const reducer: Reducer<AppState, StoreAction> = (prevState, {type, payload}) => {
  const newState: AppState = JSON.parse(JSON.stringify(prevState));

  newState.defaultUsers = type === 'LoadUsers' ? payload.users : prevState.defaultUsers;
  newState.currentUsers = JSON.parse(JSON.stringify(newState.defaultUsers));
  newState.processing = Object.assign(newState.processing, payload);

  if (['SetSort', 'SetFilter', 'SetSearch'].includes(type)) {
    newState.processing.currentPage = 0;
  }

  newState.currentUsers = sortUsers(newState.currentUsers, newState.processing.sort);
  newState.currentUsers = filterUsers(newState.currentUsers, newState.processing.filter);
  newState.currentUsers = searchUsers(newState.currentUsers, newState.processing.search);

  newState.processing.pagesTotal = countPagesTotal(newState.currentUsers, newState.processing.itemsPerPage);
  newState.currentUsers = sliceUsers(
    newState.currentUsers,
    newState.processing.currentPage,
    newState.processing.itemsPerPage
  );

  return newState;
};

export const getDefaultState = (): AppState => {
  return {
    processing: {
      sort: null,
      filter: null,
      search: '',
      currentPage: 0,
      pagesTotal: 0,
      itemsPerPage: 10
    },
    defaultUsers: [],
    currentUsers: []
  }
};
