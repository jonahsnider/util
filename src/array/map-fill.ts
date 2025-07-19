/**
 * Create a new array of a specified length and fill it using the given function.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(n)_
 *
 * @example
 * ```js
 * mapFill(3, i => i + 1); // [1, 2, 3]
 * ```
 *
 * @param length - The length of the array
 * @param valueFn - A function that returns each value to fill the array with
 *
 * @returns The filled array
 *
 * @see {@link mapRepeat} to do the same thing but return an iterable
 * @see {@link fill} to do the same thing but with a given value
 *
 * @public
 * @category Array
 */
export function mapFill<T>(length: number, valueFunction: (index: number) => T): T[] {
	return Array.from({length}, (_, i) => valueFunction(i));
}
