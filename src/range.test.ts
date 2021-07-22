import {Range} from './range';

describe(Range.name, () => {
	it('throws on bad input', () => {
		expect(() => new Range(2, 1)).toThrow(RangeError);
	});

	describe('Range.from', () => {
		it('creates a range', () => {
			expect(Range.from([1, 2])).toStrictEqual(new Range(1, 2));
		});
	});

	describe('Range#has', () => {
		it('works with values in range', () => {
			expect(new Range(1, 3).has(2)).toBe(true);
			expect(new Range(1, 3n).has(2)).toBe(true);
		});

		it('works with values not in range', () => {
			expect(new Range(1, 2).has(3)).toBe(false);
			expect(new Range(1, 2n).has(3)).toBe(false);
		});
	});
});
