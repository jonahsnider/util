import {nullish} from './nullish.js';

it('returns true for nullish values', () => {
	expect(nullish(null)).toBe(true);
	expect(nullish(undefined)).toBe(true);
});

it('returns false for non-nullish values', () => {
	expect(nullish('null')).toBe(false);
	expect(nullish('undefined')).toBe(false);
	expect(nullish(1)).toBe(false);
	expect(nullish(true)).toBe(false);
	expect(nullish(5n)).toBe(false);
});
