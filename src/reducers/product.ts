/**
 * Calculate the product of 2 `number`s.
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
 * array.reduce(product); // 6
 * ```
 *
 * @param a - First factor
 * @param b - Second factor
 *
 * @returns The product of `a` and `b`
 *
 * @public
 */
export function product(a: number, b: number): number;
/**
 * Calculate the product of 2 `bigint`s.
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
 * array.reduce(product); // 6n
 * ```
 *
 * @param a - First factor
 * @param b - Second factor
 *
 * @returns The product of `a` and `b`
 *
 * @public
 */
export function product(a: bigint, b: bigint): bigint;
export function product<T extends number>(a: T, b: T): T {
	return (a * b) as T;
}
