import {name} from '../object';
import {replaceAll} from './replace-all';

describe(name(replaceAll), () => {
	it('replaces all elements from an array', () => {
		const array = [1, 2, 1, 3];

		expect(replaceAll(array, 1, 2)).toBe(2);
		expect(array).toStrictEqual([2, 2, 2, 3]);

		expect(replaceAll(array, 1, 2)).toBe(0);
		expect(array).toStrictEqual([2, 2, 2, 3]);
	});

	it('works with empty arrays', () => {
		const array: never[] = [];

		expect(replaceAll<number>(array, 1, 2)).toBe(0);
		expect(array).toStrictEqual([]);
	});

	it("works when element isn't found", () => {
		const array = [1, 2, 3];

		expect(replaceAll(array, 4, 2)).toBe(0);
		expect(array).toStrictEqual([1, 2, 3]);
	});
});
