import { expect, it } from 'vitest';
import { invert } from './invert.js';

function sort(a: number, b: number) {
	return a - b;
}

it('inverts numbers', () => {
	expect(invert(() => 1)()).toBe(-1);
	expect(invert(() => -1)()).toBe(1);
	expect(invert(() => 0)()).toBe(-0);
	expect(invert(() => -0)()).toBe(0);

	expect(invert(sort)(10, 5)).toBe(-5);
});

it('inverts bigints', () => {
	expect(invert(() => 1n)()).toBe(-1n);
	expect(invert(() => -1n)()).toBe(1n);
	expect(invert(() => 0n)()).toBe(-0n);
	expect(invert(() => -0n)()).toBe(0n);
});
