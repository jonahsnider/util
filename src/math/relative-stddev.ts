import {mean} from './mean.js';
import {stddev} from './stddev.js';

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
 * @category Math
 */
export function relativeStddev(values: readonly number[], meanValue = mean(values)): number {
	return stddev(values, meanValue) / meanValue;
}
