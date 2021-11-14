/**
 * Get an array of indexes of `searchElement` in an array.
 * Strict equality (`===`) is used to compare elements.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(n)_
 *
 * @example
 * ```js
 * indexOfAll([1, 2, 1, 3, 1], 1); // [0, 2, 4]
 * ```
 *
 * @param array - The array to search in
 * @param searchElement - The element to search for
 *
 * @returns An array of indexes of `searchElement` in `array`
 *
 * @see {@link findIndexAll} if you want to use a predicate instead of strict equality
 *
 * @public
 */
export function indexOfAll<T>(array: ArrayLike<T>, searchElement: T): number[] {
	const indexes: number[] = [];

	// eslint-disable-next-line unicorn/no-for-loop
	for (let index = 0; index < array.length; index++) {
		const element = array[index];

		if (element === searchElement) {
			indexes.push(index);
		}
	}

	return indexes;
}
