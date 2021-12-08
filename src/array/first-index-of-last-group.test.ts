import {firstIndexOfLastGroup} from './first-index-of-last-group';

it("gets the first index of the last group of iterables that don't start with the value", () => {
	expect(firstIndexOfLastGroup([1, 2, 3], 5)).toBe(-1);
});

it('gets the last index of the last group of iterables', () => {
	expect(firstIndexOfLastGroup([1, 2, 3], 3)).toBe(2);

	expect(firstIndexOfLastGroup([1, 1, 1, 2, 2, 2, 3, 3, 3], 3)).toBe(6);

	expect(firstIndexOfLastGroup([1, 1, 2, 2, 1, 1], 1)).toBe(4);
});
