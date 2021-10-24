import {name} from '../object';
import {and, or, xor} from './bitwise';

describe(name(and), () => {
	it('returns bitwise AND', () => {
		expect(and(3, 5)).toBe(1);
		expect(and(5n, 3n)).toBe(1n);
	});
});

describe(name(or), () => {
	it('returns bitwise OR', () => {
		expect(or(3, 5)).toBe(7);
		expect(or(5n, 3n)).toBe(7n);
	});
});

describe(name(xor), () => {
	it('returns bitwise XOR', () => {
		expect(xor(3, 5)).toBe(6);
		expect(xor(5n, 3n)).toBe(6n);
	});
});
