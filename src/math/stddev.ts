import {variance} from './variance';
import {mean} from './mean';

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
 * @category Math
 */
export function stddev(values: readonly number[], meanValue = mean(values)): number {
	return Math.sqrt(variance(values, meanValue));
}
