import {User} from "../../models";

export function searchArray(arr: User[], word: string): User[] {
    return arr.filter((user) => user.name.toLowerCase().startsWith(word.trim().toLowerCase()));
}
