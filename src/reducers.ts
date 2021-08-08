/**
 * Calculate the sum of 2 `number`s.
 * Meant to be used with `Array.prototype.reduce`.
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
 */
export function sum(a: number, b: number): number;
/**
 * Calculate the sum of 2 `bigint`s.
 * Meant to be used with `Array.prototype.reduce`.
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
 */
export function sum(a: bigint, b: bigint): bigint;
export function sum<T extends number>(a: T, b: T): T {
	return (a + b) as T;
}

/**
 * Calculate the product of 2 `number`s.
 * Meant to be used with `Array.prototype.reduce`.
 *
 * @example
 * ```js
 * const array = [1, 2, 3];
 *
 * array.reduce(sum); // 6
 * ```
 *
 * @param a - First factor
 * @param b - Second factor
 *
 * @returns The product of `a` and `b`
 */
export function product(a: number, b: number): number;
/**
 * Calculate the product of 2 `bigint`s.
 * Meant to be used with `Array.prototype.reduce`.
 *
 * @example
 * ```js
 * const array = [1n, 2n, 3n];
 *
 * array.reduce(sum); // 6n
 * ```
 *
 * @param a - First factor
 * @param b - Second factor
 *
 * @returns The product of `a` and `b`
 */
export function product(a: bigint, b: bigint): bigint;
export function product<T extends number>(a: T, b: T): T {
	return (a * b) as T;
}

/**
 * Get the largest value of an array of `number`s.
 * Meant to be used with `Array.prototype.reduce`.
 *
 * @example
 * ```js
 * const array = [1, 2, 3];
 *
 * array.reduce(max); // 3
 * ```
 *
 * @param previousValue - Current largest number seen
 * @param currentValue - The next number to compare
 *
 * @returns `previousValue` or `currentValue`, whichever is larger
 */
export function max(accumulator: number, currentValue: number): number {
	return Math.max(accumulator, currentValue);
}

/**
 * Get the lowest value of an array of `number`s.
 * Meant to be used with `Array.prototype.reduce`.
 *
 * @example
 * ```js
 * const array = [1, 2, 3];
 *
 * array.reduce(min); // 1
 * ```
 *
 * @param previousValue - Current lowest number seen
 * @param currentValue - The next number to compare
 *
 * @returns `previousValue` or `currentValue`, whichever is lower
 */
export function min(accumulator: number, currentValue: number): number {
	return Math.min(accumulator, currentValue);
}
