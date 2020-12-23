import {ascending, descending, sortObject} from '.';

describe('sortObject', () => {
	it('sorts', () => {
		const object = {a: 3, c: 1, b: 2};

		const sorted = sortObject(object, (a, b) => a - b);

		expect(Object.entries(sorted)).toEqual(Object.entries({c: 1, b: 2, a: 3}));
	});
});

describe('descending', () => {
	it('sorts', () => {
		const array = [2, 1, 3];

		array.sort(descending);

		expect(array).toStrictEqual([3, 2, 1]);
	});
});

describe('ascending', () => {
	it('sorts', () => {
		const array = [2, 1, 3];

		array.sort(ascending);

		expect(array).toStrictEqual([1, 2, 3]);
	});
});
