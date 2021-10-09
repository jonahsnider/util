/* eslint-disable no-bitwise */

/**
 * Calculate the bitwise AND of 2 `number`s.
 * Meant to be used with `Array.prototype.reduce`.
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
 */
export function and(a: number, b: number): number;
/**
 * Calculate the bitwise AND of 2 `bigint`s.
 * Meant to be used with `Array.prototype.reduce`.
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
 */
export function and(a: bigint, b: bigint): bigint;
export function and<T extends number>(a: T, b: T): T {
	return (a & b) as T;
}

/**
 * Calculate the bitwise OR of 2 `number`s.
 * Meant to be used with `Array.prototype.reduce`.
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
 */
export function or(a: number, b: number): number;
/**
 * Calculate the bitwise OR of 2 `bigint`s.
 * Meant to be used with `Array.prototype.reduce`.
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
 */
export function or(a: bigint, b: bigint): bigint;
export function or<T extends number>(a: T, b: T): T {
	return (a | b) as T;
}

/**
 * Calculate the bitwise XOR of 2 `number`s.
 * Meant to be used with `Array.prototype.reduce`.
 *
 * @example
 * ```js
 * const array = [5, 3];
 *
 * array.reduce(Bitwise.xor); // 6
 * ```
 *
 * @param a - First operand
 * @param b - Second operand
 *
 * @returns The bitwise XOR of `a` and `b`
 *
 * @public
 */
export function xor(a: number, b: number): number;
/**
 * Calculate the bitwise XOR of 2 `bigint`s.
 * Meant to be used with `Array.prototype.reduce`.
 *
 * @example
 * ```js
 * const array = [5n, 3n];
 *
 * array.reduce(Bitwise.xor); // 6n
 * ```
 *
 * @param a - First operand
 * @param b - Second operand
 *
 * @returns The bitwise XOR of `a` and `b`
 *
 * @public
 */
export function xor(a: bigint, b: bigint): bigint;
export function xor<T extends number>(a: T, b: T): T {
	return (a ^ b) as T;
}
