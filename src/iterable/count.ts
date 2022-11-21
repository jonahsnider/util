/**
 * Count the number of elements in an iterable
 * You may optionally provide a predicate function to filter which elements are counted.
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
 * @example
 * ```js
 * count([1, 2, 3], number => number % 2 === 1); // 2
 * ```
 *
 * @param iterable - The iterable to count the elements of
 *
 * @returns The number of elements in `iterable`. If `predicate` was provided, the number of elements in `iterable` that satisfy `predicate`.
 *
 * @see {@link frequencyTable} to count the occurrences of all elements in an iterable
 *
 * @public
 * @category Iterable
 */
export function count<T>(iterable: Iterable<T>, filterPredicate?: undefined | ((element: T) => boolean)): number {
	let count = 0;

	if (filterPredicate) {
		for (const element of iterable) {
			if (filterPredicate(element)) {
				count++;
			}
		}
	} else {
		for (const _ of iterable) {
			count++;
		}
	}

	return count;
}
