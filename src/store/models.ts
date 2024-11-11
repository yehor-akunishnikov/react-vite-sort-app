import {FavoriteColor, User} from '../models';

export type SortType = 'age' | 'name';

export type BaseAction<T, P> = {
  type: T;
  payload: P;
};

export type ProcessingState = {
  sort: SortType | null;
  filter: FavoriteColor | null;
  currentPage: number;
  itemsPerPage: number;
  pagesTotal: number;
  search: string;
};

export type AppState = {
  defaultUsers: User[];
  currentUsers: User[];
  processing: ProcessingState;
};

export type LoadUsersAction = BaseAction<'LoadUsers', {users: User[]}>;
export type SetSearchAction = BaseAction<'SetSearch', {search: string}>;
export type SetFilterAction = BaseAction<'SetFilter', {filter: FavoriteColor | null}>;
export type SetSortAction = BaseAction<'SetSort', {sort: SortType | null}>;
export type SetCurrentPageAction = BaseAction<'SetCurrentPage', {currentPage: number}>;

export type StoreAction = LoadUsersAction |
  SetSearchAction |
  SetFilterAction |
  SetSortAction |
  SetCurrentPageAction;
