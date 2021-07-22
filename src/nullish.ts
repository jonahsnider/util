/** `null` or `undefined`. */
export type Nullish = null | undefined;

/**
 * Check if something is `null` or `undefined`.
 *
 * @example
 * ```js
 * const value = Math.random() > 0.5 ? 'hello' : null;
 *
 * nullish(value);
 * ```
 *
 * @param value - Value to check
 *
 * @returns `true` if `value` is nullish, `false` if otherwise
 */
export function nullish(value: unknown): value is Nullish {
	return value === null || value === undefined;
}
