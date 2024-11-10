export type FavoriteColor = 'red' | 'blue' | 'orange' | 'green';
export type SortType = 'age' | 'name';

export type User = {
  name: string;
  age: number;
  favoriteColor: FavoriteColor;
};

export type PaginationState = {
  pagesTotal?: number;
  currentPage: number;
  itemsPerPage: number;
};

export type ProcessingState = {
  sort: SortType | null;
  filter: FavoriteColor | null;
  pagination: PaginationState;
  search: string;
};

export type Controls = {
  search: HTMLInputElement;
  sortByAgeBtn: HTMLButtonElement;
  sortByNameBtn: HTMLButtonElement;
  colorButtons: NodeListOf<HTMLButtonElement>;
};

export type ControlProps<T> = {
  currentOption: T;
};

export type ControlClasses = {
  active: string;
  inactive: string;
};
