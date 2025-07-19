import { overwrite } from './overwrite.js';

it('overwrites ranges in arrays', () => {
	const array = [1, 2, 3, 4, 5];

	overwrite(array, 1, [9, 8, 7]);

	expect(array).toEqual([1, 9, 8, 7, 5]);
});

it('appends elements when start index is greater than array length', () => {
	const array = [1, 2, 3, 4, 5];

	overwrite(array, 10, [9, 8, 7]);

	expect(array).toEqual([1, 2, 3, 4, 5, 9, 8, 7]);
});

it('prepends elements when start index is negative', () => {
	const array = [1, 2, 3, 4, 5];

	overwrite(array, -10, [9, 8, 7]);

	expect(array).toEqual([9, 8, 7, 1, 2, 3, 4, 5]);
});

it('does nothing when no replacement elements are provided', () => {
	const array = [1, 2, 3, 4, 5];

	overwrite(array, 1, []);

	expect(array).toEqual([1, 2, 3, 4, 5]);
});
