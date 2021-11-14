import {name} from '../object';
import {min} from './min';

describe(name(min), () => {
	it('selects the smallest number', () => {
		expect([3, 1, 2].reduce(min)).toBe(1);
	});

	it('selects the smallest value', () => {
		expect([1, false, new Date(2)].reduce(min)).toBe(false);
	});
});
