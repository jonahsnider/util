import {clamp, mean, median, mode, normaldist, random, randomInt, relativeStddev, standardNormaldist, stddev, variance} from './math';

describe(variance.name, () => {
	it('calculates variance', () => {
		expect(variance([1, 1, 1])).toBe(0);
		expect(variance([1, 2, 3])).toBe(1);
		expect(variance([1, 3, 5])).toBe(4);
	});
});

describe(stddev.name, () => {
	it('calculates standard deviation', () => {
		expect(stddev([1, 1, 1])).toBe(0);
		expect(stddev([1, 2, 3])).toBe(1);
		expect(stddev([1, 3, 5])).toBe(2);
	});
});

describe(relativeStddev.name, () => {
	it('calculates relative standard deviation', () => {
		expect(relativeStddev([1, 1, 1])).toBe(0);
		expect(relativeStddev([1, 2, 3])).toBe(0.5);
		expect(relativeStddev([1, 3, 5])).toBe(2 / 3);
	});
});

describe(normaldist.name, () => {
	it('calculates normal distribution', () => {
		expect(normaldist(0, 1, 0)).toBeCloseTo(0.3989);
	});
});

describe(standardNormaldist.name, () => {
	it('calculates normal distribution', () => {
		expect(standardNormaldist(0)).toBe(normaldist(0, 1, 0));
	});
});

describe(mean.name, () => {
	const numbers = [1, 2, 3];

	it('calculates the mean of numbers', () => {
		expect(mean(numbers)).toBe(2);
	});

	it('calculates the mean of bigints', () => {
		const bigints = [1n, 2n, 3n];
		expect(mean(bigints)).toBe(2n);
	});
});

describe(median.name, () => {
	it('calculates the median', () => {
		expect(median([1])).toBe(1);
		expect(median([1, 2, 3])).toBe(2);
		expect(median([2, 3])).toBe(2.5);
		expect(median([1, 2, 3, 4, 5, 6, 8, 9])).toBe(4.5);
	});
});

describe(mode.name, () => {
	it('calculates the mode', () => {
		expect(mode([])).toStrictEqual([]);
		expect(mode([1])).toStrictEqual([1]);
		expect(mode([1, 3, 6, 6, 6, 6, 7, 7, 12, 12, 17])).toStrictEqual([6]);
		expect(mode([1, 2, 2, 3, 4, 7, 9])).toStrictEqual([2]);
		expect(mode([1, 1, 2, 4, 4])).toStrictEqual([1, 4]);
	});
});

describe(random.name, () => {
	it('generates random numbers', () => {
		const value = random(0, 1);

		expect(value).toBeGreaterThan(0);
		expect(value).toBeLessThan(1);

		expect(random(0, 0)).toBe(0);
		expect(random(1, 1)).toBe(1);
	});

	it('throws in development when min is greater than max', () => {
		expect(() => random(1, 0)).toThrow(RangeError);
	});
});

describe(randomInt.name, () => {
	it('generates random integers', () => {
		const value = randomInt(0, 1);

		expect([0, 1]).toContain(value);

		expect(randomInt(0, 0)).toBe(0);
		expect(randomInt(1, 1)).toBe(1);
	});

	it('throws in development when min is greater than max', () => {
		expect(() => randomInt(1, 0)).toThrow(RangeError);
	});
});

describe(clamp.name, () => {
	it('clamps', () => {
		expect(clamp(0, 1, 2)).toBe(1);
		expect(clamp(3, 1, 2)).toBe(2);
		expect(clamp(2, 1, 3)).toBe(2);
	});

	it('throws in development when min is greater than max', () => {
		expect(() => clamp(1, 1, 0)).toThrow(RangeError);
	});
});
