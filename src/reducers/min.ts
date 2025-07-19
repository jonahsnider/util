import type { Comparable } from '../types.js';

/**
 * Get the lowest value of the 2 parameters.
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
 * array.reduce(min); // 1
 * ```
 *
 * @param previousValue - Current lowest value seen
 * @param currentValue - The next value to compare
 *
 * @returns `previousValue` or `currentValue`, whichever is lower
 *
 * @public
 * @category Reducers
 */
export function min<A extends Comparable, B extends Comparable>(accumulator: A, currentValue: B): A | B {
	// biome-ignore lint/style/noNonNullAssertion: Comparing nullish values is fine
	return (currentValue as unknown as A)! < accumulator! ? currentValue : accumulator;
}
