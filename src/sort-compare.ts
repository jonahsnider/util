import {Comparable, CompareFn} from './types';

function ascendingRaw(a: Comparable, b: Comparable): number {
	// null is converted to 0 in comparisons
	if (a! < b!) {
		return -1;
	}

	if (a! > b!) {
		return 1;
	}

	return 0;
}

function descendingRaw(a: Comparable, b: Comparable): number {
	// null is converted to 0 in comparisons
	if (a! < b!) {
		return 1;
	}

	if (a! > b!) {
		return -1;
	}

	return 0;
}

/**
 * Sort an array in ascending order (least to greatest), while applying a function to each element to map the value before comparing..
 *
 * @example
 * ```js
 * const array = [{ value: 2 }, { value: 3 }, { value: 1 }, { value: 3 }];
 *
 * array.sort(Sort.ascending(x => x.value));
 * ```
 *
 * @param predicate - A function that maps elements from type `T` to a {@link Comparable | `Comparable`}
 *
 * @returns A compare function that returns a negative value if first argument is less than second argument, zero if they're equal and a positive value otherwise
 */
export function ascending<T>(predicate: (element: T) => Comparable): CompareFn<T>;
/**
 * Sort an array in ascending order (least to greatest).
 *
 * @example
 * ```js
 * const array = [5, 3, 2, 4, 1];
 *
 * array.sort(Sort.ascending);
 * ```
 *
 * @param a - Element
 * @param b - Element
 *
 * @returns A negative value if first argument is less than second argument, zero if they're equal and a positive value otherwise
 */
export function ascending(a: Comparable, b: Comparable): number;
export function ascending<T>(aOrPredicate: Comparable | ((element: T) => Comparable), b: Comparable | void): number | CompareFn<T> {
	if (b === undefined && typeof aOrPredicate === 'function') {
		return (a2: T, b2: T) => ascendingRaw(aOrPredicate(a2), aOrPredicate(b2));
	}

	return ascendingRaw(aOrPredicate as Comparable, b as Comparable);
}

/**
 * Sort an array in descending order (greatest to least), while applying a function to each element to map the value before comparing.
 *
 * @example
 * ```js
 * const array = [{ value: 2 }, { value: 3 }, { value: 1 }, { value: 3 }];
 *
 * array.sort(Sort.descending(x => x.value));
 * ```
 *
 * @param predicate - A function that maps elements from type `T` to a {@link Comparable | `Comparable`}
 *
 * @returns A compare function that returns a positive value if first argument is less than second argument, zero if they're equal and a negative value otherwise
 */
export function descending<T>(predicate: (element: T) => Comparable): CompareFn<T>;
/**
 * Sort an array in descending order (greatest to least).
 * @example
 * ```js
 * const array = [5, 3, 2, 4, 1];
 *
 * array.sort(Sort.descending);
 * ```
 *
 * @param a - Element
 * @param b - Element
 *
 * @returns A positive value if first argument is less than second argument, zero if they're equal and a negative value otherwise
 */
export function descending(a: Comparable, b: Comparable): number;
export function descending<T>(aOrPredicate: Comparable | ((element: T) => Comparable), b: Comparable | void): number | CompareFn<T> {
	if (b === undefined && typeof aOrPredicate === 'function') {
		return (a2: T, b2: T) => descendingRaw(aOrPredicate(a2), aOrPredicate(b2));
	}

	return descendingRaw(aOrPredicate as Comparable, b as Comparable);
}
