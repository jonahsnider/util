/**
 * `null` or `undefined`.
 *
 * @public
 */
// eslint-disable-next-line @typescript-eslint/no-restricted-types
export type Nullish = null | undefined;

/**
 * Check if something is `null` or `undefined`.
 *
 * Time complexity: _O(1)_
 *
 * Space complexity: _O(1)_
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
 *
 * @public
 */
export function nullish(value: unknown): value is Nullish {
	return value === null || value === undefined;
}
