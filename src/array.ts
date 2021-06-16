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
 * ```ts
 * const array = [1, 2, 3];
 *
 * sample(array); // 1, 2, or 3
 * ```
 *
 * @param array - Array to sample element from
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
const typedShuffle = shuffle as (<T>(array: T[]) => void) & (<T>(array: readonly T[], mutate: false) => T[]);

export {typedShuffle as shuffle};

/**
 * Perform a binary search to find an element in a sorted array.
 *
 * @example
 * ```ts
 * const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 *
 * function directionFn(value) {
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
 * ```ts
 * chunk([1, 2, 3, 4, 5, 6], 2); // [[1, 2 ], [ 3, 4 ], [ 5, 6 ] ]
 * ```
 *
 * @example
 * ```ts
 * chunk([1, 2, 3, 4, 5, 6], 5); // [[1, 2, 3, 4, 5], [6]]
 * ```
 *
 * @example
 * ```ts
 * chunk([1, 2, 3, 4, 5, 6], 6); // [[1], [2], [3], [4], [5], [6]]
 * ```
 *
 * @example
 * ```ts
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
 * Construct a frequency table from an iterable.
 *
 * @example
 * ```ts
 * frequencyTable([1, 2, 2, 3, 3, 3]) // Map(3) { 1 => 1, 2 => 2, 3 => 3 };
 * ```
 *
 * @param iterable - The iterable to construct a frequency table for
 *
 * @returns A frequency table represented as a `Map` where keys are the elements and values are the frequency
 */
export function frequencyTable<T>(iterable: Iterable<T>): Map<T, number> {
	const frequencies: Map<T, number> = new Map();

	for (const element of iterable) {
		const occurrences = frequencies.get(element);
		const newOccurrences = occurrences ? occurrences + 1 : 1;

		frequencies.set(element, newOccurrences);
	}

	return frequencies;
}

/**
 * A side-effect free reverse operation.
 * For best results `iterable` should be an array so that the returned array doesn't need to be resized as more elements are added.
 *
 * @example
 * ```ts
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

/**
 * Split an iterable into two arrays of elements that passed or failed a provided predicate.
 *
 * @example
 * ```ts
 * const [odd, even] = partition([1, 2, 3, 4, 5, 6], num => num % 2);
 * ```
 *
 * @param iterable - The iterable to partition
 * @param predicate - The predicate to apply to each element of `iterable`. If the predicate returns a truthy value the element will be added to the `passed`
 * array in the result. Otherwise, it will be added to the `failed` array.
 *
 * @returns A tuple where the 1st element is an array of elements that passed the predicate (`passed`) and the 2nd element are the elements that failed the predicate (`failed`)
 */
export function partition<T>(iterable: Iterable<T>, predicate: (value: T, index: number) => unknown): [passed: T[], failed: T[]] {
	const passed: T[] = [];
	const failed: T[] = [];
	let index = 0;

	for (const element of iterable) {
		const array = predicate(element, index++) ? passed : failed;

		array.push(element);
	}

	return [passed, failed];
}

/**
 * Get the first element from an iterable.
 *
 * @example
 * ```ts
 * first([1, 2, 3]); // 1
 * ```
 *
 * @param iterable - The iterable to take elements from
 *
 * @returns The first element of the iterable
 */
export function first<T>(iterable: Iterable<T>, take?: undefined): T | undefined;
/**
 * Get the first `n` elements from an iterable.
 *
 * @example
 * ```ts
 * first([1, 2, 3], 1); // [1]
 * ```
 *
 * @example
 * ```ts
 * first([1, 2, 3], 2); // [1, 2]
 * ```
 *
 * @param iterable - The iterable to take elements from
 * @param take - The number of elements to take from the iterable
 *
 * @returns The first `take` elements of the iterable
 */
export function first<T>(iterable: Iterable<T>, take?: number): T[];
export function first<T>(iterable: Iterable<T>, take?: number): (T | undefined) | T[] {
	const iterator: Iterator<T, T | undefined> = iterable[Symbol.iterator]();

	if (take === undefined) {
		return iterator.next().value;
	}

	const result: T[] = [];

	for (let i = 0; i < take; i++) {
		const element = iterator.next();

		if (element.done) {
			break;
		}

		result.push(element.value);
	}

	return result;
}

/**
 * Get an array of all the duplicate elements in an iterable.
 *
 * @example
 * ```ts
 * allDuplicates([1, 2, 2, 2, 3]); // [2, 2]
 * ```
 *
 * @see {@link duplicates} to receive a `Set` of duplicate elements instead of an array (which can include the same element more than once)
 *
 * @param iterable - The iterable to find duplicates in
 * @returns An array of the duplicated elements
 */
export function allDuplicates<T>(iterable: Iterable<T>): T[] {
	const seen: Set<T> = new Set();
	const result: T[] = [];

	for (const element of iterable) {
		if (seen.has(element)) {
			result.push(element);
		}

		seen.add(element);
	}

	return result;
}

/**
 * Get a Set of the duplicate elements in an iterable.
 *
 * @example
 * ```ts
 * duplicates([1, 2, 2, 2, 3]); // Set(1) { 2 }
 * ```
 *
 * @see {@link allDuplicates} to receive a array of duplicate elements instead of a `Set` (which doesn't include the same element more than once)
 *
 * @param iterable - The iterable to find duplicates in
 * @returns A `Set` of the duplicated elements
 */
export function duplicates<T>(iterable: Iterable<T>): Set<T> {
	const seen: Set<T> = new Set();
	const result: Set<T> = new Set();

	for (const element of iterable) {
		if (seen.has(element)) {
			result.add(element);
		}

		seen.add(element);
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
 * ```ts
 * const [largest, smallest] = arrangeByLength(a, b);
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
	b: B
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
