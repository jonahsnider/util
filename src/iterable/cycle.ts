/**
 * Returns an array with the elements of the iterable repeated a provided number of times.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(n)_
 *
 * @example
 * ```js
 * [...cycle(['a', 'b'], 2)]; // ['a', 'b', 'a', 'b']
 * ```
 *
 * @param iterable - The iterable to cycle
 * @param times - The number of times to repeat the elements of `iterable`
 *
 * @returns An array with the elements of `iterable` repeated `times` number of times
 *
 * @public
 * @category Iterable
 */
export function* cycle<T>(iterable: Iterable<T>, times: number): Iterable<T> {
	for (let index = 0; index < times; index++) {
		yield* iterable;
	}
}
