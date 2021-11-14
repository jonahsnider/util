import {isDisjoint} from './is-disjoint';

it('returns true for disjoint iterables', () => {
	expect(isDisjoint([], [])).toBe(true);

	expect(isDisjoint(new Set([1]), [2])).toBe(true);
	expect(isDisjoint([1], [2])).toBe(true);
});

it('returns false for non-disjoint iterables', () => {
	const iterable = [1, 2, 3];

	expect(isDisjoint(iterable, iterable)).toBe(false);

	expect(isDisjoint([1], [1])).toBe(false);
	expect(isDisjoint([1, 2], [2, 3])).toBe(false);
});
