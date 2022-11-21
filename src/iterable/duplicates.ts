/**
 * Get a `Set` of the duplicate elements in an iterable.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(n)_
 *
 * @example
 * ```js
 * duplicates([1, 2, 2, 2, 3]); // Set(1) { 2 }
 * ```
 *
 * @see {@link allDuplicates} to receive a array of duplicate elements instead of a `Set` (which doesn't include the same element more than once)
 *
 * @param iterable - The iterable to find duplicates in
 * @returns A `Set` of the duplicated elements
 *
 * @public
 * @category Iterable
 */
export function duplicates<T>(iterable: Iterable<T>): Set<T> {
	const seen = new Set<T>();
	const result = new Set<T>();

	for (const element of iterable) {
		if (seen.has(element)) {
			result.add(element);
		} else {
			seen.add(element);
		}
	}

	return result;
}
