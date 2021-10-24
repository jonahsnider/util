import {Range} from './range';
import {name} from './object';

describe(name(Range), () => {
	it('throws on bad input', () => {
		expect(() => new Range(2, 1)).toThrow(RangeError);
	});

	describe(name(Range, Range.from), () => {
		it('creates a range', () => {
			expect(Range.from([1, 2])).toStrictEqual(new Range(1, 2));
		});
	});

	describe(name(Range, Range.prototype.has), () => {
		it('works with values in range', () => {
			expect(new Range(1, 3).has(2)).toBe(true);
			expect(new Range(1, 3n).has(2)).toBe(true);
		});

		it('works with values not in range', () => {
			expect(new Range(1, 2).has(3)).toBe(false);
			expect(new Range(1, 2n).has(3)).toBe(false);
		});
	});

	describe(name(Range, Range.prototype[Symbol.iterator]), () => {
		it('yields start and end value', () => {
			expect([...new Range(1, 3)]).toStrictEqual([1, 3]);
		});
	});

	describe(name(Range, Range.prototype.isSuperrange), () => {
		it('returns true for superrange', () => {
			const range = new Range(1, 4);
			expect(range.isSuperrange(range)).toBe(true);

			expect(new Range(1, 4).isSuperrange(new Range(1, 4))).toBe(true);
			expect(new Range(2, 3).isSuperrange(new Range(1, 4))).toBe(true);
		});

		it('returns false for non-superrange', () => {
			expect(new Range(1, 4).isSuperrange(new Range(2, 3))).toBe(false);
			expect(new Range(1, 4).isSuperrange(new Range(5, 8))).toBe(false);
		});
	});

	describe(name(Range, Range.prototype.isSubrange), () => {
		it('returns true for subrange', () => {
			const range = new Range(1, 4);
			expect(range.isSubrange(range)).toBe(true);

			expect(new Range(1, 4).isSubrange(new Range(1, 4))).toBe(true);
			expect(new Range(1, 4).isSubrange(new Range(2, 3))).toBe(true);
		});

		it('returns false for non-subrange', () => {
			expect(new Range(2, 3).isSubrange(new Range(1, 4))).toBe(false);

			expect(new Range(1, 4).isSubrange(new Range(5, 8))).toBe(false);
		});
	});

	describe(name(Range, Range.prototype.equals), () => {
		it('returns true for equal ranges', () => {
			const range = new Range(1, 4);

			expect(range.equals(range)).toBe(true);
			expect(new Range(1, 4).equals(new Range(1, 4))).toBe(true);
		});

		it('returns false for inequal ranges', () => {
			expect(new Range(1, 4).equals(new Range(2, 3))).toBe(false);
		});
	});

	describe(name(Range, Range.prototype.intersects), () => {
		it('returns true for intersecting ranges', () => {
			const range = new Range(1, 4);

			expect(range.intersects(range)).toBe(true);
			expect(new Range(1, 4).intersects(new Range(1, 4))).toBe(true);
			expect(new Range(1, 3).intersects(new Range(2, 4))).toBe(true);
			expect(new Range(2, 4).intersects(new Range(1, 3))).toBe(true);
		});

		it('returns false for non-intersecting ranges', () => {
			expect(new Range(1, 4).intersects(new Range(5, 8))).toBe(false);
		});
	});
});
