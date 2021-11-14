import {name} from '../object';
import {isSuperset} from './is-superset';

describe(name(isSuperset), () => {
	it('returns true for supersets', () => {
		const set = new Set([1, 2, 3]);

		expect(isSuperset(set, set)).toBe(true);

		expect(isSuperset(new Set(), [])).toBe(true);

		expect(isSuperset(new Set([1, 2, 3]), [1, 2])).toBe(true);
	});

	it('returns false for subsets', () => {
		expect(isSuperset(new Set([1, 2]), [1, 2, 3])).toBe(false);
	});
});
