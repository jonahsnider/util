import {name} from '../object';
import {random} from './random';

describe(name(random), () => {
	it('generates random numbers', () => {
		const value = random(0, 1);

		expect(value).toBeGreaterThan(0);
		expect(value).toBeLessThan(1);

		expect(random(0, 0)).toBe(0);
		expect(random(1, 1)).toBe(1);
	});

	it('throws in development when min is greater than max', () => {
		expect(() => random(1, 0)).toThrow(RangeError);
	});
});
