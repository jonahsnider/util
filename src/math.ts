import {sum} from './reducers/index';

/**
 * Calculate the variance of a sequence of numbers.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * variance([1, 2, 3]); // 1
 * ```
 *
 * @param values - Values to use in the calculation
 * @param meanValue - The mean of `values`, will be calculated if not provided
 *
 * @returns The variance of `values`
 *
 * @public
 */
export function variance(values: readonly number[], meanValue = mean(values)): number {
	return values.map(value => (value - meanValue) ** 2).reduce(sum) / (values.length - 1);
}

/**
 * Calculate the standard deviation of a sequence of numbers.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * stddev([1, 2, 3]); // 1
 * ```
 *
 * @param values - Values to use in the calculation
 * @param meanValue - The mean of `values`, will be calculated if not provided
 *
 * @returns The standard deviation of `values`
 *
 * @public
 */
export function stddev(values: readonly number[], meanValue = mean(values)): number {
	return Math.sqrt(variance(values, meanValue));
}

/**
 * Calculate the relative standard deviation (coefficient of variation) of a sequence of numbers.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * relativeStddev([1, 2, 3]); // 0.5
 * ```
 *
 * @param values - Values to use in the calculation
 * @param meanValue - The mean of `values`, will be calculated if not provided
 *
 * @returns The standard deviation of `values`
 *
 * @public
 */
export function relativeStddev(values: readonly number[], meanValue = mean(values)): number {
	return stddev(values, meanValue) / meanValue;
}

/**
 * Calculate the normal distribution.
 *
 * Time complexity: _O(1)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * normaldist(0, 1, 0);
 * ```
 *
 * @param x - Sample to calculate the normal distribution of
 * @param standardDeviation - Standard deviation
 * @param mean - Mean
 *
 * @see {@link standardNormaldist} For calculating the standard normal distribution
 *
 * @returns The normal distribution
 *
 * @public
 */
export function normaldist(x: number, standardDeviation: number, mean: number): number {
	return (1 / (standardDeviation * Math.sqrt(2 * Math.PI))) * Math.E ** ((-1 / 2) * (x - mean / standardDeviation) ** 2);
}

/**
 * Calculate the standard normal distribution.
 *
 * Time complexity: _O(1)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * standardNormaldist(0) === normaldist(0, 1, 0); // true
 * ```
 *
 * @param x - Sample to calculate the normal distribution of
 *
 * @see {@link normaldist} For calculating the normal distribution
 *
 * @returns The standard normal distribution
 *
 * @public
 */
export function standardNormaldist(x: number): number {
	return normaldist(x, 1, 0);
}

/**
 * Get the mean of an array of `number`s.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * const array = [1, 2, 3];
 *
 * mean(array); // 2
 * ```
 *
 * @param array - The array to calculate the mean of
 *
 * @see {@link (median:1)} to calculate the median of an array
 * @see {@link mode} to calculate the mode of an array
 *
 * @returns The mean of the array
 *
 * @public
 */
export function mean(array: readonly number[]): number;
/**
 * Get the mean of an array of `bigint`s.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * const array = [1n, 2n, 3n];
 *
 * mean(array); // 2n
 * ```
 *
 * @param array - The array to calculate the mean of
 *
 * @see {@link (median:2)} to calculate the median of an array
 * @see {@link mode} to calculate the mode of an array
 *
 * @returns The mean of the array
 *
 * @public
 */
export function mean(array: ReadonlyArray<bigint>): bigint;
export function mean<T extends number>(array: readonly T[]): T {
	const summed = (array as readonly number[]).reduce(sum) as unknown as T;

	const length = (typeof summed === 'bigint' ? BigInt(array.length) : array.length) as T;

	return (summed / length) as T;
}

/**
 * Calculate the median of an array of numbers.
 *
 * Time complexity: _O(1)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * const values = [1, 2, 3];
 *
 * median(values); // 2
 * ```
 *
 * @param array - Values to use in the calculation
 *
 * @see {@link (mean:1)} to calculate the mean of an array
 * @see {@link mode} to calculate the mode of an array
 *
 * @returns The median of `values`
 *
 * @public
 */
export function median(array: ArrayLike<number>): number;
/**
 * Calculate the median of an array of bigints.
 *
 * Time complexity: _O(1)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * const values = [1n, 2n, 3n];
 *
 * median(values); // 2n
 * ```
 *
 * @param array - Values to use in the calculation
 *
 * @see {@link (mean:2)} to calculate the mean of an array
 * @see {@link mode} to calculate the mode of an array
 *
 * @returns The median of `values`
 *
 * @public
 */
export function median(array: ArrayLike<bigint>): bigint;
export function median<T extends number>(array: ArrayLike<T>): T {
	const isEven = array.length % 2 === 0;
	const middleIndex = array.length / 2;

	if (isEven) {
		const divisor = (typeof array[0] === 'bigint' ? 2n : 2) as T;

		return ((array[middleIndex - 1] + array[middleIndex]) / divisor) as T;
	}

	return array[Math.floor(middleIndex)];
}

/**
 * Calculate the mode of an iterable.
 * Strict equality (`===`) is used to compare elements.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(n)_
 *
 * @example
 * ```js
 * const values = [1, 2, 2, 3, 3];
 *
 * mode(values); // [2, 3]
 * ```
 *
 * @param iterable - Values to use in the calculation
 *
 * @see {@link (mean:1)} to calculate the mean of an array
 * @see {@link (median:1)} to calculate the median of an array
 *
 * @returns An array of the modes of `values`
 *
 * @public
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
 * Time complexity: _O(1)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * const value = random(0, 10);
 *
 * 0 <= value && value < 10;
 * ```
 *
 * @param min - Lower bound (inclusive) of the output range
 * @param max - Upper bound (exclusive) of the output range
 *
 * @returns A random number within the given bounds
 *
 * @public
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
 * Time complexity: _O(1)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * randomInt(0, 3); // 0, 1, or 2
 * ```
 *
 * @param min - Lower bound (inclusive) of the output range
 * @param max - Upper bound (exclusive) of the output range
 *
 * @returns A random integer within the given bounds
 *
 * @public
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
 * Time complexity: _O(1)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * const value = clamp(Math.random() * 100, 25, 75n);
 *
 * console.log(25 <= value && value <= 75n); // true
 * ```
 *
 * @param value - The value to clamp
 * @param min - The lower bound of the range of numbers
 * @param max - The upper bound of the range of numbers
 *
 * @returns The value nearest to `value` which is within the provided range
 *
 * @public
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
