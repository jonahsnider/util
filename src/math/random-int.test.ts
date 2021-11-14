import {randomInt} from './random-int';

it('generates random integers', () => {
	const value = randomInt(0, 1);

	expect([0, 1]).toContain(value);

	expect(randomInt(0, 0)).toBe(0);
	expect(randomInt(1, 1)).toBe(1);
});

it('throws in development when min is greater than max', () => {
	expect(() => randomInt(1, 0)).toThrow(RangeError);
});
