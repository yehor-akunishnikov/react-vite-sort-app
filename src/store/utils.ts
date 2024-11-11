import {FavoriteColor, User} from '../models';
import {SortType} from './models.ts';

export const sortUsers = (usersList: User[], sortType: SortType | null): User[] => {
  switch (sortType) {
    case 'age': {
      return usersList.sort((a, b) => a.age - b.age);
    }
    case 'name': {
      return usersList.sort((a, b) => a.name > b.name ? 1 : -1);
    }
    default: return usersList;
  }
};

export const searchUsers = (usersList: User[], searchTerm: string): User[] => {
  return searchTerm ? usersList.filter(user => user.name.toLowerCase().startsWith(searchTerm)) : usersList;
}

export const filterUsers = (usersList: User[], filter: FavoriteColor | null): User[] => {
  return filter ? usersList.filter(user => user.favoriteColor === filter) : usersList;
};

export const countPagesTotal = (usersList: User[], itemsPerPage: number): number => {
  return Math.ceil(usersList.length / itemsPerPage);
};

export const sliceUsers = (usersList: User[], currentPage: number, itemsPerPage: number): User[] => {
  const from = currentPage * itemsPerPage;
  const to = (currentPage + 1) * itemsPerPage;

  return usersList.slice(from, to);
};
