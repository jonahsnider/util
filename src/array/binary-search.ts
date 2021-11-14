import type {DirectionFn} from '../types';

/**
 * Perform a binary search to find an element in a sorted array.
 *
 * Time complexity: _O(log n)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 *
 * function directionFn(value: number) {
 * 	const squared = value ** 2;
 *
 * 	if (squared === 64) {
 * 		return 0;
 * 	}
 *
 * 	return squared - 64;
 * }
 *
 * binarySearch(array, directionFn);
 * ```
 *
 * @param array - Sorted array to perform binary search on
 * @param directionFn - The function used to determine what direction to continue searching
 *
 * @returns The value of the first element in the array that satisfies the provided testing function. Otherwise, `undefined` is returned.
 *
 * @public
 */
export function binarySearch<T>(array: ArrayLike<T>, directionFn: DirectionFn<T>): ReturnType<T[]['find']> {
	let left = 0;
	let right = array.length - 1;

	while (left <= right) {
		const index = Math.trunc((left + right) / 2);
		const direction = directionFn(array[index]);

		if (direction < 0) {
			// Desired element appears before the current one
			left = index + 1;
		} else if (direction > 0) {
			// Desired element appears after the current one
			right = index - 1;
		} else {
			// All other cases have been exhausted
			return array[index];
		}
	}

	return undefined;
}
