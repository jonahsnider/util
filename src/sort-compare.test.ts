import {ascending, descending} from './sort-compare';

describe(descending.name, () => {
	it('sorts', () => {
		const array = [2, 3, 1, 3];

		array.sort(descending);

		expect(array).toStrictEqual([3, 3, 2, 1]);
	});

	it('sorts bigints', () => {
		const array = [2n, 3n, 1n, 3n];

		array.sort(descending);

		expect(array).toStrictEqual([3n, 3n, 2n, 1n]);
	});
});

describe(ascending.name, () => {
	it('sorts', () => {
		const array = [2, 3, 1, 3];

		array.sort(ascending);

		expect(array).toStrictEqual([1, 2, 3, 3]);
	});

	it('sorts bigints', () => {
		const array = [2n, 3n, 1n, 3n];

		array.sort(ascending);

		expect(array).toStrictEqual([1n, 2n, 3n, 3n]);
	});
});
