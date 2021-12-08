/**
 * Returns an iterable that uses a provided iterator.
 *
 * Time complexity: _O(1)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * const iterable = [1, 2, 3];
 * const iterator = iterable[Symbol.iterator]();
 *
 * iteratorToIterable(iterator); // { [Symbol.iterator]: () => iterator }
 * ```
 *
 * @param iterator - The iterator to convert to an iterable
 *
 * @returns An iterable that uses `iterator`
 *
 * @public
 * @category Iterable
 */
export function iteratorToIterable<T>(iterator: Iterator<T>): Iterable<T> {
	return {
		[Symbol.iterator]: () => iterator,
	};
}
