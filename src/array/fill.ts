/**
 * Create a new array of a specified length and fill it with a given value.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(n)_
 *
 * @example
 * ```js
 * fill('a', 3); // ['a', 'a', 'a']
 * ```
 *
 * @param value - Value to fill the array with
 * @param length - The length of the array
 *
 * @returns The filled array
 *
 * @see {@link mapFill} to do the same thing but with a function that generates values
 * @see {@link repeat} to do the same thing but return an iterable
 *
 * @public
 * @category Array
 */
// TODO: Swap order of parameters & update documentation example
export function fill<T>(value: T, length: number): T[] {
	return Array.from({length}, () => value);
}
