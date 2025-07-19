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
 * @category Math
 */
export function normaldist(x: number, standardDeviation: number, mean: number): number {
	return (
		(1 / (standardDeviation * Math.sqrt(2 * Math.PI))) * Math.E ** ((-1 / 2) * (x - mean / standardDeviation) ** 2)
	);
}
