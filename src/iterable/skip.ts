/**
 * Returns an iterator that skips the first `count` elements of an iterable.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * const iterable = [1, 2, 3, 4, 5];
 *
 * const iterator = skip(iterable, 2);
 *
 * iterator.next(); // { value: 3, done: false }
 * ```
 *
 * @param iterable - The iterable to skip elements from
 * @param count - The number of elements to skip
 *
 * @returns The iterator that skips the first `count` elements of `iterable`
 *
 * @public
 * @category Iterable
 */
export function skip<T>(iterable: Iterable<T>, count: number): Iterator<T> {
	const iterator = iterable[Symbol.iterator]();

	for (let index = 0; index < count; index++) {
		const isDone = iterator.next().done;

		if (isDone) {
			break;
		}
	}

	return iterator;
}
