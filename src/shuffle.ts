/** @private */
function _shuffle<T>(array: T[], mutate = true): void | T[] {
	const target: typeof array = mutate ? array : [...array];

	for (let i = target.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[target[i], target[j]] = [target[j], target[i]];
	}

	if (!mutate) {
		return target;
	}
}

/**
 * A uniformly random array shuffle.
 *
 * @example
 * ```ts
 * const array = [1, 2, 3];
 *
 * shuffle(array);
 * ```
 *
 * @example
 * ```ts
 * const array = [1, 2, 3];
 *
 * const shuffled = shuffle(array, false);
 * ```
 *
 * @param array - Array to shuffle
 * @param mutate - `true` if `array` should be mutated in place, `false` if a new array should be created
 *
 * @returns `void` if `mutate` was `true`, the shuffled array if `mutate` was `false`
 */
// @ts-expect-error
export const shuffle: (<T>(array: T[]) => void) & (<T>(array: readonly T[], mutate: false) => T[]) = _shuffle;
