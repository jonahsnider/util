export type Nullish = null | undefined;

/**
 * Check if something is `null` or `undefined`.
 * 
 * @example
 * ```
 * const value = Math.random() > 0.5 ? 'hello' : null;
 * 
 * nullish(value);
 * ```
 * 
 * @param it - Value to check
 * 
 * @returns `true` if `it` is nullish, `false` if otherwise
 */
export function nullish(it: unknown): it is Nullish {
	return it === null || it === undefined;
}
