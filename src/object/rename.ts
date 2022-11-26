/**
 * @returns `T` if `T` is not a union type, `never` otherwise.
 *
 * @internal
 * @category Object
 */
type NonUnion<T, U extends T = T> = (T extends T ? (U extends T ? false : true) : never) extends false ? T : never;
export type {NonUnion as _NonUnion};

/**
 * Create a copy of an object with a key renamed.
 *
 * Time complexity: _O(1)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * const object = { a: 1 };
 *
 * rename(object, 'a', 'b'); // { b: 1 }
 * ```
 *
 * @param object - The object you are renaming a key of
 * @param oldKey - The key to rename
 * @param newKey - The new name for the key
 *
 * @returns A shallow-copied object with the key name updated
 *
 * @public
 * @category Object
 */
export function rename<T, K1 extends keyof T, K2 extends PropertyKey>(
	target: T,
	oldKey: NonUnion<K1>,
	newKey: NonUnion<K2>,
): Omit<T, K1 | K2> & Record<K2, T[K1]>;
export function rename<T, K1 extends keyof T, K2 extends PropertyKey>(object: T, oldKey: K1, newKey: K1 | K2): Omit<T, K1 | K2> & Record<string, T[K1]> {
	if (oldKey === newKey) {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		return {...object} as any;
	}

	const {[oldKey]: _, ...result} = {...object, [newKey]: object[oldKey]};

	// This logic can be rewritten to remove the need for a type assertion, but would require 2 iterations over result instead of 1
	// eslint-disable-next-line @typescript-eslint/no-unsafe-return
	return result as any;
}
