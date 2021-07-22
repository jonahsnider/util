/** A value that can be compared numerically using `<`, `>`, `<=`, or `>=`. */
export type Comparable = string | number | bigint | boolean | null | {[Symbol.toPrimitive](hint: 'number'): number};

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort MDN docs on this function
 */
export type CompareFn<T = Comparable> = Exclude<Parameters<Array<T>['sort']>[0], undefined>;

/**
 * Sort an object's keys by comparing their respective values.
 *
 * @example
 * ```js
 * import { Sort } from '@jonahsnider/util';
 *
 * const object = { a: 3, c: 1, b: 2 };
 *
 * Object.fromEntries(sortObject(object, Sort.ascending));
 * ```
 *
 * @param object - Object to sort
 * @param compareFn - Function used to compare object values
 *
 * @returns A new object with the keys in order
 */
export function sortObject<K extends PropertyKey, V>(object: Record<K, V>, compareFn: CompareFn<V>): Array<[K, V]> {
	return Object.entries<V>(object).sort(([, aValue], [, bValue]) => compareFn(aValue, bValue)) as Array<[K, V]>;
}
