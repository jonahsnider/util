/**
 * Check if a readonly `Set` is empty.
 *
 * Time complexity: _O(1)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * isEmpty(new Set([1, 2, 3])); // false
 * ```
 *
 * @example
 * ```js
 * isEmpty(new Set()); // true
 * ```
 *
 * @param set - The `Set` to check
 *
 * @returns `true` if `set` is empty, `false` otherwise
 *
 * @public
 * @category Iterable
 */
export function isEmpty(map: ReadonlyMap<unknown, unknown>): map is ReadonlyMap<never, never>;
/**
 * Check if a `Map` is empty.
 *
 * Time complexity: _O(1)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * isEmpty(new Map([['a', 1], ['b', 2], ['c', 3]])); // false
 * ```
 *
 * @example
 * ```js
 * isEmpty(new Map()); // true
 * ```
 *
 * @param map - The `Map` to check
 *
 * @returns `true` if `map` is empty, `false` otherwise
 *
 * @public
 * @category Iterable
 */
export function isEmpty(map: Map<unknown, unknown>): map is Map<never, never>;
/**
 * Check if a readonly `Set` is empty.
 *
 * Time complexity: _O(1)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * isEmpty(new Set([1, 2, 3])); // false
 * ```
 *
 * @example
 * ```js
 * isEmpty(new Set()); // true
 * ```
 *
 * @param set - The `Set` to check
 *
 * @returns `true` if `set` is empty, `false` otherwise
 *
 * @public
 * @category Iterable
 */
export function isEmpty(set: ReadonlySet<unknown>): set is ReadonlySet<never>;
/**
 * Check if a `Set` is empty.
 *
 * Time complexity: _O(1)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * isEmpty(new Set([1, 2, 3])); // false
 * ```
 *
 * @example
 * ```js
 * isEmpty(new Set()); // true
 * ```
 *
 * @param set - The `Set` to check
 *
 * @returns `true` if `set` is empty, `false` otherwise
 *
 * @public
 * @category Iterable
 */
export function isEmpty(set: Set<unknown>): set is Set<never>;
/**
 * Check if a string is empty.
 *
 * Time complexity: _O(1)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * isEmpty('hello'); // false
 * ```
 *
 * @example
 * ```js
 * isEmpty(''); // true
 * ```
 *
 * @param string - The string to check
 *
 * @returns `true` if `string` is empty, `false` otherwise
 *
 * @public
 * @category Iterable
 */
export function isEmpty(string: string): string is '';
/**
 * Check if a readonly array is empty.
 *
 * Time complexity: _O(1)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * isEmpty([1, 2, 3]); // false
 * ```
 *
 * @example
 * ```js
 * isEmpty([]); // true
 * ```
 *
 * @param array - The array to check
 *
 * @returns `true` if `array` is empty, `false` otherwise
 *
 * @public
 * @category Iterable
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export function isEmpty(array: readonly unknown[]): array is readonly [];
/**
 * Check if an array is empty.
 *
 * Time complexity: _O(1)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * isEmpty([1, 2, 3]); // false
 * ```
 *
 * @example
 * ```js
 * isEmpty([]); // true
 * ```
 *
 * @param array - The array to check
 *
 * @returns `true` if `array` is empty, `false` otherwise
 *
 * @public
 * @category Iterable
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export function isEmpty(array: unknown[]): array is [];
/**
 * Check if an iterable is empty.
 *
 * Time complexity: _O(1)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * isEmpty([1, 2, 3]); // false
 * ```
 *
 * @example
 * ```js
 * isEmpty([]); // true
 * ```
 *
 * @param iterable - The iterable to check
 *
 * @returns `true` if `iterable` is empty, `false` otherwise
 *
 * @public
 * @category Iterable
 */
export function isEmpty(iterable: Iterable<unknown>): iterable is Iterable<never>;
export function isEmpty(iterable: Iterable<unknown>): iterable is Iterable<never> {
	// eslint-disable-next-line no-unreachable-loop, @typescript-eslint/no-unused-vars
	for (const _ of iterable) {
		return false;
	}

	return true;
}
