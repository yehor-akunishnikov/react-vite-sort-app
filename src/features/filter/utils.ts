import {FavoriteColor, User} from "../../models";

export function filterArray(arr: User[], filter: FavoriteColor | null): User[] {
    if (filter) {
        return arr.filter((user) => user.favoriteColor === filter);
    } else {
        return arr;
    }
}