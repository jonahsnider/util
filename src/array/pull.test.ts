import {name} from '../object';
import {pull} from './pull';

describe(name(pull), () => {
	it('pulls from an array', () => {
		const array = [1, 2, 3];

		expect(pull(array, 2)).toStrictEqual([2]);
		expect(array).toStrictEqual([1, 3]);

		expect(pull(array, 2)).toStrictEqual([]);
		expect(array).toStrictEqual([1, 3]);
	});

	it('works with empty arrays', () => {
		const array: never[] = [];

		expect(pull(array, 2)).toStrictEqual([]);
		expect(array).toStrictEqual([]);
	});

	it("works when element isn't found", () => {
		const array = [1, 2, 3];

		expect(pull(array, 4)).toStrictEqual([]);
		expect(array).toStrictEqual([1, 2, 3]);
	});
});
