import {SortType, User} from "../../models";

export function sortArray(arr: User[], sortBy: SortType | null): User[] {
    if (sortBy === 'age') {
        return arr.sort((a, b) => {
                if (a.age > b.age) {
                    return 1;
                } else if (a.age < b.age) {
                    return -1;
                } else {
                    return 0;
                }
            }
        );
    } else if (sortBy === 'name') {
        return arr.sort((a, b) => {
            if (a.name > b.name) {
                return 1;
            } else if (a.name < b.name) {
                return -1;
            } else {
                return 0;
            }
        });
    } else {
        return arr;
    }
}