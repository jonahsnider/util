/**
 * Replace the first occurrence of `searchElement` with `replacement` in an array.
 * Strict equality (`===`) is used to compare elements.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * const array = [1, 2, 1, 3, 1];
 *
 * replace(array, 1, 2);
 *
 * console.log(array); // [2, 2, 1, 3, 1]
 * ```
 *
 * @param array - The array to replace elements in
 * @param searchElement - The element to search for
 * @param replacement - The element to replace `searchElement` with
 *
 * @returns The index of the replaced element, or `-1` if it is not present.
 *
 * @public
 * @category Array
 */
export function replace<T>(array: T[], searchElement: T, replacement: T): number {
	const index = array.indexOf(searchElement);

	if (index !== -1) {
		array[index] = replacement;
	}

	return index;
}
