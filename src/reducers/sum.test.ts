import {sum} from './sum.js';

// Compilation tests
// Actually running this code would also cause a runtime error, so using a function definition is a quick way to typecheck it without actually executing the broken code
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
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
