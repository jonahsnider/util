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
