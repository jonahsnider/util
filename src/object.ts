/**
 * Create a copy of an object with a key renamed.
 *
 * @example
 * ```ts
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
 */
export function rename<T extends Record<PropertyKey, unknown>, K1 extends keyof T, K2 extends PropertyKey>(
	object: T,
	oldKey: K1,
	newKey: K1 | K2
): Omit<T, K1 | K2> & Record<K2, T[K1]> {
	if (oldKey === newKey) {
		return {...object} as any;
	}

	const {[oldKey]: _, ...result} = {...object, [newKey]: object[oldKey]};

	return result as any;
}
