/**
 * Samples a single element at random from an array.
 *
 * Time complexity: _O(1)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * const array = [1, 2, 3];
 *
 * sample(array); // 1, 2, or 3
 * ```
 *
 * @param array - Array to sample element from
 *
 * @see {@link (shuffle:1)} if you want to implement a random selection without replacement
 *
 * @returns A random element from the array or `undefined` if the array was empty
 *
 * @public
 * @category Array
 */
export function sample<T>(array: ArrayLike<T>): T | undefined {
	return array[Math.floor(Math.random() * array.length)] as T | undefined;
}
