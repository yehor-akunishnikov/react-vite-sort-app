import {Dispatch} from 'react';

import {StoreAction} from '../store/models.ts';

export type FavoriteColor = 'red' | 'blue' | 'orange' | 'green';

export type User = {
  name: string;
  age: number;
  favoriteColor: FavoriteColor;
};

export type ControlProps<T> = {
  currentOption: T;
  dispatch: Dispatch<StoreAction>;
};

export type ControlClasses = {
  active: string;
  inactive: string;
};
