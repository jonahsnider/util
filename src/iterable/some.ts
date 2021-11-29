/**
 * Determines whether any of the elements of an iterable pass a given predicate.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * some([false], x => x); // false
 * ```
 * @example
 * ```js
 * some([false, true], x => x); // true
 * ```
 * @example
 * ```js
 * some([true], x => x); // true
 * ```
 *
 * @param iterable - The iterable to take elements from
 * @param predicate - The function to call on each element in the iterable to determine if it passes the test
 *
 * @returns `true` if any element passes the predicate, `false` otherwise
 *
 * @public
 * @category Iterable
 */
export function some<T>(iterable: Iterable<T>, predicate: (element: T) => unknown): boolean {
	for (const element of iterable) {
		if (predicate(element)) {
			return true;
		}
	}

	return false;
}
