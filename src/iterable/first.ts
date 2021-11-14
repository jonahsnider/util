function* firstIterable<T>(iterable: Iterable<T>, take: number): Iterable<T> {
	for (const element of iterable) {
		if (take--) {
			yield element;
		} else {
			break;
		}
	}
}

/**
 * Get the first element from an iterable.
 *
 * Time complexity: _O(1)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * first([1, 2, 3]); // 1
 * ```
 *
 * @param iterable - The iterable to take elements from
 *
 * @returns The first element of the iterable
 *
 * @public
 */
export function first<T>(iterable: Iterable<T>, take?: undefined): T | undefined;
/**
 * Get the first `n` elements from an iterable.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(n)_
 *
 * @example
 * ```js
 * [...first([1, 2, 3], 1)]; // [1]
 * ```
 *
 * @example
 * ```js
 * [...first([1, 2, 3], 2)]; // [1, 2]
 * ```
 *
 * @param iterable - The iterable to take elements from
 * @param take - The number of elements to take from the iterable
 *
 * @returns The first `take` elements of the iterable
 *
 * @public
 */
export function first<T>(iterable: Iterable<T>, take: number): Iterable<T>;
export function first<T>(iterable: Iterable<T>, take?: number): (T | undefined) | Iterable<T> {
	if (take === undefined) {
		// eslint-disable-next-line no-unreachable-loop
		for (const element of iterable) {
			return element;
		}

		return undefined;
	}

	return firstIterable(iterable, take);
}
