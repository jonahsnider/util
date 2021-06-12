/**
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort MDN docs on this function
 */
export type CompareFn<T = Comparable> = Exclude<Parameters<Array<T>['sort']>[0], undefined>;

/** A value that can be compared numerically using `<`, `>`, `<=`, or `>=`. */
export type Comparable = string | number | bigint | boolean | null | (Record<PropertyKey, unknown> & {[Symbol.toPrimitive]: (hint: 'number') => number});

/**
 * Sort an object's keys by comparing their respective values.
 *
 * @example
 * ```ts
 * const object = {a: 3, c: 1, b: 2};
 *
 * sortObject(object, (a, b) => a - b);
 * ```
 *
 * @param object - Object to sort
 * @param compareFn - Function used to compare object values
 *
 * @returns A new object with the keys in order
 */
export function sortObject<K extends PropertyKey, V>(object: Record<K, V>, compareFn: CompareFn<V>) {
	return Object.fromEntries(Object.entries<V>(object).sort(([_aKey, aValue], [_bKey, bValue]) => compareFn(aValue, bValue))) as typeof object;
}

/**
 * Sort an array in ascending order (least to greatest).
 *
 * @example
 * ```ts
 * const array = [5, 3, 2, 4, 1];
 *
 * array.sort(ascending);
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
 * array.sort(descending);
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
