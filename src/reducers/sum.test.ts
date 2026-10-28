import { expect, it } from 'vite-plus/test';
import { sum } from './sum.js';

// Compilation tests
// Actually running this code would also cause a runtime error, so using a function definition is a quick way to typecheck it without actually executing the broken code
// oxlint-disable-next-line eslint/no-unused-expressions -- This expression is only used as a compilation test
() =>
	[1n, 1]
		// @ts-expect-error Mixed types
		.reduce(sum);

it('adds numbers', () => {
	expect([1, 1].reduce(sum)).toBe(2);
});

it('adds bigints', () => {
	expect([1n, 1n].reduce(sum)).toBe(2n);
});
