/**
 * Count the number of elements in an iterable.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * count([1, 2, 3]); // 3
 * ```
 *
 * @param iterable - The iterable to count the elements of
 *
 * @returns The number of elements in `iterable`
 *
 * @see {@link frequencyTable} to count the occurrences of all elements in an iterable
 *
 * @public
 * @category Iterable
 */
export function count(iterable: Iterable<unknown>): number {
	let count = 0;

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	for (const _ of iterable) {
		count++;
	}

	return count;
}
