import { expect, it } from 'vitest';
import { iteratorToIterable } from './iterator-to-iterable.js';
import { skip } from './skip.js';

it('skips the first elements of an iterable', () => {
	expect([...iteratorToIterable(skip([1, 2, 3, 4, 5], 2))]).toStrictEqual([3, 4, 5]);
});

it('does nothing when count is negative', () => {
	expect([...iteratorToIterable(skip([1, 2, 3, 4, 5], -2))]).toStrictEqual([1, 2, 3, 4, 5]);
});

it('does nothing when count is 0', () => {
	expect([...iteratorToIterable(skip([1, 2, 3, 4, 5], 0))]).toStrictEqual([1, 2, 3, 4, 5]);
});

it('returns an empty iterable when count is larger than the size of the iterable', () => {
	expect([...iteratorToIterable(skip([1, 2, 3, 4, 5], 100))]).toStrictEqual([]);
});
