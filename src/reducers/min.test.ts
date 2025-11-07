import { expect, it } from 'vitest';
import { min } from './min.js';

it('selects the smallest number', () => {
	expect([3, 1, 2].reduce(min)).toBe(1);
});

it('selects the smallest value', () => {
	expect([1, false, new Date(2)].reduce(min)).toBe(false);
});
