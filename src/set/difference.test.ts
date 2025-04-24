import {difference} from './difference.js';

it('creates a Set of the difference', () => {
	const set = new Set([1, 2, 3]);

	expect(difference(set, set)).toStrictEqual(new Set());
	expect(difference(set, set)).not.toBe(set);

	expect(difference([], [])).toStrictEqual(new Set());

	expect(difference([], [1])).toStrictEqual(new Set());
	expect(difference([1], [])).toStrictEqual(new Set([1]));

	expect(difference([1, 2, 3], [2, 4])).toStrictEqual(new Set([1, 3]));
	expect(difference([2, 4], [1, 2, 3])).toStrictEqual(new Set([4]));
});
