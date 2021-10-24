import {name} from '../object';
import {max, min, product, sum} from '.';

// Compilation tests
// Actually running this code would also cause a runtime error, so using a function definition is a quick way to typecheck it without actually executing the broken code
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
() =>
	[1n, 1]
		// @ts-expect-error Mixed types
		.reduce(sum);

describe(name(sum), () => {
	it('adds numbers', () => {
		expect([1, 1].reduce(sum)).toBe(2);
	});

	it('adds bigints', () => {
		expect([1n, 1n].reduce(sum)).toBe(2n);
	});
});

describe(name(product), () => {
	it('multiplies numbers', () => {
		expect([2, 3].reduce(product)).toBe(6);
	});

	it('multiplies bigints', () => {
		expect([2n, 3n].reduce(product)).toBe(6n);
	});
});

describe(name(max), () => {
	it('selects the largest number', () => {
		expect([2, 3, 1].reduce(max)).toBe(3);
	});

	it('selects the largest value', () => {
		expect([1, new Date(2), false].reduce(max)).toStrictEqual(new Date(2));
	});
});

describe(name(min), () => {
	it('selects the smallest number', () => {
		expect([3, 1, 2].reduce(min)).toBe(1);
	});

	it('selects the smallest value', () => {
		expect([1, false, new Date(2)].reduce(min)).toBe(false);
	});
});
