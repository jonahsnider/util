/**
 * Get an array of all the duplicate elements in an iterable.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(n)_
 *
 * @example
 * ```js
 * allDuplicates([1, 2, 2, 2, 3]); // [2, 2]
 * ```
 *
 * @example
 * Using {@link frequencyTable} to get the number of times each element was duplicated
 * ```js
 * frequencyTable(allDuplicates([1, 2, 2, 2, 3, 3])); // Map(2) { 2 => 2, 3 => 1 }
 * ```
 *
 * @see {@link duplicates} to receive a `Set` of duplicate elements instead of an array (which can include the same element more than once)
 *
 * @param iterable - The iterable to find duplicates in
 * @returns An array of the duplicated elements
 *
 * @public
 * @category Iterable
 */
export function allDuplicates<T>(iterable: Iterable<T>): T[] {
	const seen: Set<T> = new Set();
	const result: T[] = [];

	for (const element of iterable) {
		if (seen.has(element)) {
			result.push(element);
		} else {
			seen.add(element);
		}
	}

	return result;
}
