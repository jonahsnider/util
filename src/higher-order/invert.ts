import type {NumberLike} from '../types.js';

/**
 * Create a new function taht calls the provided `fn` and then inverts the sign of the result.
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

export function invert<T extends (...parameters: any[]) => NumberLike>(func: T): T {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
	return ((...parameters) => -func(...parameters)!) as T;
}
