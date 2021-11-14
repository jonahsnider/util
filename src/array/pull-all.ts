import {indexOfAll} from './index-of-all';

/**
 * Remove all elements equal to a given element from an array.
 * Strict equality (`===`) is used to compare elements.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(n)_
 *
 * @example
 * ```js
 * const array = [1, 1, 2, 2, 3, 3];
 *
 * pullAll(array, 2); // [2, 2]
 * console.log(array); // [1, 1, 3, 3]
 *
 * pullAll(array, 2); // []
 * console.log(array); // [1, 1, 3, 3]
 * ```
 *
 * @param array - The array to remove elements from
 * @param element - The element to remove
 *
 * @returns The return value of `Array.prototype.splice`
 *
 * @public
 */
export function pullAll<T>(array: T[], element: T): ReturnType<typeof array['splice']> {
	const indexes = indexOfAll(array, element);

	// Reversing the indexes means we modify from end to start which has 2 benefits:
	// - We don't have to worry about shifting indexes as we splice elements
	// - We can avoid re-allocating the array as often
	indexes.reverse();

	const pulled: T[] = [];

	for (const index of indexes) {
		pulled.push(array.splice(index, 1)[0]);
	}

	return pulled;
}
