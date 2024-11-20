import {beforeEach, describe, expect, test} from "vitest";
import {UseUsersStateOutput, useUsersStore} from "./useUsersStore.ts";
import {renderHook, RenderHookResult} from "@testing-library/react";

describe('useGlobalUsersStore hook test', () => {
    let hookOutput: RenderHookResult<UseUsersStateOutput, undefined>;

    beforeEach(() => {
        hookOutput = renderHook(() => useUsersStore());
    });

    test('should set defaultUsers to currentUsers after init', () => {
        const {currentUsers, defaultUsers} = hookOutput.result.current;

        expect(currentUsers).toEqual(defaultUsers);
    });


});