import {User} from "../../models";

export function changePage(arr: User[], pageNumber: number): User[] {
    const from: number = pageNumber * 10;
    const to: number = (pageNumber + 1) * 10;

    return arr.slice(from, to);
}