import {name} from '../object';
import {ascending} from './compare';
import {isSorted} from './is-sorted';

describe(name(isSorted), () => {
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
