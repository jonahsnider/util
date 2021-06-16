/**
 * Create a new function that calls the provided `fn` and negates the result.
 *
 * @example
 * ```ts
 * import { nullish } from '@jonahsnider/util';
 *
 * [0, null, '', undefined, false].filter(not(nullish)); // [0, '', false]
 * ```
 *
 * @param fn - Function to negate the return value of
 *
 * @returns The inverted return value of `fn`
 */
export function not<T extends (...params: any[]) => boolean>(fn: T): T {
	return ((...params) => !fn(...params)) as T;
}

/**
 * Create a new function taht calls the provided `fn` and then inverts the sign of the result.
 *
 * @example
 * ```ts
 * function sort(a, b) {
 *   return a - b;
 * }
 *
 * const inverted = invert(sort);
 *
 * inverted(10, 5); // -5
 * ```
 *
 * @param fn - Function to invert return value of
 *
 * @returns The inverted return value of `fn`
 */
export function invert<T extends (...params: any[]) => number | bigint>(fn: T): T {
	return ((...params) => -fn(...params)) as T;
}
