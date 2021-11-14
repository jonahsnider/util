import {name} from '../object';
import {isSubset} from './is-subset';

describe(name(isSubset), () => {
	it('returns true for subsets', () => {
		const set = new Set([1, 2, 3]);

		expect(isSubset(set, set)).toBe(true);

		expect(isSubset([], new Set([]))).toBe(true);

		expect(isSubset([1, 2], new Set([1, 2, 3]))).toBe(true);
	});

	it('returns false for supersets', () => {
		expect(isSubset([1, 2, 3], new Set([1, 2]))).toBe(false);
	});
});
