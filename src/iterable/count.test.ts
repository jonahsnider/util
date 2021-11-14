import {name} from '../object';
import {count} from './count';

describe(name(count), () => {
	it('counts elements', () => {
		expect(count([1, 2, 3])).toBe(3);
	});

	it('counts empty iterables', () => {
		expect(count([])).toBe(0);
	});
});
