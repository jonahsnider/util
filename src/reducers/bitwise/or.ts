/**
 * Calculate the bitwise OR of 2 `number`s.
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
 * array.reduce(Bitwise.or); // 7
 * ```
 *
 * @param a - First operand
 * @param b - Second operand
 *
 * @returns The bitwise OR of `a` and `b`
 *
 * @public
 * @category Reducers
 */
export function or(a: number, b: number): number;
/**
 * Calculate the bitwise OR of 2 `bigint`s.
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
 * array.reduce(Bitwise.or); // 7n
 * ```
 *
 * @param a - First operand
 * @param b - Second operand
 *
 * @returns The bitwise OR of `a` and `b`
 *
 * @public
 * @category Reducers
 */
export function or(a: bigint, b: bigint): bigint;
export function or<T extends number>(a: T, b: T): T {
	return (a | b) as T;
}
