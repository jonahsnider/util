import { lastIndexOfFirstGroup } from './last-index-of-first-group.js';

it("gets the last index of starts with of iterables that don't start with the value", () => {
	expect(lastIndexOfFirstGroup([1, 2, 3], 5)).toBe(-1);
});

it('gets the last index of starts with of iterables', () => {
	expect(lastIndexOfFirstGroup([1, 2, 3], 1)).toBe(0);

	expect(lastIndexOfFirstGroup([1, 1, 1, 2, 2, 2, 3, 3, 3], 1)).toBe(2);

	expect(lastIndexOfFirstGroup([1, 1, 2, 2, 1, 1], 1)).toBe(1);
});
