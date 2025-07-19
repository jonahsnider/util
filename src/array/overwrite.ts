/**
 * Overwrite elements in an array at a given index.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(n)_
 *
 * @example
 * ```js
 * const array = [1, 2, 3, 4, 5];
 *
 * overwrite(array, 1, [8, 9]); // [2, 3]
 *
 * console.log(array); // [1, 8, 9, 4, 5]
 * ```
 *
 * @param array - The array to overwrite elements in
 * @param startIndex - The index to start overwriting elements from
 * @param elements - The elements used to overwrite elements at `startIndex` in `array`
 *
 * @returns The return value of `Array.prototype.splice`
 *
 * @public
 * @category Array
 */
export function overwrite<T>(
	array: T[],
	startIndex: number,
	data: ArrayLike<T> & Iterable<T>,
): ReturnType<(typeof array)['splice']> {
	return array.splice(startIndex, startIndex + data.length - 1, ...data);
}
