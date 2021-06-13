/** A value that can be compared numerically using `<`, `>`, `<=`, or `>=`. */
export type Comparable = string | number | bigint | boolean | null | (Record<PropertyKey, unknown> & {[Symbol.toPrimitive]: (hint: 'number') => number});

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort MDN docs on this function
 */
export type CompareFn<T = Comparable> = Exclude<Parameters<Array<T>['sort']>[0], undefined>;

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