/**
 * Get the harmonic mean of an array of `number`s.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * const array = [1, 4, 4];
 *
 * harmonicMean(array); // 2
 * ```
 *
 * @param array - The array to calculate the mean of
 *
 * @see {@link (mean:1)} to calculate the arithmetic mean of an array
 * @see {@link geometricMean} to calculate the arithmetic mean of an array
 *
 * @returns The geometric mean of the array
 *
 * @public
 * @category Math
 */
export function harmonicMean(array: readonly number[]): number {
	return array.length / array.reduce((accumulator, x) => accumulator + 1 / x, 0);
}
