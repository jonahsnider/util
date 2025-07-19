import { pullAll } from './pull-all.js';

it('pulls all elements from an array', () => {
	const array = [1, 2, 1, 2, 2, 3, 2, 3];

	expect(pullAll(array, 2)).toStrictEqual([2, 2, 2, 2]);
	expect(array).toStrictEqual([1, 1, 3, 3]);

	expect(pullAll(array, 2)).toStrictEqual([]);
	expect(array).toStrictEqual([1, 1, 3, 3]);
});

it('works with empty arrays', () => {
	const array: never[] = [];

	expect(pullAll(array, 2)).toStrictEqual([]);
	expect(array).toStrictEqual([]);
});

it("works when element isn't found", () => {
	const array = [1, 2, 3];

	expect(pullAll(array, 4)).toStrictEqual([]);
	expect(array).toStrictEqual([1, 2, 3]);
});
