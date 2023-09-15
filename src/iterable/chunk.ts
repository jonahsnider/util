import type {Table} from '../array';
import {mapFill} from '../array/map-fill';

function chunkArray<T>(array: readonly T[], size: number): Table<T> {
	return mapFill(i => array.slice(i * size, i * size + size), Math.ceil(array.length / size));
}

function* chunkIterable<T>(iterable: Iterable<T>, size: number): IterableIterator<T[]> {
	let chunk: T[] = [];

	for (const element of iterable) {
		chunk.push(element);

		if (chunk.length === size) {
			yield chunk;
			chunk = [];
		}
	}

	if (chunk.length > 0) {
		yield chunk;
	}
}

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
export function chunk<T>(array: readonly T[], size: number): Table<T>;
/**
 * Divides an iterable into several chunks of `size`.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(n)_
 *
 * @example
 * ```js
 * [...chunk(new Set([1, 2, 3, 4, 5, 6]), 2)]; // [[1, 2], [3, 4], [5, 6]]
 * ```
 *
 * @example
 * ```js
 * [...chunk(new Set([1, 2, 3, 4, 5, 6]), 5)]; // [[1, 2, 3, 4, 5], [6]]
 * ```
 *
 * @example
 * ```js
 * [...chunk(new Set([1, 2, 3, 4, 5, 6]), 6)]; // [[1], [2], [3], [4], [5], [6]]
 * ```
 *
 * @example
 * ```js
 * [...chunk(new Set([1, 2, 3, 4, 5, 6]), 100)]; // [[1, 2, 3, 4, 5, 6]]
 * ```
 *
 * @param iterable - The iterable to chunk
 * @param size - The size of each chunk
 *
 * @returns An iterator yieliding new arrays containing chunks of the original `iterable`
 *
 * @public
 * @category Iterable
 */
export function chunk<T>(iterable: Iterable<T>, size: number): IterableIterator<T[]>;
export function chunk<T>(arrayOrIterable: readonly T[] | Iterable<T>, size: number): Table<T> | IterableIterator<T[]> {
	if (Array.isArray(arrayOrIterable)) {
		return chunkArray<T>(arrayOrIterable, size);
	}

	return chunkIterable<T>(arrayOrIterable, size);
}
