import {jaccardIndex} from './jaccard-index';

it('returns 1 for empty sets', () => {
	expect(jaccardIndex(new Set(), new Set())).toBe(1);
});

it('works with different sets', () => {
	const a = new Set([0, 1, 2, 5, 6]);
	const b = new Set([0, 2, 3, 4, 5, 7, 9]);

	expect(jaccardIndex(a, b)).toBe(1 / 3);
});

it('works with disjoint sets', () => {
	const a = new Set([1, 2, 3]);
	const b = new Set([4, 5, 6]);

	expect(jaccardIndex(a, b)).toBe(0);
});

it('works with with identical sets', () => {
	const a = new Set([1, 2, 3]);
	const b = new Set([1, 2, 3]);

	expect(jaccardIndex(a, a)).toBe(1);
	expect(jaccardIndex(a, b)).toBe(1);
});
