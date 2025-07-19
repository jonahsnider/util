/**
 * Check if 2 or more iterables hold the same elements.
 * Strict equality (`===`) is used to compare elements.
 *
 * Time complexity: _O(n)_ where _n_ is the number of elements in the iterables
 *
 * Space complexity: _O(n)_
 *
 * @example
 * ```js
 * const a = [1, 2, 3];
 * const b = [1, 2, 3];
 * const c = [1, 2, 3];
 * const d = [1, 2, 3];
 * const e = [1, 2, 3];
 *
 * same(a, b, c, d, e); // true
 * ```
 *
 * @param iterables - Elements to compare
 *
 * @returns `true` if all elements are strictly equal, `false` otherwise
 *
 * @public
 */
export function same<T>(...iterables: readonly [Iterable<T>, Iterable<T>, ...Array<Iterable<T>>]): boolean {
	const iterators = iterables.map((item) => item[Symbol.iterator]());

	for (;;) {
		const nexts = iterators.map((iterator) => iterator.next());

		const [{ done, value }] = nexts;

		for (const next of nexts) {
			if (next.done) {
				return nexts.every((next) => next.done === done);
			}

			if (next.value !== value) {
				return false;
			}
		}
	}
}
