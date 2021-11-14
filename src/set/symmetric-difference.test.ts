import {name} from '../object';
import {symmetricDifference} from './symmetric-difference';

describe(name(symmetricDifference), () => {
	it('creates a Set of the symmetric difference', () => {
		const set = new Set([1, 2, 3]);
		expect(symmetricDifference(set, set)).toStrictEqual(new Set());

		expect(symmetricDifference([], [])).toStrictEqual(new Set());

		expect(symmetricDifference([], [1])).toStrictEqual(new Set([1]));
		expect(symmetricDifference([1], [])).toStrictEqual(new Set([1]));

		expect(symmetricDifference([1, 2, 3], [3, 4])).toStrictEqual(new Set([1, 2, 4]));
		expect(symmetricDifference([3, 4], [1, 2, 3])).toStrictEqual(new Set([1, 2, 4]));
	});
});
