import {mean, sum} from '.';

// Compilation tests
// Actually running this code would also cause a runtime error, so using a function definition is a quick way to typecheck it without actually executing the broken code
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
() =>
	[BigInt(1), 1]
		// @ts-expect-error
		.reduce(sum);
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
() =>
	[BigInt(1), 1]
		// @ts-expect-error
		.reduce(mean);

describe('sum', () => {
	it('adds numbers', () => {
		expect([1, 1].reduce(sum)).toBe(2);
	});

	it('adds bigints', () => {
		expect([BigInt(1), BigInt(1)].reduce(sum)).toBe(BigInt(2));
	});
});

describe('mean', () => {
	const numbers = [1, 2, 3];

	it('calculates the mean of numbers', () => {
		expect(numbers.reduce(mean)).toBe(2);
	});

	it('calculates the mean of bigints', () => {
		const bigints = [1, 2, 3].map(number => BigInt(number));
		expect(bigints.reduce(mean)).toBe(BigInt(2));
	});
});
