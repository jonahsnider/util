/**
 * Calculate the mode of an iterable.
 * Strict equality (`===`) is used to compare elements.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(n)_
 *
 * @example
 * ```js
 * const values = [1, 2, 2, 3, 3];
 *
 * mode(values); // [2, 3]
 * ```
 *
 * @param iterable - Values to use in the calculation
 *
 * @see {@link (mean:1)} to calculate the mean of an array
 * @see {@link (median:1)} to calculate the median of an array
 *
 * @returns An array of the modes of `values`
 *
 * @public
 * @category Math
 */
export function mode<T>(iterable: Iterable<T>): T[] {
	const frequencyTable = new Map<T, number>();
	let maxOccurrences = 0;
	let modes: T[] = [];

	for (const element of iterable) {
		const occurrences = frequencyTable.get(element);
		const newOccurrences = occurrences === undefined ? 1 : occurrences + 1;

		frequencyTable.set(element, newOccurrences);

		if (newOccurrences > maxOccurrences) {
			maxOccurrences = newOccurrences;
			modes = [element];
		} else if (newOccurrences === maxOccurrences) {
			modes.push(element);
		}
	}

	return modes;
}
