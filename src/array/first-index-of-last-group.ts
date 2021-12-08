/**
 * Returns the first index of the last continuous group of a given value.
 * Strict equality (`===`) is used to compare elements.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * const array = ['a', 'a', 'b', 'b', 'c', 'c'];
 *
 * firstIndexOfLastGroup(array, 'c'); // 4
 * ```
 *
 * @param array - The array to search
 * @param value - The value to search for
 *
 * @returns The first index of the last group of a given value
 *
 * @see {@link lastIndexOfFirstGroup} to do the same thing but find the last index of the first group
 *
 * @public
 * @category Array
 */
export function firstIndexOfLastGroup<T>(array: ArrayLike<T>, value: T): number {
	let firstIndex = -1;

	for (let index = array.length - 1; index >= 0; index--) {
		const element = array[index];
		if (element !== value) {
			break;
		}

		firstIndex = index;
	}

	return firstIndex;
}
