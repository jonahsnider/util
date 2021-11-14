import {name} from '../object';
import {indexOfAll} from './index-of-all';

describe(name(indexOfAll), () => {
	it('finds all indexes', () => {
		expect(indexOfAll([1, 2, 1, 3, 1], 1)).toStrictEqual([0, 2, 4]);
	});

	it('works with empty arrays', () => {
		expect(indexOfAll([], 1)).toStrictEqual([]);
	});

	it("works when element isn't found", () => {
		expect(indexOfAll([1, 2, 3], 4)).toStrictEqual([]);
	});
});
