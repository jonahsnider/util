import {name} from '../object';
import {median} from './median';

describe(name(median), () => {
	it('calculates the median', () => {
		expect(median([1])).toBe(1);
		expect(median([1, 2, 3])).toBe(2);

		expect(median([2, 3])).toBe(2.5);
		expect(median([1, 2, 3, 4, 5, 6, 8, 9])).toBe(4.5);
		expect(median([2n, 6n])).toBe(4n);
	});
});
