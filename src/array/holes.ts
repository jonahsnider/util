/**
 * Get an array of indexes of holes in an array.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(n)_
 *
 * @example
 * ```js
 * holes([0, , 2]); // [1]
 * ```
 *
 * @param array - The array to find holes in
 *
 * @returns An array of indexes of holes in the array
 *
 * @public
 */
export function holes(array: ArrayLike<unknown>): number[] {
	const result: number[] = [];

	for (let index = 0; index < array.length; index++) {
		if (!(index in array)) {
			result.push(index);
		}
	}

	return result;
}
