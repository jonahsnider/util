import {name} from '../object';
import {stddev} from './stddev';

describe(name(stddev), () => {
	it('calculates standard deviation', () => {
		expect(stddev([1, 1, 1])).toBe(0);
		expect(stddev([1, 2, 3])).toBe(1);
		expect(stddev([1, 3, 5])).toBe(2);
	});
});
