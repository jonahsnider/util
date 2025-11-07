import { expect, it } from 'vitest';
import { concatIterables } from './concat-iterables.js';

it('concatenates iterables', () => {
	expect([...concatIterables([])]).toStrictEqual([]);
	expect([...concatIterables([1])]).toStrictEqual([1]);
	expect([...concatIterables([1], [2])]).toStrictEqual([1, 2]);
});
