import { expect, it } from 'vitest';
import { replace } from './replace.js';

it('replaces elements from an array', () => {
	const array = [1, 2, 3];

	expect(replace(array, 1, 2)).toBe(0);
	expect(array).toStrictEqual([2, 2, 3]);

	expect(replace(array, 1, 2)).toBe(-1);
	expect(array).toStrictEqual([2, 2, 3]);
});

it('works with empty arrays', () => {
	const array: never[] = [];

	expect(replace<number>(array, 1, 2)).toBe(-1);
	expect(array).toStrictEqual([]);
});

it("works when element isn't found", () => {
	const array = [1, 2, 3];

	expect(replace(array, 4, 2)).toBe(-1);
	expect(array).toStrictEqual([1, 2, 3]);
});
