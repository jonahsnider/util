/**
 * Construct a frequency table from an iterable.
 * Similar to [Python's `Counter` class](https://docs.python.org/3/library/collections.html#collections.Counter).
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(n)_
 *
 * @example
 * ```js
 * frequencyTable([1, 2, 2, 3, 3, 3]) // Map(3) { 1 => 1, 2 => 2, 3 => 3 };
 * ```
 *
 * @param iterable - The iterable to construct a frequency table for
 *
 * @returns A frequency table represented as a `Map` where keys are the elements and values are the frequency
 *
 * @see {@link count} to count the occurrences of one value in an iterable
 *
 * @public
 * @category Iterable
 */
export function frequencyTable<T>(iterable: Iterable<T>): Map<T, number> {
	const frequencies = new Map<T, number>();

	for (const element of iterable) {
		// This is a perfect candidate for a DefaultMap but that means the return value wouldn't be a pure Map
		const newOccurrences = (frequencies.get(element) ?? 0) + 1;

		frequencies.set(element, newOccurrences);
	}

	return frequencies;
}
