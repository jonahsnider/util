import {difference} from '../set/index.js';

/**
 * Create a copy of a provided object with the provided keys omitted.
 * This is an implementation of the `Omit<T, K>` type in TypeScript.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(n)_
 *
 * @example
 * ```js
 * const object = { a: 1, b: 2, c: 3 };
 *
 * omit(object, ['c']); // { a: 1, b: 2 }
 * ```
 *
 * @param object - The object you are renaming a key of
 * @param keys - The keys to remove from the object
 *
 * @returns A new object containing the entries that were not omitted
 *
 * @public
 * @category Object
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export function omit<T extends Record<string, unknown>, K extends keyof T>(object: T, keys: readonly K[]): Omit<T, K> {
	const keptKeys = difference(
		Object.keys(object),
		// Replicates the behavior of Object.keys() casting numeric keys to strings and removing symbols
		keys.filter(key => typeof key !== 'symbol').map(String),
	) as Set<keyof T>;

	return Object.fromEntries([...keptKeys].map(key => [key, object[key]])) as Omit<T, K>;
}
