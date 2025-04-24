import {sum} from '../reducers/sum.js';
import {mean} from './mean.js';

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
 * @category Math
 */
export function variance(values: readonly number[], meanValue = mean(values)): number {
	return values.map(value => (value - meanValue) ** 2).reduce(sum) / (values.length - 1);
}
