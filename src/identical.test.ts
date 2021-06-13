import {same, identicalManual} from './identical';

// Compilation tests
// @ts-expect-error
identicalManual([], new Set());
// @ts-expect-error
identicalManual(new Set(), []);

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
		expect(identicalManual(original, reversed)).toBe(false);

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
});

describe(identicalManual.name, () => {
	it('reports identical arrays', () => {
		const original = [1, 2, 3];
		const copy = [...original];
		const reversed = [3, 2, 1];
		const originalWithExtra = [...original, undefined];

		// The same array object
		expect(identicalManual(original, original)).toBe(true);
		// A copy of an array
		expect(identicalManual(original, copy)).toBe(true);
		// Arrays with different lengths
		expect(identicalManual(original, [...original, ...original])).toBe(false);

		// Empty arrays
		expect(same([], [])).toBe(true);

		// Arrays with undefined elements
		expect(same([undefined], [undefined])).toBe(true);

		// Same elements, but not the same order
		expect(identicalManual(original, reversed)).toBe(false);

		// Same elements, but one array has an extra undefined element
		expect(same(original, originalWithExtra)).toBe(false);
		expect(same(originalWithExtra, original)).toBe(false);

		// Arrays with undefined elements, but one array has an extra undefined element
		expect(same([undefined, undefined], [undefined])).toBe(false);
	});

	it('reports identical Sets', () => {
		const original = new Set([1, 2, 3]);
		const copy = new Set(original);
		const reversed = new Set([3, 2, 1]);

		expect(identicalManual(original, original)).toBe(true);
		expect(identicalManual(original, copy)).toBe(true);
		expect(identicalManual(original, reversed)).toBe(true);
		expect(identicalManual(new Set(), new Set())).toBe(true);

		expect(identicalManual(original, new Set())).toBe(false);
		expect(identicalManual(new Set([1, 2, 3]), new Set([1, 2, 3, 4, 5, 6]))).toBe(false);
		expect(identicalManual(new Set([1, 2, 3]), new Set([2, 3, 4]))).toBe(false);
	});

	it('reports identical Maps', () => {
		const original = new Map([
			['a', 1],
			['b', 2],
			['c', 3]
		]);
		const copy = new Map(original);
		const reversed = new Map([
			['c', 3],
			['b', 2],
			['a', 1]
		]);

		expect(identicalManual(original, original)).toBe(true);
		expect(identicalManual(original, copy)).toBe(true);
		expect(identicalManual(original, reversed)).toBe(true);
		expect(identicalManual(new Map(), new Map())).toBe(true);

		expect(identicalManual(original, new Map())).toBe(false);
		expect(
			identicalManual(
				new Map([
					['a', 1],
					['b', 2]
				]),
				new Map([
					['b', 2],
					['c', 3]
				])
			)
		).toBe(false);
	});
});
