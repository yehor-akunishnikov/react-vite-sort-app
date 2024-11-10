import {FavoriteColor, ProcessingState, SortType, User} from '../../models';

const sortUsers = (usersList: User[], sortType: SortType): void => {
  switch (sortType) {
    case 'age': {
      usersList.sort((a, b) => a.age - b.age);
      break;
    }
    case 'name': {
      usersList.sort((a, b) => a.name > b.name ? 1 : -1);
      break;
    }
  }
};

const searchUsers = (usersList: User[], searchTerm: string): User[] => {
  return usersList.filter(user => user.name.toLowerCase().startsWith(searchTerm));
}

const filterUsers = (usersList: User[], filter: FavoriteColor): User[] => {
  return usersList.filter(user => user.favoriteColor === filter);
};

const countPagesTotal = (usersList: User[], itemsPerPage: number): number => {
  return Math.ceil(usersList.length / itemsPerPage);
};

const sliceUsers = (usersList: User[], currentPage: number, itemsPerPage: number): User[] => {
  const from = currentPage * itemsPerPage;
  const to = (currentPage + 1) * itemsPerPage;

  return usersList.slice(from, to);
};

export const applyProcessing = (
  usersList: User[],
  processingState: ProcessingState
): {
  newUsersList: User[],
  newPagesTotal: number
} => {
  let usersListCopy: User[] = JSON.parse(JSON.stringify(usersList));

  if (processingState.sort) {
    sortUsers(usersListCopy, processingState.sort);
  }

  if (processingState.search) {
    usersListCopy = searchUsers(usersListCopy, processingState.search);
  }

  if (processingState.filter) {
    usersListCopy = filterUsers(usersListCopy, processingState.filter);
  }

  return {
    newUsersList: sliceUsers(
      usersListCopy,
      processingState.currentPage,
      processingState.itemsPerPage
    ),
    newPagesTotal: countPagesTotal(
      usersListCopy,
      processingState.itemsPerPage
    )
  }
};
