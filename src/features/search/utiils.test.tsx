import {describe, expect, it} from "vitest";
import {User} from "../../models";
import {searchArray} from "./utils.ts";


describe('Search utils test', () => {
    it('should return values which start with entered text', () => {

        const testArray: User[] = [
            {name: 'Android', age: 20, favoriteColor: 'red'},
            {name: 'Petro', age: 20, favoriteColor: 'blue'},
            {name: 'Ivan', age: 20, favoriteColor: 'orange'},
            {name: 'Anatolii', age: 20, favoriteColor: 'green'},
        ];

        const result = searchArray(testArray, 'an');

        expect(result).toEqual([{name: 'Android', age: 20, favoriteColor: 'red'}, {name: 'Anatolii', age: 20, favoriteColor: 'green'}]);
    });
})