/**
 * Get an array of all indexes of elements in an array that passed a given predicate.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(n)_
 *
 * @example
 * ```js
 * findIndexAll([1, 2, 1, 3, 1], (element) => element === 1); // [0, 2, 4]
 * ```
 *
 * @param array - The array to search in
 * @param predicate - The function to call for each element to decide whether it should be included in the result
 *
 * @returns An array of indexes of elements that passed `predicate` in `array`
 *
 * @see {@link indexOfAll} if you want to find all elements equal to a given value
 *
 * @public
 * @category Array
 */
export function findIndexAll<T>(array: ArrayLike<T>, predicate: (element: T, index: number) => boolean): number[] {
	const indexes: number[] = [];

	for (let index = 0; index < array.length; index++) {
		const element = array[index];

		if (predicate(element, index)) {
			indexes.push(index);
		}
	}

	return indexes;
}
