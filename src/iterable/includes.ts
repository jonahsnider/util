/**
 * Determines whether an iterable includes a certain element, returning true or false as appropriate.
 * Strict equality (`===`) is used to compare elements.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * includes([1, 2, 3], 2); // true
 * ```
 *
 * @example
 * ```js
 * includes([1, 2, 3], 4); // false
 * ```
 *
 * @param iterable - The iterable to take elements from
 * @param searchElement - The element to search for
 *
 * @returns `true` if any element is truthy, `false` otherwise
 *
 * @public
 */
export function includes<T>(iterable: Iterable<T>, searchElement: T): boolean {
	for (const element of iterable) {
		if (element === searchElement) {
			return true;
		}
	}

	return false;
}
