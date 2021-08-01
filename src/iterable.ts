/**
 * Combines multiple iterables into a single iterable.
 *
 * @example
 * ```js
 * [...combineIterables([1, 2, 3], [4, 5, 6])]; // [1, 2, 3, 4, 5, 6]
 * ```
 *
 * @params iterables - The iterables to combine
 *
 * @returns A single iterable containing all the elements of all the iterables
 */
export function* combineIterables<T>(...iterables: Iterable<T>[]): Iterable<T> {
	for (const iterable of iterables) {
		yield* iterable;
	}
}

/**
 * Adds all the elements of an iterable into a string, separated by the specified separator string.
 *
 * @example
 * ```js
 * join(['a', 'b', 'c']); // 'a,b,c'
 * ```
 *
 * @example
 * ```js
 * join(['a', 'b', 'c'], '-'); // 'a-b-c'
 * ```
 *
 * @param iterable - The iterable to join
 * @param separator - A string used to separate one element of the iterable from the next in the resulting string
 *
 * @returns A string containing the elements in iterable joined by separator
 */
export function join<T>(iterable: Iterable<T>, separator = ','): string {
	let result = '';

	const iterator = iterable[Symbol.iterator]();

	let next = iterator.next();

	while (true) {
		const prev = next;
		next = iterator.next();

		result += prev.value;

		if (next.done) {
			return result;
		} else {
			result += separator;
		}
	}
}
