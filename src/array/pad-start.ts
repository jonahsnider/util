import {repeat} from '../iterable';

/**
 * Pads an array with a given value so that the array reaches a given length.
 * The padding is applied from the start (left) of the array.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(n)_
 *
 * @example
 * ```js
 * const array = [1, 2, 3];
 *
 * padStart(array, 4, 0);
 *
 * console.log(array); // [0, 1, 2, 3]
 * ```
 *
 * @param array - The array to pad
 * @param maxLength - The length of `array` once it has been padded. If this parameter is smaller than the current string's length, `array` will not be modified
 * @param fillValue - The value to pad the array with
 *
 * @see {@link padEnd} to pad the end of an array
 *
 * @public
 */
export function padStart<T>(array: T[], maxLength: number, fillValue: T): void {
	array.unshift(...repeat(fillValue, maxLength - array.length));
}
