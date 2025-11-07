import { expect, it } from 'vitest';
import { duplicates } from './duplicates.js';

it('returns duplicate elements', () => {
	expect(duplicates([1, 2, 2, 2, 3])).toStrictEqual(new Set([2]));
});

it('returns empty when there are no duplicates', () => {
	expect(duplicates([1, 2, 3])).toStrictEqual(new Set([]));
	expect(duplicates([])).toStrictEqual(new Set([]));
});
