export type FavoriteColor = 'red' | 'blue' | 'orange' | 'green';
export type SortType = 'age' | 'name';

export type User = {
  name: string;
  age: number;
  favoriteColor: FavoriteColor;
};

export type ProcessingState = {
  sort: SortType;
  filter: FavoriteColor;
  currentPage: number;
  itemsPerPage: number;
  search: string;
};

export type ControlProps<T> = {
  currentOption: T;
};

export type ControlClasses = {
  active: string;
  inactive: string;
};
