import {isSorted, sortObject} from '.';
import {ascending} from './compare';

describe(sortObject.name, () => {
	it('sorts', () => {
		const object = {a: 3, c: 1, b: 2};

		const sorted = sortObject(object, (a, b) => a - b);

		expect(sorted).toStrictEqual(Object.entries({c: 1, b: 2, a: 3}));
	});
});

describe(isSorted.name, () => {
	it('works with empty arrays', () => {
		expect(isSorted([], () => 1)).toBe(true);
	});

	it('works with sorted arrays', () => {
		expect(isSorted([1, 1, 2, 3, 3], ascending)).toBe(true);
	});

	it('works with unsorted arrays', () => {
		expect(isSorted([3, 3, 2, 1, 1], ascending)).toBe(false);
	});
});
