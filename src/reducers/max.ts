import type { Comparable } from '../types.js';

/**
 * Get the largest value of the 2 parameters.
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
 * array.reduce(max); // 3
 * ```
 *
 * @param previousValue - Current largest value seen
 * @param currentValue - The next value to compare
 *
 * @returns `previousValue` or `currentValue`, whichever is larger
 *
 * @public
 * @category Reducers
 */
export function max<A extends Comparable, B extends Comparable>(accumulator: A, currentValue: B): A | B {
	// biome-ignore lint/style/noNonNullAssertion: Comparing nullish values is fine
	return (currentValue as unknown as A)! > accumulator! ? currentValue : accumulator;
}
