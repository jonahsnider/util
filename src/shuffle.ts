/** @private */
function _shuffle<T>(array: T[], mutate = true): void | T[] {
	const target: typeof array = mutate ? array : [...array];

	for (let i = target.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[target[i], target[j]] = [target[j], target[i]];
	}

	if (mutate) {
		return target;
	}
}

/**
 * Shuffles an array's elements uniformly random, in-place.
 * @param array - Array to shuffle
 * @param mutate - `true` if `array` should be mutated in place, `false` if a new array should be created
 */
// @ts-expect-error
export const shuffle: (<T>(array: T[]) => void) & (<T>(array: readonly T[], mutate: false) => T[]) = _shuffle;
