import { expect, it } from 'vitest';
import { Sort } from '../index.js';

it('sorts', () => {
	const array = [2, 3, 1, 3];

	array.sort(Sort.ascending);

	expect(array).toStrictEqual([1, 2, 3, 3]);
});

it('sorts bigints', () => {
	const array = [2n, 3n, 1n, 3n];

	array.sort(Sort.ascending);

	expect(array).toStrictEqual([1n, 2n, 3n, 3n]);
});

it('sorts Dates', () => {
	Sort.ascending(new Date(), new Date());
});

it('sorts with predicate', () => {
	const array = [{ value: 2 }, { value: 3 }, { value: 1 }, { value: 3 }];

	array.sort(Sort.ascending((x) => x.value));

	expect(array).toStrictEqual([{ value: 1 }, { value: 2 }, { value: 3 }, { value: 3 }]);
});
