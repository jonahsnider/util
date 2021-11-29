/**
 * Calculate the sum of 2 `number`s.
 * Meant to be used with `Array.prototype.reduce`.
 *
 * Time complexity: _O(1)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * const array = [1, 2, 3];
 *
 * array.reduce(sum); // 6
 * ```
 *
 * @param a - First summand
 * @param b - Second summand
 *
 * @returns The sum of `a` and `b`
 *
 * @public
 * @category Reducers
 */
export function sum(a: number, b: number): number;
/**
 * Calculate the sum of 2 `bigint`s.
 * Meant to be used with `Array.prototype.reduce`.
 *
 * Time complexity: _O(1)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * const array = [1n, 2n, 3n];
 *
 * array.reduce(sum); // 6n
 * ```
 *
 * @param a - First summand
 * @param b - Second summand
 *
 * @returns The sum of `a` and `b`
 *
 * @public
 * @category Reducers
 */
export function sum(a: bigint, b: bigint): bigint;
export function sum<T extends number>(a: T, b: T): T {
	return (a + b) as T;
}
