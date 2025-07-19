/**
 * A mutating (in-place) uniformly random array shuffle.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * const array = [1, 2, 3];
 *
 * shuffle(array);
 * ```
 *
 * @param array - Array to shuffle
 * @param mutate - Optional, `true` if specified
 *
 * @see {@link sample} if you only want to select one element at random
 *
 * @public
 * @category Array
 */
export function shuffle<T>(array: T[], mutate?: true): void;
/**
 * A non-mutating uniformly random array shuffle.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(n)_
 *
 * @example
 * ```js
 * const array = [1, 2, 3];
 *
 * const shuffled = shuffle(array, false);
 * ```
 *
 * @param array - Array to shuffle
 * @param mutate - `false`
 *
 * @see {@link sample} if you only want to select one element at random
 *
 * @returns The shuffled array
 *
 * @public
 * @category Array
 */
export function shuffle<T>(array: ArrayLike<T> & Iterable<T>, mutate: false): T[];
export function shuffle<T>(array: T[] | (ArrayLike<T> & Iterable<T>), mutate = true): undefined | T[] {
	const target: typeof array = mutate ? array : [...array];

	for (let index1 = target.length - 1; index1 > 0; index1--) {
		const index2 = Math.floor(Math.random() * (index1 + 1));
		[(target as T[])[index1], (target as T[])[index2]] = [target[index2], target[index1]];
	}

	if (!mutate) {
		return target as T[];
	}
}
