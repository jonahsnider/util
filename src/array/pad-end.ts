import {repeat} from '../iterable';

/**
 * Pads an array with a given value so that the array reaches a given length.
 * The padding is applied from the end (right) of the array.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(n)_
 *
 * @example
 * ```js
 * const array = [0, 1, 2];
 *
 * padEnd(array, 4, 4);
 *
 * console.log(array); // [0, 1, 2, 4]
 * ```
 *
 * @param array - The array to pad
 * @param maxLength - The length of `array` once it has been padded. If this parameter is smaller than `array`'s length, `array` will not be modified
 * @param fillValue - The value to pad the array with
 *
 * @see {@link padStart} to pad the start of an array
 *
 * @public
 * @category Array
 */
export function padEnd<T>(array: T[], maxLength: number, fillValue: T): void {
	array.push(...repeat(fillValue, maxLength - array.length));
}
