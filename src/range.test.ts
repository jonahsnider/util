import {Range} from './range';

describe(Range.name, () => {
	it('throws on bad input', () => {
		expect(() => new Range(2, 1)).toThrow(RangeError);
	});

	describe(`${Range.name}.${Range.from.name}`, () => {
		it('creates a range', () => {
			expect(Range.from([1, 2])).toStrictEqual(new Range(1, 2));
		});
	});

	describe(`${Range.name}#${Range.prototype.has.name}`, () => {
		it('works with values in range', () => {
			expect(new Range(1, 3).has(2)).toBe(true);
			expect(new Range(1, 3n).has(2)).toBe(true);
		});

		it('works with values not in range', () => {
			expect(new Range(1, 2).has(3)).toBe(false);
			expect(new Range(1, 2n).has(3)).toBe(false);
		});
	});

	describe(`${Range.name}#${Range.prototype[Symbol.iterator].name}`, () => {
		it('yields start and end value', () => {
			expect([...new Range(1, 3)]).toStrictEqual([1, 3]);
		});
	});

	describe(`${Range.name}#${Range.prototype.isSuperrange.name}`, () => {
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

	describe(`${Range.name}#${Range.prototype.isSubrange.name}`, () => {
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
});
