/**
 * Check if two arrays have the same elements in the same order.
 * Strict equality (`===`) is used to compare elements.
 *
 * @example
 * ```ts
 * const a = [1];
 * const b = [1];
 *
 * identical(a, b) === true;
 * ```
 *
 * @param a - First array to compare
 * @param b - Second array to compare
 *
 * @returns `true` if `a` and `b` have the same elements in the same order, `false` otherwise
 */
export function identical<V>(a: readonly V[], b: readonly V[]): boolean;
/**
 * Check if two `Set`s have the same elements.
 * Strict equality (`===`) is used to compare elements.
 *
 * @example
 * ```ts
 * const a = new Set([1, 2, 3]);
 * const b = new Set([3, 2, 1]);
 *
 * identical(a, b) === true;
 * ```
 *
 * @param a - First `Set` to compare
 * @param b - Second `Set` to compare
 *
 * @returns `true` if `a` and `b` have the same elements, `false` otherwise
 */
export function identical<V>(a: ReadonlySet<V>, b: ReadonlySet<V>): boolean;
/**
 * Check if two `Map`s have the same key-value pairs.
 * Strict equality (`===`) is used to compare values.
 *
 * @example
 * ```ts
 * const a = new Map([['a', 1]]);
 * const b = new Map([['a', 1]]);
 *
 * identical(a, b) === true;
 * ```
 *
 * @param a - First `Map` to compare
 * @param b - Second `Map` to compare
 *
 * @returns `true` if `a` and `b` have the key-value pairs, `false` otherwise
 */
export function identical<K, V>(a: ReadonlyMap<K, V>, b: ReadonlyMap<K, V>): boolean;
export function identical<V, K = never>(
	a: readonly V[] | ReadonlySet<V> | ReadonlyMap<K, V>,
	b: readonly V[] | ReadonlySet<V> | ReadonlyMap<K, V>
): boolean {
	if (a === b) {
		return true;
	}

	if (Array.isArray(a)) {
		if (a.length !== (b as typeof a).length) {
			return false;
		}

		return a.every((item, i) => item === (b as typeof a)[i]);
	}

	// Horrible hack to make the tests specifically compile
	if ((a as {size: number}).size !== (b as Set<V> | Map<K, V>).size) {
		return false;
	}

	if (a instanceof Set) {
		for (const item of a) {
			if (!(b as Set<V>).has(item)) {
				return false;
			}
		}
	} else if (a instanceof Map) {
		for (const [key, value] of (a as ReadonlyMap<K, V>).entries()) {
			if ((b as Map<K, V>).get(key) !== value || !(b as Map<K, V>).has(key)) {
				return false;
			}
		}
	}

	return true;
}

/**
 * Check if 2 or more iterables hold the same elements.
 * Strict equality (`===`) is used to compare elements.
 *
 * @example
 * ```ts
 * const a = [1, 2, 3];
 * const b = [1, 2, 3];
 * const c = [1, 2, 3];
 * const d = [1, 2, 3];
 * const e = [1, 2, 3];
 *
 * same(a, b, c, d, e) === true;
 * ```
 *
 * @param iterables - Elements to compare
 *
 * @returns `true` if all elements are strictly equal, `false` otherwise
 */
export function same<T>(...iterables: [Iterable<T>, Iterable<T>, ...Array<Iterable<T>>]): boolean {
	const iterators = iterables.map(item => item[Symbol.iterator]());

	while (true) {
		const nexts = iterators.map(iterator => iterator.next());

		const [{done, value}] = nexts;

		for (const next of nexts) {
			if (next.done) {
				return nexts.every(next => next.done === done);
			}

			if (next.value !== value) {
				return false;
			}
		}
	}
}
