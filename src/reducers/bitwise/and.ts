/* eslint-disable no-bitwise */

/**
 * Calculate the bitwise AND of 2 `number`s.
 * Meant to be used with `Array.prototype.reduce`.
 *
 * Time complexity: _O(1)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * const array = [5, 3];
 *
 * array.reduce(Bitwise.and); // 1
 * ```
 *
 * @param a - First operand
 * @param b - Second operand
 *
 * @returns The bitwise AND of `a` and `b`
 *
 * @public
 * @category Reducers
 */
export function and(a: number, b: number): number;
/**
 * Calculate the bitwise AND of 2 `bigint`s.
 * Meant to be used with `Array.prototype.reduce`.
 *
 * Time complexity: _O(1)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * const array = [5n, 3n];
 *
 * array.reduce(Bitwise.and); // 1n
 * ```
 *
 * @param a - First operand
 * @param b - Second operand
 *
 * @returns The bitwise AND of `a` and `b`
 *
 * @public
 * @category Reducers
 */
export function and(a: bigint, b: bigint): bigint;
export function and<T extends number>(a: T, b: T): T {
	return (a & b) as T;
}
