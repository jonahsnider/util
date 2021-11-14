/**
 * Returns the value of the first element in the iterable where `predicate` is truthy, and `undefined` otherwise.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * find([1, 2, 3], x => x === 2); // 2
 * ```
 *
 * @param iterable - The iterable to take elements from
 * @param predicate - The function to call on each element in the iterable to determine if it passes the test
 *
 * @returns The value of the first element in the iterable where `predicate` is truthy, and `undefined` otherwise
 *
 * @public
 */
export function find<T>(iterable: Iterable<T>, predicate: (element: T) => boolean): T | undefined {
	for (const element of iterable) {
		if (predicate(element)) {
			return element;
		}
	}

	return undefined;
}
