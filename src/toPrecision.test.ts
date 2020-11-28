import {toPrecision} from '.';

describe('toPrecision', () => {
	it('formats numbers', () => {
		expect(toPrecision(1, 1)).toBe(1);
		expect(toPrecision(1, 5)).toBe(1);
		expect(toPrecision(1.25, 1)).toBe(1.3);
		expect(toPrecision(1.24, 1)).toBe(1.2);
		expect(toPrecision(1.25, 2)).toBe(1.25);
	});
});
