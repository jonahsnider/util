import {CompareFn} from '../types';

export * as Sort from './compare';

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
export function sortObject<K extends PropertyKey, V>(object: Readonly<Record<K, V>>, compareFn: CompareFn<V>): Array<[K, V]> {
	return Object.entries<V>(object).sort(([, aValue], [, bValue]) => compareFn(aValue, bValue)) as Array<[K, V]>;
}
