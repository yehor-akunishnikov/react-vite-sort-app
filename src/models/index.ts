export type FavoriteColor = 'red' | 'blue' | 'orange' | 'green';

export type User = {
  name: string;
  age: number;
  favoriteColor: FavoriteColor;
};

export type ControlProps<T> = {
  currentOption: T;
  onChange: (value: T) => void
};

export type ControlClasses = {
  active: string;
  inactive: string;
};
