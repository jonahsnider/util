/** A 2-dimensional table of type `T`. */
export type Table<T> = T[][];

/** An array with at least one element. */
export type NonEmptyArray<T> = [T, ...T[]];

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
 * ```js
 * const array = [1, 2, 3];
 *
 * sample(array); // 1, 2, or 3
 * ```
 *
 * @param array - Array to sample element from
 *
 * @see {@link shuffle} if you want to implement a random selection without replacement
 *
 * @returns A random element from the array or `undefined` if the array was empty
 */
export function sample<T>(array: readonly T[]): T | undefined {
	return array[Math.floor(Math.random() * array.length)] as T | undefined;
}

/** @private */
function shuffle<T>(array: T[], mutate = true): void | T[] {
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
 * ```js
 * const array = [1, 2, 3];
 *
 * shuffle(array);
 * ```
 *
 * @example
 * ```js
 * const array = [1, 2, 3];
 *
 * const shuffled = shuffle(array, false);
 * ```
 *
 * @param array - Array to shuffle
 * @param mutate - `true` if `array` should be mutated in place, `false` if a new array should be created
 *
 * @see {@link sample} if you only want to select one element at random
 *
 * @returns `void` if `mutate` was `true`, the shuffled array if `mutate` was `false`
 */
const typedShuffle = shuffle as (<T>(array: T[]) => void) & (<T>(array: readonly T[], mutate: false) => T[]);

export {typedShuffle as shuffle};

/**
 * Perform a binary search to find an element in a sorted array.
 *
 * @example
 * ```js
 * const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 *
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
export function binarySearch<T>(array: readonly T[], directionFn: DirectionFn<T>): ReturnType<typeof array['find']> {
	let left = 0;
	let right = array.length - 1;

	while (left <= right) {
		let index = Math.trunc((left + right) / 2);
		const direction = directionFn(array[index]);

		if (direction < 0) {
			// Desired element appears before the current one

			left = index + 1;
		} else if (direction > 0) {
			// Desired element appears after the current one

			right = index - 1;
		} else {
			// All other cases have been exhausted

			return array[index];
		}
	}

	return undefined;
}

/**
 * Divides an array into several chunks of `size`.
 * If `size` is equal to the length of the array each item will be in their own array.
 *
 * @example
 * ```js
 * chunk([1, 2, 3, 4, 5, 6], 2); // [[1, 2 ], [ 3, 4 ], [ 5, 6 ] ]
 * ```
 *
 * @example
 * ```js
 * chunk([1, 2, 3, 4, 5, 6], 5); // [[1, 2, 3, 4, 5], [6]]
 * ```
 *
 * @example
 * ```js
 * chunk([1, 2, 3, 4, 5, 6], 6); // [[1], [2], [3], [4], [5], [6]]
 * ```
 *
 * @example
 * ```js
 * chunk([1, 2, 3, 4, 5, 6], 100); // [[1, 2, 3, 4, 5, 6]]
 * ```
 *
 * @param array - The array to chunk
 * @param size - The size of each chunk
 *
 * @returns The new array containing chunks of the original `array`
 */
export function chunk<T>(array: readonly T[], size: number): Table<T> {
	if (array.length === size) {
		return array.map(element => [element]);
	}

	return Array.from({length: Math.ceil(array.length / size)}, (_, i) => array.slice(i * size, i * size + size));
}

/**
 * A side-effect free reverse operation.
 * For best results `iterable` should be an array so that the returned array doesn't need to be resized as more elements are added.
 *
 * @example
 * ```js
 * reverse([1, 2, 3]); // [3, 2, 1]
 * ```
 *
 * @param iterable - The iterable to reverse
 *
 * @returns An array with the elements of `iterable` in reverse order
 */
export function reverse<T>(iterable: readonly T[] | Iterable<T>): T[] {
	if (Array.isArray(iterable)) {
		return Array.from({length: iterable.length}, (_, i) => iterable[iterable.length - (i + 1)]);
	}

	const result: T[] = [];

	for (const element of iterable) {
		result.unshift(element);
	}

	return result;
}

type ObjectWithLength = {length: number};
type ObjectWithSize = {size: number};

type ArrangedLargestToSmallest<A, B> = [largest: A, smallest: B] | [largest: B, smallest: A];

/**
 * Arrange two objects in a tuple by their length/size.
 * Useful for situations where you are iterating `a` or `b` depending on which is larger.
 *
 * @example
 * ```js
 * const a = [1, 2];
 * const b = [1, 2, 3];
 *
 * const [largest, smallest] = arrangeByLength(a, b);
 *
 * console.log(largest); // [1, 2, 3]
 * console.log(smallest); // [1, 2]
 * ```
 *
 * @param a - First object
 * @param b - Second object
 *
 * @throws If `a` does not have a `length` or `size` property
 */
export function largeToSmall<A extends ObjectWithLength, B extends ObjectWithLength>(a: A, b: B): ArrangedLargestToSmallest<A, B>;
export function largeToSmall<A extends ObjectWithSize, B extends ObjectWithSize>(a: A, b: B): ArrangedLargestToSmallest<A, B>;
export function largeToSmall<A extends ObjectWithSize | ObjectWithLength, B extends ObjectWithSize | ObjectWithLength>(
	a: A,
	b: B,
): ArrangedLargestToSmallest<A, B> {
	let key: 'size' | 'length' | undefined = undefined;

	if ('size' in a) {
		key = 'size';
	} else if ('length' in a) {
		key = 'length';
	}

	if (!key) {
		if (__DEV__) {
			throw new RangeError('Expected a to have a size property or a length property');
		}

		throw new RangeError();
	}

	// @ts-expect-error
	if (a[key] < b[key]) {
		return [b, a];
	}

	return [a, b];
}

/**
 * Get an array of indexes of holes in an array.
 *
 * @example
 * ```js
 * holes([0, , 2]); // [1]
 * ```
 *
 * @param array - The array to find holes in
 *
 * @returns An array of indexes of holes in the array
 */
export function holes<T>(array: readonly T[]): number[] {
	const result: number[] = [];

	for (let i = 0; i < array.length; i++) {
		if (!(i in array)) {
			result.push(i);
		}
	}

	return result;
}

/**
 * Remove an element from an array.
 *
 * @example
 * ```js
 * const array = [1, 2, 3];
 *
 * pull(array, 2); // [2]
 * console.log(array); // [1, 3]
 *
 * pull(array, 2); // []
 * console.log(array); // [1, 3]
 * ```
 *
 * @param array - The array to remove an element from
 * @param element - The element to remove
 *
 * @returns The return value of `Array.prototype.splice`
 */
export function pull<T>(array: T[], element: T): ReturnType<typeof array['splice']> {
	const index = array.indexOf(element);

	if (index === -1) {
		return [];
	}

	return array.splice(index, 1);
}
