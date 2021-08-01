/**
 * Combines multiple iterables into a single iterable.
 *
 * @example
 * ```js
 * [...combineIterables([1, 2, 3], [4, 5, 6])]; // [1, 2, 3, 4, 5, 6]
 * ```
 *
 * @params iterables - The iterables to combine
 *
 * @returns A single iterable containing all the elements of all the iterables
 */
export function* combineIterables<T>(...iterables: Iterable<T>[]): Iterable<T> {
	for (const iterable of iterables) {
		yield* iterable;
	}
}

/**
 * Adds all the elements of an iterable into a string, separated by the specified separator string.
 *
 * @example
 * ```js
 * join(['a', 'b', 'c']); // 'a,b,c'
 * ```
 *
 * @example
 * ```js
 * join(['a', 'b', 'c'], '-'); // 'a-b-c'
 * ```
 *
 * @param iterable - The iterable to join
 * @param separator - A string used to separate one element of the iterable from the next in the resulting string
 *
 * @returns A string containing the elements in iterable joined by separator
 */
export function join<T>(iterable: Iterable<T>, separator = ','): string {
	let result = '';

	const iterator = iterable[Symbol.iterator]();

	let next = iterator.next();

	while (true) {
		const prev = next;
		next = iterator.next();

		result += prev.value;

		if (next.done) {
			return result;
		} else {
			result += separator;
		}
	}
}

/**
 * Determines whether all the elements of an iterable are truthy.
 *
 * @example
 * ```js
 * every([false]); // false
 * ```
 * @example
 * ```js
 * every([false, true]); // false
 * ```
 * @example
 * ```js
 * every([true]); // true
 * ```
 *
 * @param iterable - The iterable to take elements from
 * @param predicate - The function to call on each element in the iterable to determine if it passes the test
 *
 * @returns `true` if every element is truthy, `false` otherwise
 */
export function every<T, S extends T>(iterable: Iterable<T>, predicate: (element: T) => element is S): iterable is Iterable<S>;
export function every<T>(iterable: Iterable<T>, predicate: (element: T) => unknown): boolean;
export function every<T>(iterable: Iterable<T>, predicate: (element: T) => unknown): boolean {
	for (const element of iterable) {
		if (!predicate(element)) {
			return false;
		}
	}

	return true;
}

/**
 * Determines whether any of the elements of an iterable are truthy.
 *
 * @example
 * ```js
 * some([false]); // false
 * ```
 * @example
 * ```js
 * some([false, true]); // true
 * ```
 * @example
 * ```js
 * some([true]); // true
 * ```
 *
 * @param iterable - The iterable to take elements from
 * @param predicate - The function to call on each element in the iterable to determine if it passes the test
 *
 * @returns `true` if any element passes the predicate, `false` otherwise
 */
export function some<T>(iterable: Iterable<T>, predicate: (element: T) => unknown): boolean {
	for (const element of iterable) {
		if (predicate(element)) {
			return true;
		}
	}

	return false;
}

/**
 * Determines whether an iterable includes a certain element, returning true or false as appropriate.
 * Strict equality (`===`) is used to compare elements.
 *
 * @example
 * ```js
 * includes([1, 2, 3], 2); // true
 * ```
 *
 * @example
 * ```js
 * includes([1, 2, 3], 5); // false
 * ```
 *
 * @param iterable - The iterable to take elements from
 * @param searchElement - The element to search for
 *
 * @returns `true` if any element is truthy, `false` otherwise
 */
export function includes<T>(iterable: Iterable<T>, searchElement: T): boolean {
	for (const element of iterable) {
		if (element === searchElement) {
			return true;
		}
	}

	return false;
}

/**
 * Returns the value of the first element in the iterable where `predicate` is truthy, and `undefined` otherwise.
 *
 * @example
 * ```js
 * find([1, 2, 3], x => x % 2 === 0); // 2
 * ```
 *
 * @param iterable - The iterable to take elements from
 * @param predicate - The function to call on each element in the iterable to determine if it passes the test
 *
 * @returns The value of the first element in the iterable where `predicate` is truthy, and `undefined` otherwise
 */
export function find<T>(iterable: Iterable<T>, predicate: (element: T) => boolean): T | undefined {
	for (const element of iterable) {
		if (predicate(element)) {
			return element;
		}
	}

	return undefined;
}

/**
 * Construct a frequency table from an iterable.
 *
 * @example
 * ```js
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
 * Split an iterable into two arrays of elements that passed or failed a provided predicate.
 *
 * @example
 * ```js
 * const [odd, even] = partition([1, 2, 3, 4, 5, 6], num => num % 2);
 *
 * console.log(odd); // [1, 3, 5]
 * console.log(even); // [2, 4, 6]
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

		array.push(element as any);
	}

	return [passed, failed];
}

/**
 * Get the first element from an iterable.
 *
 * @example
 * ```js
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
 * ```js
 * first([1, 2, 3], 1); // [1]
 * ```
 *
 * @example
 * ```js
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
 * ```js
 * allDuplicates([1, 2, 2, 2, 3]); // [2, 2]
 * ```
 *
 * @example
 * Using {@link frequencyTable} to get the number of times each element was duplicated
 * ```js
 * frequencyTable(allDuplicates([1, 2, 2, 2, 3, 3])); // Map(2) { 2 => 2, 3 => 1 }
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
 * ```js
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