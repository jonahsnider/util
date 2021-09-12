import {difference, intersection, isDisjoint, isSubset, isSuperset, symmetricDifference, union} from './set';

describe(isSuperset.name, () => {
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

describe(isSubset.name, () => {
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

describe(union.name, () => {
	it('creates a union Set', () => {
		const set = new Set([1, 2, 3]);

		expect(union(set, set)).toStrictEqual(set);
		expect(union(set, set)).not.toBe(set);

		expect(union([], [])).toStrictEqual(new Set());

		expect(union([1], [])).toStrictEqual(new Set([1]));
		expect(union([], [2])).toStrictEqual(new Set([2]));

		expect(union([1], [2])).toStrictEqual(new Set([1, 2]));
	});
});

describe(isDisjoint.name, () => {
	it('returns true for disjoint iterables', () => {
		expect(isDisjoint([], [])).toBe(true);

		expect(isDisjoint([1], [2])).toBe(true);
	});

	it('returns false for non-disjoint iterables', () => {
		const iterable = [1, 2, 3];

		expect(isDisjoint(iterable, iterable)).toBe(false);

		expect(isDisjoint([1], [1])).toBe(false);
		expect(isDisjoint([1, 2], [2, 3])).toBe(false);
	});
});

describe(intersection.name, () => {
	it('creates an intersection Set', () => {
		const set = new Set([1, 2, 3]);

		expect(intersection(set, set)).toStrictEqual(set);
		expect(intersection(set, set)).not.toBe(set);

		expect(intersection(new Set(), new Set())).toStrictEqual(new Set());

		expect(intersection(new Set([1, 2]), new Set([2, 3]))).toStrictEqual(new Set([2]));
	});
});

describe(symmetricDifference.name, () => {
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

describe(difference.name, () => {
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
});
