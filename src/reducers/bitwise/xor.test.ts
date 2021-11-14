import {xor} from './xor';

it('returns bitwise XOR', () => {
	expect(xor(3, 5)).toBe(6);
	expect(xor(5n, 3n)).toBe(6n);
});
