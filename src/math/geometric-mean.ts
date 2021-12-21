import {product} from '../reducers/product';

/**
 * Get the geometric mean of an array of `number`s.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * const array = [1, 2, 3, 4];
 *
 * geometricMean(array); // 24 ** (1 / 4)
 * ```
 *
 * @param array - The array to calculate the mean of
 *
 * @see {@link (mean:1)} to calculate the arithmetic mean of an array
 *
 * @returns The geometric mean of the array
 *
 * @public
 * @category Math
 */
export function geometricMean(array: readonly number[]): number {
	return array.reduce(product) ** (1 / array.length);
}
