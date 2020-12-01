import {ascending, descending} from '.';

describe('descending', () => {
	it('shuffles arrays', () => {
		const array = [2, 1, 3];

		array.sort(descending);

		expect(array).toStrictEqual([3, 2, 1]);
	});
});

describe('ascending', () => {
	it('shuffles arrays', () => {
		const array = [2, 1, 3];

		array.sort(ascending);

		expect(array).toStrictEqual([1, 2, 3]);
	});
});
