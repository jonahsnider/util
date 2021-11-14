/**
 * Returns an iterable that repeats a given value a given number of times.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(n)_
 *
 * @example
 * ```js
 * [...repeat('a', 3)]; // ['a', 'a', 'a']
 * ```
 *
 * @param value - The value to repeat
 * @param times - The number of times to repeat the value
 *
 * @see {@link fill} to do the same thing but return an array
 * @see {@link mapRepeat} to do the same thing but with a function that generates values
 *
 * @returns An iterable that repeats `value` `times` number of times
 *
 * @public
 */
export function* repeat<T>(value: T, times: number): Iterable<T> {
	for (let index = 0; index < times; index++) {
		yield value;
	}
}
