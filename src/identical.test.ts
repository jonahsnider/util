import {same, identical} from './identical';

describe(same.name, () => {
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
});

describe(identical.name, () => {
	it('throws on bad input', () => {
		expect(
			// @ts-expect-error
			() => identical([], new Set()),
		).toThrow(RangeError);
		expect(
			// @ts-expect-error
			() => identical(new Set(), []),
		).toThrow(RangeError);
	});

	it('reports identical arrays', () => {
		const original = [1, 2, 3];
		const copy = [...original];
		const reversed = [3, 2, 1];
		const originalWithExtra = [...original, undefined];

		// The same array object
		expect(identical(original, original)).toBe(true);
		// A copy of an array
		expect(identical(original, copy)).toBe(true);
		// Arrays with different lengths
		expect(identical(original, [...original, ...original])).toBe(false);

		// Empty arrays
		expect(identical([], [])).toBe(true);

		// Arrays with undefined elements
		expect(identical([undefined], [undefined])).toBe(true);

		// Same elements, but not the same order
		expect(identical(original, reversed)).toBe(false);

		// Same elements, but one array has an extra undefined element
		expect(identical(original, originalWithExtra)).toBe(false);
		expect(identical(originalWithExtra, original)).toBe(false);

		// Arrays with undefined elements, but one array has an extra undefined element
		expect(identical([undefined, undefined], [undefined])).toBe(false);
	});

	it('reports identical Sets', () => {
		const original = new Set([1, 2, 3]);
		const copy = new Set(original);
		const reversed = new Set([3, 2, 1]);

		expect(identical(original, original)).toBe(true);
		expect(identical(original, copy)).toBe(true);
		expect(identical(original, reversed)).toBe(true);
		expect(identical(new Set(), new Set())).toBe(true);

		expect(identical(original, new Set())).toBe(false);
		expect(identical(new Set([1, 2, 3]), new Set([1, 2, 3, 4, 5, 6]))).toBe(false);
		expect(identical(new Set([1, 2, 3]), new Set([2, 3, 4]))).toBe(false);
	});

	it('reports identical Maps', () => {
		const original = new Map([
			['a', 1],
			['b', 2],
			['c', 3],
		]);
		const copy = new Map(original);
		const reversed = new Map([
			['c', 3],
			['b', 2],
			['a', 1],
		]);

		expect(identical(original, original)).toBe(true);
		expect(identical(original, copy)).toBe(true);
		expect(identical(original, reversed)).toBe(true);
		expect(identical(new Map(), new Map())).toBe(true);

		expect(identical(original, new Map())).toBe(false);
		expect(
			identical(
				new Map([
					['a', 1],
					['b', 2],
				]),
				new Map([
					['b', 2],
					['c', 3],
				]),
			),
		).toBe(false);
	});
});
