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
 * @category Math
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
 * @category Math
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
