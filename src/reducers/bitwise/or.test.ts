import {or} from './index.js';

it('returns bitwise OR', () => {
	expect(or(3, 5)).toBe(7);
	expect(or(5n, 3n)).toBe(7n);
});
