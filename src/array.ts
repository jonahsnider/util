import {repeat} from './iterable';
import {DirectionFn} from './types';

/** A 2-dimensional table of type `T`. */
export type Table<T> = T[][];

/** An array with at least 1 element. */
export type NonEmptyArray<T> = [T, ...T[]];

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

/**
 * A mutating (in-place) uniformly random array shuffle.
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
 */
export function shuffle<T>(array: T[], mutate?: true): void;
/**
 * A non-mutating uniformly random array shuffle.
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
 */
export function shuffle<T>(array: readonly T[], mutate: false): T[];
export function shuffle<T>(array: T[] | readonly T[], mutate = true): void | T[] {
	const target: typeof array = mutate ? array : [...array];

	for (let i = target.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[(target as T[])[i], (target as T[])[j]] = [target[j], target[i]];
	}

	if (!mutate) {
		return target as T[];
	}
}

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

	return mapFill(i => array.slice(i * size, i * size + size), Math.ceil(array.length / size));
}

type ObjectWithLength = {length: number};
type ObjectWithSize = {size: number};

type ArrangedLargestToSmallest<A, B> = [largest: A, smallest: B] | [largest: B, smallest: A];

/**
 * Arrange 2 objects in a tuple by their length/size.
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

/**
 * Replace the first occurrence of `searchElement` with `replacement` in an array.
 * Strict equality (`===`) is used to compare elements.
 *
 * @example
 * ```js
 * const array = [1, 2, 1, 3, 1];
 *
 * replace(array, 1, 2);
 *
 * console.log(array); // [2, 2, 1, 3, 1]
 * ```
 *
 * @param array - The array to replace elements in
 * @param searchElement - The element to search for
 * @param replacement - The element to replace `searchElement` with
 *
 * @returns The index of the replaced element, or `-1` if it is not present.
 */
export function replace<T>(array: T[], searchElement: T, replacement: T): number {
	const index = array.indexOf(searchElement);

	if (index !== -1) {
		array[index] = replacement;
	}

	return index;
}

/**
 * Replace all occurrences of `searchElement` with `replacement` in an array.
 * Strict equality (`===`) is used to compare elements.
 *
 * @example
 * ```js
 * const array = [1, 2, 1, 3, 1];
 *
 * replaceAll(array, 1, 2);
 *
 * console.log(array); // [2, 2, 2, 3, 2]
 * ```
 *
 * @param array - The array to replace elements in
 * @param searchElement - The element to search for
 * @param replacement - The element to replace `searchElement` with
 *
 * @returns The number of elements replaced
 */
export function replaceAll<T>(array: T[], searchElement: T, replacement: T): number {
	let timesReplaced = 0;

	for (let index = 0; index < array.length; index++) {
		if (array[index] === searchElement) {
			array[index] = replacement;

			timesReplaced++;
		}
	}

	return timesReplaced;
}

/**
 * Create a new array of a specified length and fill it with a given value.
 *
 * @example
 * ```js
 * fill(3, 'a'); // ['a', 'a', 'a']
 * ```
 *
 * @param length - The length of the array
 * @param value - Value to fill the array with
 *
 * @returns The filled array
 *
 * @see {@link mapFill} to do the same thing but with a function that generates values
 * @see {@link repeat} to do the same thing but return an iterable
 */
export function fill<T>(value: T, length: number): T[] {
	return Array.from({length}, () => value);
}

/**
 * Create a new array of a specified length and fill it using the given function.
 *
 * @example
 * ```js
 * mapFill(3, i => i + 1); // [1, 2, 3]
 * ```
 *
 * @param length - The length of the array
 * @param valueFn - A function that returns each value to fill the array with
 *
 * @returns The filled array
 *
 * @see {@link mapRepeat} to do the same thing but return an iterable
 * @see {@link fill} to do the same thing but with a given value
 */
export function mapFill<T>(valueFn: (index: number) => T, length: number): T[] {
	return Array.from({length}, (_, i) => valueFn(i));
}

/**
 * Pads an array with a given value so that the array reaches a given length.
 * The padding is applied from the start (left) of the array.
 *
 * @example
 * ```js
 * const array = [1, 2, 3];
 *
 * padStart(array, 4, 0);
 *
 * console.log(array); // [0, 1, 2, 3]
 * ```
 *
 * @param array - The array to pad
 * @param maxLength - The length of `array` once it has been padded. If this parameter is smaller than the current string's length, `array` will not be modified
 * @param fillValue - The value to pad the array with
 *
 * @see {@link padEnd} to pad the end of an array
 */
export function padStart<T>(array: T[], maxLength: number, fillValue: T): void {
	array.unshift(...repeat(fillValue, maxLength - array.length));
}

/**
 * Pads an array with a given value so that the array reaches a given length.
 * The padding is applied from the end (right) of the array.
 *
 * @example
 * ```js
 * const array = [0, 1, 2];
 *
 * padEnd(array, 4, 4);
 *
 * console.log(array); // [0, 1, 2, 4]
 * ```
 *
 * @param array - The array to pad
 * @param maxLength - The length of `array` once it has been padded. If this parameter is smaller than the current string's length, `array` will not be modified
 * @param fillValue - The value to pad the array with
 *
 * @see {@link padStart} to pad the start of an array
 */
export function padEnd<T>(array: T[], maxLength: number, fillValue: T): void {
	array.push(...repeat(fillValue, maxLength - array.length));
}

/**
 * Get an array of indexes of `searchElement` in an array.
 * 
 * @example
 * ```js
 * indexOfAll([1, 2, 1, 3, 1], 1); // [0, 2, 4]
 * ```
 * 
 * @param array - The array to search in
 * @param searchElement - The element to search for
 * 
 * @returns An array of indexes of `searchElement` in `array`
 */
export function indexOfAll<T>(array: readonly T[], searchElement: T): number[] {
	const indexes: number[] = [];

	for (let index = 0; index < array.length; index++) {
		const element = array[index];

		if (element === searchElement) {
			indexes.push(index);
		}
	}

	return indexes;
}
