import type { Comparable, CompareFn } from '../../types.js';

function descendingRaw(a: Comparable, b: Comparable): number {
	// `null` is converted to 0 in comparisons
	// biome-ignore lint/style/noNonNullAssertion: Comparing nullish values is fine
	if (a! < b!) {
		return 1;
	}

	// biome-ignore lint/style/noNonNullAssertion: Comparing nullish values is fine
	if (a! > b!) {
		return -1;
	}

	return 0;
}

/**
 * Sort an array in descending order (greatest to least), while applying a function to each element to map the value before comparing.
 *
 * Time complexity: _O(1)_
 *
 * Space complexity: _O(1)_
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
 *
 * @public
 * @category Sort
 */
export function descending<T>(predicate: (element: T) => Comparable): CompareFn<T>;
/**
 * Sort an array in descending order (greatest to least).
 *
 * Time complexity: _O(1)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * const array = [5, 3, 2, 4, 1];
 *
 * array.sort(Sort.descending);
 * ```
 *
 * @param a - Element to compare
 * @param b - Element to compare
 *
 * @returns A positive value if first argument is less than second argument, zero if they're equal and a negative value otherwise
 *
 * @public
 * @category Sort
 */
export function descending(a: Comparable, b: Comparable): number;
export function descending<T>(
	aOrPredicate: Comparable | ((element: T) => Comparable),
	// biome-ignore lint/suspicious/noConfusingVoidType: Can't compile without using void
	b: Comparable | void,
): number | CompareFn<T> {
	if (b === undefined && typeof aOrPredicate === 'function') {
		return (a2: T, b2: T) => descendingRaw(aOrPredicate(a2), aOrPredicate(b2));
	}

	return descendingRaw(aOrPredicate as Comparable, b as Comparable);
}
