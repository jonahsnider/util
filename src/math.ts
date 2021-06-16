import {sum} from './reducers';

/**
 * Calculate the variance of a sequence of numbers.
 *
 * @example
 * ```ts
 * variance([1, 2, 3]) === 1;
 * ```
 *
 * @param values - Values to use in the calculation
 *
 * @returns The variance of `values`
 */
export function variance(values: readonly number[]): number {
	const meanValue = mean(values);

	return values.map(value => (value - meanValue) ** 2).reduce(sum) / (values.length - 1);
}

/**
 * Calculate the standard deviation of a sequence of numbers.
 *
 * @example
 * ```ts
 * stddev([1, 2, 3]) === 1;
 * ```
 *
 * @param values - Values to use in the calculation
 *
 * @returns The standard deviation of `values`
 */
export function stddev(values: readonly number[]): number {
	return Math.sqrt(variance(values));
}

/**
 * Calculate the normal distribution.
 *
 * @example
 * ```ts
 * normaldist(0, 1, 0);
 * ```
 *
 * @param x - Sample to calculate the normal distribution of
 * @param σ - Standard deviation
 * @param μ - Mean
 *
 * @see {@link standardNormaldist} For calculating the standard normal distribution
 *
 * @returns The normal distribution
 */
export function normaldist(x: number, σ: number, μ: number): number {
	return (1 / (σ * Math.sqrt(2 * Math.PI))) * Math.E ** ((-1 / 2) * (x - μ / σ) ** 2);
}

/**
 * Calculate the standard normal distribution.
 *
 * @example
 * ```ts
 * standardNormaldist(0) === normaldist(0, 1, 0);
 * ```
 *
 * @param x - Sample to calculate the normal distribution of
 *
 * @see {@link normaldist} For calculating the normal distribution
 *
 * @returns The standard normal distribution
 */
export function standardNormaldist(x: number): number {
	return normaldist(x, 1, 0);
}

/**
 * Get the mean of an array of `number`s.
 *
 * @example
 * ```ts
 * const array = [1, 2, 3];
 *
 * mean(array) === 2;
 * ```
 *
 * @param array - The array to calculate the mean of
 *
 * @see {@link median} to calculate the median of an array
 * @see {@link mode} to calculate the mode of an array
 *
 * @returns The mean of the array
 */
export function mean(array: readonly number[]): number;
/**
 * Get the mean of an array of `bigint`s.
 *
 * @example
 * ```ts
 * const array = [1n, 2n, 3n];
 *
 * mean(array) === 2n;
 * ```
 *
 * @param array - The array to calculate the mean of
 *
 * @see {@link median} to calculate the median of an array
 * @see {@link mode} to calculate the mode of an array
 *
 * @returns The mean of the array
 */
export function mean(array: readonly bigint[]): bigint;
export function mean<T extends number>(array: readonly T[]): T {
	const summed = (array as readonly number[]).reduce(sum) as unknown as T;

	const length = (typeof summed === 'bigint' ? BigInt(array.length) : array.length) as T;

	return (summed / length) as T;
}

/**
 * Calculate the median of an array of numbers.
 *
 * @example
 * ```ts
 * const values = [1, 2, 3];
 *
 * median(values) === 2;
 * ```
 *
 * @param array - Values to use in the calculation
 *
 * @see {@link mean} to calculate the mean of an array
 * @see {@link mode} to calculate the mode of an array
 *
 * @returns The median of `values`
 */
export function median(array: readonly number[]): number;
export function median(array: readonly bigint[]): bigint;
export function median<T extends number>(array: readonly T[]): T {
	const even = array.length % 2 === 0;
	const middleIndex = array.length / 2;

	if (even) {
		const divisor = (typeof array[0] === 'bigint' ? 2n : 2) as T;

		return ((array[middleIndex - 1] + array[middleIndex]) / divisor) as T;
	}

	return array[Math.floor(middleIndex)];
}

/**
 * Calculate the mode of an iterable.
 * Strict equality (`===`) is used to compare elements.
 *
 * @example
 * ```ts
 * const values = [1, 2, 2, 3, 3];
 *
 * mode(values); // [2, 3]
 * ```
 *
 * @param iterable - Values to use in the calculation
 *
 * @see {@link mean} to calculate the mean of an array
 * @see {@link median} to calculate the median of an array
 *
 *  @returns An array of the modes of `values`
 */
export function mode<T>(iterable: Iterable<T>): T[] {
	const frequencyTable: Map<T, number> = new Map();
	let maxOccurrences = 0;
	let modes: T[] = [];

	for (const element of iterable) {
		const occurrences = frequencyTable.get(element);
		const newOccurrences = occurrences === undefined ? 1 : occurrences + 1;

		frequencyTable.set(element, newOccurrences);

		if (newOccurrences > maxOccurrences) {
			maxOccurrences = newOccurrences;
			modes = [element];
		} else if (newOccurrences === maxOccurrences) {
			modes.push(element);
		}
	}

	return modes;
}

/**
 * Generate a random number within the given bounds.
 *
 * @example
 * ```ts
 * const value = random(0, 10);
 *
 * 0 <= value && value < 10;
 * ```
 *
 * @param min - Lower bound (inclusive) of the output range
 * @param max - Upper bound (exclusive) of the output range
 *
 * @returns A random number within the given bounds
 */
export function random(min: number, max: number): number {
	if (__DEV__ && min > max) {
		throw new RangeError('min exceeded max');
	}

	return Math.random() * (max - min) + min;
}

/**
 * Generate a random integer within the given bounds.
 *
 * @example
 * ```ts
 * const value = randomInt(0, 3);
 *
 * value === 0 || value === 1 || value === 2;
 * ```
 *
 * @param min - Lower bound (inclusive) of the output range
 * @param max - Upper bound (exclusive) of the output range
 *
 * @returns A random integer within the given bounds
 */
export function randomInt(min: number, max: number): number {
	if (__DEV__ && min > max) {
		throw new RangeError('min exceeded max');
	}

	return Math.floor(random(Math.ceil(min), Math.floor(max)));
}

/**
 * Returns the value nearest to value which is within the closed range [`min`, `max`].
 *
 * @example
 * ```ts
 * const value = clamp(Math.random() * 100, 25, 75n);
 *
 * 25 <= value && value <= 75n;
 * ```
 *
 * @param value - The value to clamp
 * @param min - The lower end (inclusive) of the range of numbers
 * @param max - The upper end (inclusive) of the range of numbers
 *
 * @returns the value nearest to value which is within the provided range.
 */
export function clamp<T extends number | bigint, M1 extends number | bigint, M2 extends number | bigint>(value: T, min: M1, max: M2): T | M1 | M2 {
	if (__DEV__ && min > max) {
		throw new RangeError('min exceeded max');
	}

	// Using if statements here is in theory faster than the naive solution of Math.min(Math.max(value, min), max) since the if statements do 1-2 comparisons while the
	// naive solution always does 2 comparisons

	if (value < min) {
		return min;
	}

	if (value > max) {
		return max;
	}

	return value;
}
