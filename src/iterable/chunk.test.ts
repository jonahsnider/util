import { expect, it } from 'vitest';
import { chunk } from './chunk.js';

it('chunks arrays', () => {
	const array = [1, 2, 3, 4, 5, 6];

	expect(chunk(array, 2)).toStrictEqual([
		[1, 2],
		[3, 4],
		[5, 6],
	]);

	expect(chunk(array, 5)).toStrictEqual([[1, 2, 3, 4, 5], [6]]);

	expect(chunk(array, 100)).toStrictEqual([array]);

	expect(chunk([1, 2, 3], 3)).toStrictEqual([[1, 2, 3]]);
});

it('chunks iterables', () => {
	const iterable = new Set([1, 2, 3, 4, 5, 6]);

	expect([...chunk(iterable, 2)]).toStrictEqual([
		[1, 2],
		[3, 4],
		[5, 6],
	]);

	expect([...chunk(iterable, 5)]).toStrictEqual([[1, 2, 3, 4, 5], [6]]);

	expect([...chunk(iterable, 100)]).toStrictEqual([[...iterable]]);

	expect([...chunk(new Set([1, 2, 3]), 3)]).toStrictEqual([[1, 2, 3]]);
});
