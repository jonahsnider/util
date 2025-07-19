import { triangularNumber } from './triangular-number.js';

it('throws if value is less than 0', () => {
	expect(() => triangularNumber(-1)).toThrow(RangeError);
});

it('calculate the 0th triangular number', () => {
	expect(triangularNumber(0)).toBe(0);
	expect(triangularNumber(0n)).toBe(0n);
});

it('calculate the nth triangular number', () => {
	expect(triangularNumber(2)).toBe(3);
	expect(triangularNumber(2)).toBe(3);
});
