/**
 * From `object`, pick a set of properties whose keys are in the `keys` array.
 * This is an implementation of the `Pick<T, K>` type in TypeScript.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(n)_
 *
 * @example
 * ```js
 * const object = { a: 1, b: 2, c: 3 };
 *
 * pick(object, ['a', 'b']); // { a: 1, b: 2 }
 * ```
 *
 * @param object - The object you are picking entries from
 * @param keys - The keys to keep from the object
 *
 * @returns A new object containing the picked entries
 *
 * @public
 * @category Object
 */
export function pick<T, K extends keyof T>(object: T, keys: readonly K[]): Pick<T, K> {
	return Object.fromEntries(keys.map(key => [key, object[key]])) as Pick<T, K>;
}
