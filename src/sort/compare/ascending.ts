import type {Comparable, CompareFn} from '../../types';

function ascendingRaw(a: Comparable, b: Comparable): number {
	// `null` is converted to 0 in comparisons
	if (a! < b!) {
		return -1;
	}

	if (a! > b!) {
		return 1;
	}

	return 0;
}

/**
 * Sort an array in ascending order (least to greatest), while applying a function to each element to map the value before comparing.
 *
 * Time complexity: _O(1)_
 *
 * Space complexity: _O(1)_
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
 *
 * @public
 * @category Sort
 */
export function ascending<T>(predicate: (element: T) => Comparable): CompareFn<T>;
/**
 * Sort an array in ascending order (least to greatest).
 *
 * Time complexity: _O(1)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * const array = [5, 3, 2, 4, 1];
 *
 * array.sort(Sort.ascending);
 * ```
 *
 * @param a - Element to compare
 * @param b - Element to compare
 *
 * @returns A negative value if first argument is less than second argument, zero if they're equal and a positive value otherwise
 *
 * @public
 * @category Sort
 */
export function ascending(a: Comparable, b: Comparable): number;
export function ascending<T>(aOrPredicate: Comparable | ((element: T) => Comparable), b: Comparable | void): number | CompareFn<T> {
	if (b === undefined && typeof aOrPredicate === 'function') {
		return (a2: T, b2: T) => ascendingRaw(aOrPredicate(a2), aOrPredicate(b2));
	}

	return ascendingRaw(aOrPredicate as Comparable, b as Comparable);
}
