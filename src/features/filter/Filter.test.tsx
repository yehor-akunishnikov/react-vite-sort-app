import {afterEach, describe, expect, it, vi} from "vitest";
import {fireEvent, render, screen} from "@testing-library/react";
import {Filter} from "./Filter.tsx";

describe('Filter component test', () => {
    afterEach(vi.restoreAllMocks);

    it('should return proper class names for INACTIVE buttons', () => {
        render(<Filter currentOption={null} setFilter={() => {}} />)

        const buttons = screen.getAllByTestId('filterButton');

        expect(buttons[0].className).toBe('hover:bg-red-300 px-3 border border-black rounded');
        expect(buttons[1].className).toBe('hover:bg-blue-300 px-3 border border-black rounded');
        expect(buttons[2].className).toBe('hover:bg-orange-300 px-3 border border-black rounded');
        expect(buttons[3].className).toBe('hover:bg-green-300 px-3 border border-black rounded');
    });

    it('should return proper class name for RED button if active', () => {
        render(<Filter currentOption={'red'} setFilter={() => {}} />)

        const buttons = screen.getAllByTestId('filterButton');

        fireEvent.click(buttons[0]);

        expect(buttons[0].className).toBe('bg-red-300 hover:bg-red-200 px-3 border border-black rounded');

    });

    it('should return proper class names for BLUE button if active', () => {
        render(<Filter currentOption={"blue"} setFilter={() => {}} />)

        const buttons = screen.getAllByTestId('filterButton');

        fireEvent.click(buttons[1]);

        expect(buttons[1].className).toBe('bg-blue-300 hover:bg-blue-200 px-3 border border-black rounded');

    });
    it('should return proper class names for ORANGE button if active', () => {
        render(<Filter currentOption={'orange'} setFilter={() => {}} />)

        const buttons = screen.getAllByTestId('filterButton');

        fireEvent.click(buttons[2]);

        expect(buttons[2].className).toBe('bg-orange-300 hover:bg-orange-200 px-3 border border-black rounded');
    });
    it('should return proper class names for GREEN button if active', () => {
        render(<Filter currentOption={'green'} setFilter={() => {}} />)

        const buttons = screen.getAllByTestId('filterButton');

        fireEvent.click(buttons[3]);

        expect(buttons[3].className).toBe('bg-green-300 hover:bg-green-200 px-3 border border-black rounded');
    });
    it('should set ORANGE in state when clicked', () => {
        const setFilterSpy = vi.fn();

        render(<Filter currentOption={null} setFilter={setFilterSpy} />);

        const buttons = screen.getAllByTestId('filterButton');

        fireEvent.click(buttons[2]);

        expect(setFilterSpy).toHaveBeenCalledWith('orange');
    });
});
