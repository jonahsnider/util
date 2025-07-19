function identicalArray<T>(a: T[], b: T[]): boolean {
	if (a === b) {
		return true;
	}

	if (a.length !== b.length) {
		return false;
	}

	return a.every((element, index) => element === b[index]);
}

function identicalSet<T>(a: ReadonlySet<T>, b: ReadonlySet<T>): boolean {
	if (a === b) {
		return true;
	}

	if (a.size !== b.size) {
		return false;
	}

	for (const element of a) {
		if (!b.has(element)) {
			return false;
		}
	}

	return true;
}

function identicalMap<K, V>(a: ReadonlyMap<K, V>, b: ReadonlyMap<K, V>): boolean {
	if (a === b) {
		return true;
	}

	if (a.size !== b.size) {
		return false;
	}

	for (const [key, value] of a.entries()) {
		if (!b.has(key) || b.get(key) !== value) {
			return false;
		}
	}

	return true;
}

/**
 * Check if 2 arrays have the same elements in the same order.
 * Strict equality (`===`) is used to compare elements.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * const a = [1, 2, 3];
 * const b = [1, 2, 3];
 *
 * identical(a, b); // true
 * ```
 *
 * @param a - First array to compare
 * @param b - Second array to compare
 *
 * @returns `true` if `a` and `b` have the same elements in the same order, `false` otherwise
 *
 * @public
 */
export function identical<V>(a: readonly V[], b: readonly V[]): boolean;
/**
 * Check if 2 `Set`s have the same elements.
 * Strict equality (`===`) is used to compare elements.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * const a = new Set([1, 2, 3]);
 * const b = new Set([3, 2, 1]);
 *
 * identical(a, b); // true
 * ```
 *
 * @param a - First `Set` to compare
 * @param b - Second `Set` to compare
 *
 * @returns `true` if `a` and `b` have the same elements, `false` otherwise
 *
 * @public
 */
export function identical<V>(a: ReadonlySet<V>, b: ReadonlySet<V>): boolean;
/**
 * Check if 2 `Map`s have the same key-value pairs.
 * Strict equality (`===`) is used to compare values.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * const a = new Map([['a', 1]]);
 * const b = new Map([['a', 1]]);
 *
 * identical(a, b); // true
 * ```
 *
 * @param a - First `Map` to compare
 * @param b - Second `Map` to compare
 *
 * @returns `true` if `a` and `b` have the key-value pairs, `false` otherwise
 *
 * @public
 */
export function identical<K, V>(a: ReadonlyMap<K, V>, b: ReadonlyMap<K, V>): boolean;
export function identical<V, K = never>(
	a: readonly V[] | ReadonlySet<V> | ReadonlyMap<K, V>,
	b: readonly V[] | ReadonlySet<V> | ReadonlyMap<K, V>,
): boolean {
	if (Array.isArray(a) && Array.isArray(b)) {
		return identicalArray(a, b);
	}

	if (a instanceof Set && b instanceof Set) {
		return identicalSet(a, b);
	}

	if (a instanceof Map && b instanceof Map) {
		return identicalMap(a, b);
	}

	throw new RangeError('Expected both parameters to be an array, Set, or Map');
}
