/**
 * Returns an iterable that uses a function that generates values a given number of times.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(n)_
 *
 * @example
 * ```js
 * [...mapRepeat((increment) => increment ** 2, 5)]; // [0, 1, 4, 9, 16]
 * ```
 *
 * @param valueFn - A function that returns each value to fill the array with
 * @param times - The number of times to repeat the value
 *
 * @see {@link mapFill} to do the same thing but return an array
 * @see {@link repeat} to do the same thing but with a given value
 *
 * @returns An iterable that repeats `value` `times` number of times
 *
 * @public
 * @category Iterable
 */
export function* mapRepeat<T>(valueFn: (increment: number) => T, times: number): Iterable<T> {
	for (let index = 0; index < times; index++) {
		yield valueFn(index);
	}
}
