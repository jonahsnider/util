/**
 * Create a new array of a specified length and fill it with a given value.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(n)_
 *
 * @example
 * ```js
 * fill(3, 'a'); // ['a', 'a', 'a']
 * ```
 *
 * @param length - The length of the array
 * @param value - Value to fill the array with
 *
 * @returns The filled array
 *
 * @see {@link mapFill} to do the same thing but with a function that generates values
 * @see {@link repeat} to do the same thing but return an iterable
 *
 * @public
 */
export function fill<T>(value: T, length: number): T[] {
	return Array.from({length}, () => value);
}
