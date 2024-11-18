import {render, screen} from '@testing-library/react';
import {describe, expect, it} from 'vitest';
import {Sort} from './Sort.tsx';

describe('Sort component test', () => {
    it('should render 2 buttons', () => {
        render(<Sort currentOption={null} setSortBy={() => {}}/>);
        const sortBtns = screen.getAllByTestId('sortBtn');
        expect(sortBtns.length).toBe(2);
    });
    it('should set inactive class for both buttons', () => {
        render(<Sort currentOption={null} setSortBy={() => {}}/>);
        const sortBtns = screen.getAllByTestId('sortBtn');
        sortBtns.forEach((btn) => {
            expect(btn.className).toBe('hover:bg-indigo-300 px-3 border border-black rounded');
        })
    });
    it('should set active class based on parameter', () => {
        render(<Sort currentOption={'age'} setSortBy={() => {}}/>);
        const sortBtns = screen.getAllByTestId('sortBtn');
        expect(sortBtns[0].className).toBe('bg-indigo-300 hover:bg-indigo-200 px-3 border border-black rounded');
        expect(sortBtns[1].className).toBe('hover:bg-indigo-300 px-3 border border-black rounded');
    });
});