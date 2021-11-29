/**
 * Replace all occurrences of `searchElement` with `replacement` in an array.
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
 * replaceAll(array, 1, 2);
 *
 * console.log(array); // [2, 2, 2, 3, 2]
 * ```
 *
 * @param array - The array to replace elements in
 * @param searchElement - The element to search for
 * @param replacement - The element to replace `searchElement` with
 *
 * @returns The number of elements replaced
 *
 * @public
 * @category Array
 */
export function replaceAll<T>(array: T[], searchElement: T, replacement: T): number {
	let timesReplaced = 0;

	for (let index = 0; index < array.length; index++) {
		if (array[index] === searchElement) {
			array[index] = replacement;

			timesReplaced++;
		}
	}

	return timesReplaced;
}
