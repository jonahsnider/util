import {max, mean, min, sum} from './';

// Compilation tests
// Actually running this code would also cause a runtime error, so using a function definition is a quick way to typecheck it without actually executing the broken code
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
() =>
	[1n, 1]
		// @ts-expect-error
		.reduce(sum);
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
() =>
	[1n, 1]
		// @ts-expect-error
		.reduce(mean);

describe(sum.name, () => {
	it('adds numbers', () => {
		expect([1, 1].reduce(sum)).toBe(2);
	});

	it('adds bigints', () => {
		expect([1n, 1n].reduce(sum)).toBe(2n);
	});
});

describe(max.name, () => {
	it('selects the largest number', () => {
		expect([2, 3, 1].reduce(max)).toBe(3);
	});
});

describe(min.name, () => {
	it('selects the smallest number', () => {
		expect([3, 1, 2].reduce(min)).toBe(1);
	});
});
