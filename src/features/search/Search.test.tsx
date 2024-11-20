import {afterEach, describe, expect, it, vi} from 'vitest';
import {fireEvent, render, screen} from "@testing-library/react";
import {Search} from './Search.tsx';

describe('Search component test', () => {
    afterEach(() => {
        vi.restoreAllMocks();
    })

    it('should set default input value', () => {
        render(<Search currentOption={'some input'} setSearch={() => {}} />);

        const searchComponent = screen.getByTestId<HTMLInputElement>('searchInput');

        expect(searchComponent.value).toBe('some input');
    });

    it('should be called once with a proper input', () => {
        const setSearchSpy = vi.fn();

        render(<Search currentOption={''} setSearch={setSearchSpy} />);

        const searchComponent = screen.getByTestId('searchInput');

        fireEvent.input(searchComponent, {target: {value: 'lol'}});

        expect(setSearchSpy).toHaveBeenCalledTimes(1);
        expect(setSearchSpy).toHaveBeenCalledWith('lol');
    });
})