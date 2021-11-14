import {name} from '../../object';
import {and} from '.';

describe(name(and), () => {
	it('returns bitwise AND', () => {
		expect(and(3, 5)).toBe(1);
		expect(and(5n, 3n)).toBe(1n);
	});
});
