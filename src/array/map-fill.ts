/**
 * Create a new array of a specified length and fill it using the given function.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(n)_
 *
 * @example
 * ```js
 * mapFill(i => i + 1, 3); // [1, 2, 3]
 * ```
 *
 * @param valueFn - A function that returns each value to fill the array with
 * @param length - The length of the array
 *
 * @returns The filled array
 *
 * @see {@link mapRepeat} to do the same thing but return an iterable
 * @see {@link fill} to do the same thing but with a given value
 *
 * @public
 * @category Array
 */
// TODO: Swap the order of valueFn and length
export function mapFill<T>(valueFunction: (index: number) => T, length: number): T[] {
	return Array.from({length}, (_, i) => valueFunction(i));
}
