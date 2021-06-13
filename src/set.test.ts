import {difference, intersection, isDisjoint, isSubset, isSuperset, symmetricDifference, union} from './set';

describe('isSuperset', () => {
	it('returns true for supersets', () => {
		expect(isSuperset(new Set(), [])).toBe(true);

		expect(isSuperset(new Set([1, 2, 3]), [1, 2])).toBe(true);
	});

	it('returns false for subsets', () => {
		expect(isSuperset(new Set([1, 2]), [1, 2, 3])).toBe(false);
	});
});

describe('isSubset', () => {
	it('returns true for subsets', () => {
		expect(isSubset([], new Set([]))).toBe(true);

		expect(isSubset([1, 2], new Set([1, 2, 3]))).toBe(true);
	});

	it('returns false for supersets', () => {
		expect(isSubset([1, 2, 3], new Set([1, 2]))).toBe(false);
	});
});

describe('union', () => {
	it('creates a union Set', () => {
		expect(union([], [])).toStrictEqual(new Set());

		expect(union([1], [])).toStrictEqual(new Set([1]));
		expect(union([], [2])).toStrictEqual(new Set([2]));

		expect(union([1], [2])).toStrictEqual(new Set([1, 2]));
	});
});

describe('isDisjoint', () => {
	it('returns true for disjoint iterables', () => {
		expect(isDisjoint([], [])).toBe(true);

		expect(isDisjoint([1], [2])).toBe(true);
	});

	it('returns false for non-disjoint iterables', () => {
		expect(isDisjoint([1], [1])).toBe(false);
		expect(isDisjoint([1, 2], [2, 3])).toBe(false);
	});
});

describe('intersection', () => {
	it('creates an intersection Set', () => {
		expect(intersection(new Set(), new Set())).toStrictEqual(new Set());

		expect(intersection(new Set([1, 2]), new Set([2, 3]))).toStrictEqual(new Set([2]));
	});
});

describe('symmetricDifference', () => {
	it('creates a Set of the symmetric difference', () => {
		expect(symmetricDifference([], [])).toStrictEqual(new Set());

		expect(symmetricDifference([], [1])).toStrictEqual(new Set([1]));
		expect(symmetricDifference([1], [])).toStrictEqual(new Set([1]));

		expect(symmetricDifference([1, 2, 3], [3, 4])).toStrictEqual(new Set([1, 2, 4]));
		expect(symmetricDifference([3, 4], [1, 2, 3])).toStrictEqual(new Set([1, 2, 4]));
	});
});

describe('difference', () => {
	expect(difference([], [])).toStrictEqual(new Set());

	expect(difference([], [1])).toStrictEqual(new Set());
	expect(difference([1], [])).toStrictEqual(new Set([1]));

	expect(difference([1, 2, 3], [2, 4])).toStrictEqual(new Set([1, 3]));
	expect(difference([2, 4], [1, 2, 3])).toStrictEqual(new Set([4]));
});
