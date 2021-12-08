/**
 * Returns the last index of the first continuous group of a given value.
 * Strict equality (`===`) is used to compare elements.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * const iterable = ['a', 'a', 'b', 'b', 'c', 'c'];
 *
 * lastIndexOfFirstGroup(iterable, 'a'); // 1
 * ```
 *
 * @param iterable - The iterable to search
 * @param value - The value to search for
 *
 * @returns The last index of the first group of a given value
 *
 *  @see {@link firstIndexOfLastGroup} to do the same thing but find the first index of the last group
 *
 * @public
 * @category Iterable
 */
export function lastIndexOfFirstGroup<T>(iterable: Iterable<T>, value: T): number {
	let lastIndex = -1;
	let index = 0;

	for (const element of iterable) {
		if (element !== value) {
			break;
		}

		lastIndex = index;
		index++;
	}

	return lastIndex;
}
