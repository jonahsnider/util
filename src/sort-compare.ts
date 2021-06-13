import {Comparable} from './sort';

/**
 * Sort an array in ascending order (least to greatest).
 *
 * @example
 * ```ts
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
export function ascending(a: Comparable, b: Comparable): number {
	// null is converted to 0 in comparisons
	if (a! < b!) {
		return -1;
	}

	if (a! > b!) {
		return 1;
	}

	return 0;
}

/**
 * Sort an array in descending order (greatest to least).
 * @example
 * ```ts
 * const array = [5, 3, 2, 4, 1];
 *
 * array.sort(Sort.descending);
 * ```
 *
 * @param a - Element
 * @param b - Element
 *
 * @returns A negative value if first argument is less than second argument, zero if they're equal and a positive value otherwise
 */
export function descending(a: Comparable, b: Comparable): number {
	// null is converted to 0 in comparisons
	if (a! < b!) {
		return 1;
	}

	if (a! > b!) {
		return -1;
	}

	return 0;
}
