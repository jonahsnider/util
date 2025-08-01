import type { NumberLike } from '../types.js';

/**
 * Create a new function that calls the provided `fn` and then inverts the sign of the result.
 *
 * Time complexity: _O(1)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
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
 *
 * @public
 * @category Higher order
 */

// biome-ignore lint/suspicious/noExplicitAny: This is safe
export function invert<T extends (...parameters: any[]) => NumberLike>(func: T): T {
	// biome-ignore lint/style/noNonNullAssertion: This is safe
	return ((...parameters) => -func(...parameters)!) as T;
}
