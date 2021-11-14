import type {Comparable} from '../types';

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
 */
export function min<A extends Comparable, B extends Comparable>(accumulator: A, currentValue: B): A | B {
	return (currentValue as unknown as A)! < accumulator! ? currentValue : accumulator;
}
