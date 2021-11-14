import {name} from '../object';
import {mean} from './mean';

describe(name(mean), () => {
	const numbers = [1, 2, 3];

	it('calculates the mean of numbers', () => {
		expect(mean(numbers)).toBe(2);
	});

	it('calculates the mean of bigints', () => {
		const bigints = [1n, 2n, 3n];
		expect(mean(bigints)).toBe(2n);
	});
});
