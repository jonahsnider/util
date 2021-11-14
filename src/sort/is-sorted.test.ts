import {isSorted} from './is-sorted';
import {ascending} from './compare';

it('works with empty arrays', () => {
	expect(isSorted([], () => 1)).toBe(true);
});

it('works with sorted arrays', () => {
	expect(isSorted([1, 1, 2, 3, 3], ascending)).toBe(true);
});

it('works with unsorted arrays', () => {
	expect(isSorted([3, 3, 2, 1, 1], ascending)).toBe(false);
});
