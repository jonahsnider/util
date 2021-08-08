import {toDigits} from './';

describe(toDigits.name, () => {
	it('formats numbers', () => {
		expect(toDigits(1, 1)).toBe(1);
		expect(toDigits(1, 5)).toBe(1);
		expect(toDigits(1.25, 1)).toBe(1.3);
		expect(toDigits(1.24, 1)).toBe(1.2);
		expect(toDigits(1.25, 2)).toBe(1.25);
	});
});
