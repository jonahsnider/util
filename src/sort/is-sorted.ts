import type { CompareFn } from '../types.js';

/**
 * Check whether an array is sorted according to a given compare function.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * import { Sort } from '@jonahsnider/util';
 *
 * const array = [1, 2, 3, 4, 5];
 *
 * isSorted(array, (a, b) => a - b);
 * ```
 *
 * @param array - Array to check
 * @param compareFn - Function to compare elements
 *
 * @returns Whether the array is sorted according to the given compare function
 *
 * @public
 * @category Sort
 */
export function isSorted<T>(array: ArrayLike<T>, compareFunction: CompareFn<T>): boolean {
	for (let index = 0; index < array.length - 1; index++) {
		const element = array[index];
		const next = array[index + 1];

		if (compareFunction(element, next) > 0) {
			return false;
		}
	}

	return true;
}
