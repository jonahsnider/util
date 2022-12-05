/**
 * Combines multiple iterables into a single iterable.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(n)_
 *
 * @example
 * ```js
 * [...concatIterables([1, 2, 3], [4, 5, 6])]; // [1, 2, 3, 4, 5, 6]
 * ```
 *
 * @param iterables - The iterables to combine
 *
 * @returns A single iterable containing all the elements of all the iterables
 *
 * @public
 * @category Iterable
 */
export function* concatIterables<T>(...iterables: ReadonlyArray<Iterable<T>>): Iterable<T> {
	for (const iterable of iterables) {
		yield* iterable;
	}
}
