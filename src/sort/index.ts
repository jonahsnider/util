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

/**
 * Check whether an array is sorted according to a given compare function.
 *
 * @example
 * ```js
 * import { Sort } from '@jonahsnider/util';
 *
 * const array = [1, 2, 3, 4, 5];
 *
 * isSorted(array, (a, b) => a - b);
 * ```
 *
 * @param array - Array to check
 * @param compareFn - Function to compare elements
 *
 * @returns Whether the array is sorted according to the given compare function
 */
export function isSorted<T>(array: ArrayLike<T>, compareFn: CompareFn<T>): boolean {
	for (let index = 0; index < array.length - 1; index++) {
		const element = array[index];
		const next = array[index + 1];

		if (compareFn(element, next) > 0) {
			return false;
		}
	}

	return true;
}
