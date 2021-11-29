/**
 * Determines whether all the elements of an iterable pass a given predicate.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * every([false], x => x); // false
 * ```
 * @example
 * ```js
 * every([false, true], x => x); // false
 * ```
 * @example
 * ```js
 * every([true], x => x); // true
 * ```
 *
 * @param iterable - The iterable to take elements from
 * @param predicate - The function to call on each element in the iterable to determine if it passes the test
 *
 * @returns `true` if every element passed the predicate, `false` otherwise
 *
 * @public
 * @category Iterable
 */
export function every<T, S extends T>(iterable: Iterable<T>, predicate: (element: T) => element is S): iterable is Iterable<S>;
/**
 * Determines whether all the elements of an iterable pass a given predicate.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * every([false], x => x); // false
 * ```
 * @example
 * ```js
 * every([false, true], x => x); // false
 * ```
 * @example
 * ```js
 * every([true], x => x); // true
 * ```
 *
 * @param iterable - The iterable to take elements from
 * @param predicate - The function to call on each element in the iterable to determine if it passes the test
 *
 * @returns `true` if every element passed the predicate, `false` otherwise
 *
 * @public
 * @category Iterable
 */
export function every<T>(iterable: Iterable<T>, predicate: (element: T) => unknown): boolean;
export function every<T>(iterable: Iterable<T>, predicate: (element: T) => unknown): boolean {
	for (const element of iterable) {
		if (!predicate(element)) {
			return false;
		}
	}

	return true;
}
