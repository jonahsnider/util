import { sum } from '../reducers/sum.js';

/**
 * Get the arithmetic mean of an array of `number`s.
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
 * @see {@link geometricMean} to calculate the geometric mean of an array
 * @see {@link harmonicMean} to calculate the harmonic mean of an array
 *
 * @returns The mean of the array
 *
 * @public
 * @category Math
 */
export function mean(array: readonly number[]): number;
/**
 * Get the arithmetic mean of an array of `bigint`s.
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
 * @category Math
 */
export function mean(array: readonly bigint[]): bigint;
export function mean<T extends number>(array: readonly T[]): T {
	const summed = (array as readonly number[]).reduce(sum) as unknown as T;

	const length = (typeof summed === 'bigint' ? BigInt(array.length) : array.length) as T;

	return (summed / length) as T;
}
