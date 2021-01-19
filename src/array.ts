/** A 2-dimensional table of type `T`. */
export type Table<T> = T[][];

/**
 * A function used to determine the direction a search algorithm should take when traversing data to find a desired element.
 * @returns `0` when the desired element has been found. A positive number when the desired element appears after the current element. A negative number when
 * the desired element appears before the current element.
 *
 * @example
 * ```ts
 * function directionFn(value: number) {
 *   const squared = value ** 2;
 *
 *   if (squared === 64) {
 *   	return 0;
 *   }
 *
 *   return squared - 64;
 * }
 * ```
 */
export type DirectionFn<T> = (element: T) => number;

/**
 * Samples a single element at random from an array.
 *
 * @example
 * ```ts
 * const array = [1, 2, 3];
 *
 * sample(array); // 1, 2, or 3
 * ```
 *
 * @param array - Array to sample element from
 *
 * @returns A random element from the array
 */
// @ts-expect-error
export function sample<T>(array: T[]): T;
export function sample(array: readonly []): undefined;
export function sample<T>(array: [T]): T {
	return array[Math.floor(Math.random() * array.length)];
}

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

/**
 * Perform a binary search to find an element in a sorted array.
 *
 * @example
 * ```ts
 * const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 * function directionFn(value: number) {
 * 	const squared = value ** 2;
 *
 * 	if (squared === 64) {
 * 		return 0;
 * 	}
 *
 * 	return squared - 64;
 * }
 *
 * binarySearch(array, directionFn);
 * ```
 *
 * @param array - Sorted array to perform binary search on
 * @param directionFn - The function used to determine what direction to continue searching
 *
 * @returns The value of the first element in the array that satisfies the provided testing function. Otherwise, `undefined` is returned.
 */
export function binarySearch<T>(array: T[], directionFn: DirectionFn<T>): ReturnType<typeof array['find']> {
	// Start in the middle of the array
	let index = Math.trunc(array.length / 2);

	while (true) {
		const direction = directionFn(array[index]);

		if (direction > 0) {
			// Desired element appears after the current one

			let nextIndex = Math.trunc(index / 2);

			if (index === nextIndex) {
				return undefined;
			}

			index = nextIndex;
		} else if (direction < 0) {
			// Desired element appears before the current one

			let nextIndex = index + Math.trunc(index / 2);

			if (index === nextIndex) {
				return undefined;
			}

			index = nextIndex;
		} else {
			// All other cases have been exhausted

			return array[index];
		}
	}
}
