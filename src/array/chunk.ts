import {mapFill} from './map-fill';
import type {Table} from '.';

// TODO: Consider implementing an overload that chunks iterables
/**
 * Divides an array into several chunks of `size`.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(n)_
 *
 * @example
 * ```js
 * chunk([1, 2, 3, 4, 5, 6], 2); // [[1, 2], [3, 4], [5, 6]]
 * ```
 *
 * @example
 * ```js
 * chunk([1, 2, 3, 4, 5, 6], 5); // [[1, 2, 3, 4, 5], [6]]
 * ```
 *
 * @example
 * ```js
 * chunk([1, 2, 3, 4, 5, 6], 6); // [[1], [2], [3], [4], [5], [6]]
 * ```
 *
 * @example
 * ```js
 * chunk([1, 2, 3, 4, 5, 6], 100); // [[1, 2, 3, 4, 5, 6]]
 * ```
 *
 * @param array - The array to chunk
 * @param size - The size of each chunk
 *
 * @returns The new array containing chunks of the original `array`
 *
 * @public
 * @category Array
 */
export function chunk<T>(array: readonly T[], size: number): Table<T> {
	return mapFill(i => array.slice(i * size, i * size + size), Math.ceil(array.length / size));
}
