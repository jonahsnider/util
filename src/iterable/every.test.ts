import { expect, it } from 'vitest';
import { every } from './every.js';

it('returns true if every element passes the predicate', () => {
	expect(every([1, 2, 3] as unknown[], (x): x is number => typeof x === 'number')).toBe(true);
	expect(every([1, 2, 3], () => true)).toBe(true);
});

it('returns false if some elements fail the predicate', () => {
	expect(every([1, '2', 3], (x): x is number => typeof x === 'number')).toBe(false);
	expect(every([1, 2, 3], () => false)).toBe(false);
});
