import {normaldist} from './normaldist';

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
 * @category Math
 */
export function standardNormaldist(x: number): number {
	return normaldist(x, 1, 0);
}
