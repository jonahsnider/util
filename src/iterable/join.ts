/**
 * Adds all the elements of an iterable into a string, separated by the specified separator string.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(n)_
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
 *
 * @public
 * @category Iterable
 */
export function join(iterable: Iterable<unknown>, separator = ','): string {
	let result = '';

	const iterator = iterable[Symbol.iterator]();

	let next = iterator.next();

	// eslint-disable-next-line no-constant-condition
	while (true) {
		const previous = next;
		next = iterator.next();

		result += previous.value;

		if (next.done) {
			return result;
		}

		result += separator;
	}
}
