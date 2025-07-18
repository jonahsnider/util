import { max } from './max.js';

it('selects the largest number', () => {
	expect([2, 3, 1].reduce(max)).toBe(3);
});

it('selects the largest value', () => {
	expect([1, new Date(2), false].reduce(max)).toStrictEqual(new Date(2));
});
