/**
 * Create a new function that calls the provided `fn` and negates the result.
 *
 * Time complexity: _O(1)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * import { nullish } from '@jonahsnider/util';
 *
 * const array = [0, null, '', undefined, false];
 *
 * array.filter(not(nullish)); // [0, '', false]
 * ```
 *
 * @param fn - Function to negate the return value of
 *
 * @returns The inverted return value of `fn`
 *
 * @public
 */
export function not<T extends (...parameters: any[]) => boolean>(fn: T): T {
	return ((...parameters) => !fn(...parameters)) as T;
}
