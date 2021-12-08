/**
 * Calculate the *n*th triangular number for a provided `number`.
 *
 * Time complexity: _O(1)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * triangularNumber(2); // 3
 * ```
 *
 * @param value - The number to calculate the triangular number for
 *
 * @returns The *n*th triangular number for the provided `value`
 *
 * @public
 * @category Math
 */
export function triangularNumber(value: number): number;
/**
 * Calculate the *n*th triangular number for a provided `bigint`.
 *
 * Time complexity: _O(1)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * triangularNumber(2n); // 3n
 * ```
 *
 * @param value - The number to calculate the triangular number for
 *
 * @returns The *n*th triangular number for the provided `value`
 *
 * @public
 * @category Math
 */
export function triangularNumber(value: bigint): bigint;
export function triangularNumber(value: number | bigint): number | bigint {
	if (value < 0) {
		throw new RangeError('Value must be greater than or equal to 0');
	}

	if (typeof value === 'bigint') {
		return (value * (value + 1n)) / 2n;
	}

	return (value * (value + 1)) / 2;
}
