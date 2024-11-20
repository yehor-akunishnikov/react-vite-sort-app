import {useEffect, useState} from "react";
import {FavoriteColor, SortType, User} from "../models";
import {changePage} from "../features/pagination/utils.ts";
import {sortArray} from "../features/sort/utils.ts";
import {filterArray} from "../features/filter/utils.ts";
import {searchArray} from "../features/search/utils.ts";

export const useUsersStore = () => {
    const [defaultUsers, setDefaultUsers] = useState<User[]>([]);
    const [currentUsers, setCurrentUsers] = useState<User[]>([]);
    const [filter, setFilter] = useState<FavoriteColor | null>(null);
    const [sortBy, setSortBy] = useState<SortType | null>(null);
    const [search, setSearch] = useState<string>('');
    const [paginationState, setPaginationState] = useState<number>(0);
    const [currentPagesCount, setCurrentPagesCount] = useState<number>(0);


    // On initialization
    useEffect(() => {
        fetch('../../assets/users.json')
            .then((res) => res.json())
            .then(defaultUsers => {
                setDefaultUsers(defaultUsers);
                setCurrentPagesCount(Math.ceil(defaultUsers.length / 10));
                setCurrentUsers(changePage(defaultUsers, paginationState));
            })
    }, []);

    // Use effect for tracking states:
    useEffect(() => {
        let usersArrayCopy: User[] = [...defaultUsers];

        usersArrayCopy = sortArray(usersArrayCopy, sortBy);
        usersArrayCopy = filterArray(usersArrayCopy, filter);
        usersArrayCopy = searchArray(usersArrayCopy, search);
        setCurrentPagesCount(Math.ceil(usersArrayCopy.length / 10));
        usersArrayCopy = changePage(usersArrayCopy, paginationState);

        setCurrentUsers(usersArrayCopy);
    }, [filter, sortBy, search, paginationState]);

    return {
        defaultUsers,
        currentUsers,
        filter,
        sortBy,
        search,
        paginationState,
        currentPagesCount,
        setFilter,
        setSortBy,
        setSearch,
        setPaginationState,
    }
}

export type UseUsersStateOutput = ReturnType<typeof useUsersStore>;