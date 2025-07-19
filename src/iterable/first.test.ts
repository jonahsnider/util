import { first } from './first.js';

it('returns first element if take is undefined', () => {
	expect(first([1, 2, 3])).toBe(1);
	expect(first([1, 2, 3], undefined)).toBe(1);
});

it('takes the specified number of items', () => {
	expect([...first([1, 2, 3], 0)]).toStrictEqual([]);
	expect([...first([1, 2, 3], 2)]).toStrictEqual([1, 2]);
});

it('allows array destructuring', () => {
	const [one, two] = first([1, 2, 3], 2);

	expect(one).toBe(1);
	expect(two).toBe(2);
});

it('allows handles small arrays and big takes', () => {
	expect([...first([1], 3)]).toStrictEqual([1]);
	expect([...first([], 3)]).toStrictEqual([]);
});

it('works with empty iterables', () => {
	expect(first([])).toBe(undefined);
});
