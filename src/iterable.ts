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
