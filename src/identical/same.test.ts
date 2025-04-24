import {same} from './same.js';

it('reports identical arrays', () => {
	const original = [1, 2, 3];
	const copy = [...original];
	const reversed = [3, 2, 1];
	const originalWithExtra = [...original, undefined];

	// The same array object
	expect(same(original, original)).toBe(true);
	// A copy of an array
	expect(same(original, copy)).toBe(true);
	// Arrays with different lengths
	expect(same(original, [...original, ...original])).toBe(false);

	// Empty arrays
	expect(same([], [])).toBe(true);

	// Arrays with undefined elements
	expect(same([undefined], [undefined])).toBe(true);

	// Same elements, but not the same order
	expect(same(original, reversed)).toBe(false);

	// Same elements, but one array has an extra undefined element
	expect(same(original, originalWithExtra)).toBe(false);
	expect(same(originalWithExtra, original)).toBe(false);

	// Arrays with undefined elements, but one array has an extra undefined element
	expect(same([undefined, undefined], [undefined])).toBe(false);
});

it('reports identical Sets', () => {
	const a = new Set([1, 2, 3]);
	const b = new Set(a);
	const c = new Set([3, 2, 1]);

	expect(same(a, a, a)).toBe(true);
	expect(same(a, b, a)).toBe(true);
	expect(same(a, a, a, c)).toBe(false);
});

it('handles empty iterables', () => {
	expect(same([], [])).toBe(true);
});
