import {FavoriteColor} from '../models';

export type SortType = 'age' | 'name';

export type ProcessingState = {
  sort: SortType | null;
  filter: FavoriteColor | null;
  currentPage: number;
  itemsPerPage: number;
  search: string;
};
