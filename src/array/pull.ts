/**
 * Remove an element from an array.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(n)_
 *
 * @example
 * ```js
 * const array = [1, 2, 3];
 *
 * pull(array, 2); // [2]
 * console.log(array); // [1, 3]
 *
 * pull(array, 2); // []
 * console.log(array); // [1, 3]
 * ```
 *
 * @param array - The array to remove an element from
 * @param element - The element to remove
 *
 * @returns The return value of `Array.prototype.splice`
 *
 * @public
 */
export function pull<T>(array: T[], element: T): ReturnType<typeof array['splice']> {
	const index = array.indexOf(element);

	if (index === -1) {
		return [];
	}

	return array.splice(index, 1);
}
