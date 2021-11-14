import {name} from '../object';
import {relativeStddev} from './relative-stddev';

describe(name(relativeStddev), () => {
	it('calculates relative standard deviation', () => {
		expect(relativeStddev([1, 1, 1])).toBe(0);
		expect(relativeStddev([1, 2, 3])).toBe(0.5);
		expect(relativeStddev([1, 3, 5])).toBe(2 / 3);
	});
});
