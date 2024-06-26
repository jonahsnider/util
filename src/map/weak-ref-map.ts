/**
 * A Map that uses `WeakRef` to allow garbage collection of values.
 *
 * It treats values that have been garbage collected as if they were not in the map.
 *
 * @example
 * ```js
 * const map = new WeakRefMap();
 * const value = { a: 1 };
 *
 * map.set('a', value);
 *
 * map.get('a'); // { a: 1 };
 * ```
 *
 * @example
 * ```js
 * const map = new DefaultMap(key => key.toUpperCase());
 *
 * map.get('a'); // 'A'
 * ```
 *
 * @public
 * @category Map
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export class WeakRefMap<K, V extends object> implements Omit<Map<K, V>, 'size' | 'forEach' | 'set'> {
	[Symbol.iterator] = this.entries.bind(this);

	get [Symbol.toStringTag](): 'WeakRefMap' {
		return 'WeakRefMap';
	}

	private readonly map = new Map<K, WeakRef<V>>();

	// eslint-disable-next-line @typescript-eslint/ban-types
	constructor(entries?: ReadonlyArray<readonly [K, V]> | null) {
		if (entries) {
			for (const [key, value] of entries) {
				this.set(key, value);
			}
		}
	}

	/**
	 * Clear all entries from the map.
	 *
	 * Time complexity: _O(n)_
	 *
	 * Space complexity: _O(1)_
	 *
	 * @example
	 * ```js
	 * map.clear();
	 * ```
	 */
	clear(): void {
		this.map.clear();
	}

	/**
	 * Delete a given key from the map.
	 *
	 * Time complexity: _O(1)_
	 *
	 * Space complexity: _O(1)_
	 *
	 * @example
	 * ```js
	 * map.delete('a');
	 * ```
	 *
	 * @param key - The key to delete
	 *
	 * @returns Whether the key was deleted
	 */
	delete(key: K): boolean {
		const didExist = this.map.has(key);

		if (!didExist) {
			this.map.delete(key);
		}

		return didExist;
	}

	/**
	 * Check if the map has a given key.
	 *
	 * Time complexity: _O(1)_
	 *
	 * Space complexity: _O(1)_
	 *
	 * @example
	 * ```js
	 * map.has('a');
	 * ```
	 *
	 * @param key - The key to check for
	 *
	 * @returns Whether the map has `key`
	 */
	has(key: K): boolean {
		if (this.map.has(key)) {
			if (this.map.get(key)!.deref() === undefined) {
				this.map.delete(key);
			} else {
				return true;
			}
		}

		return false;
	}

	/**
	 * Get the value for a given key.
	 *
	 * Time complexity: _O(1)_
	 *
	 * Space complexity: _O(1)_
	 *
	 * @example
	 * ```js
	 * map.get('a');
	 * ```
	 *
	 * @param key - The key to get the value for
	 *
	 * @returns The value for `key`
	 */
	get(key: K): V | undefined {
		const maybeWeakRef = this.map.get(key);

		if (maybeWeakRef) {
			const maybeValue = maybeWeakRef.deref();

			if (maybeValue === undefined) {
				this.map.delete(key);
			} else {
				return maybeValue;
			}
		}

		return undefined;
	}

	/**
	 * Set the value for a given key.
	 *
	 * Time complexity: _O(1)_
	 *
	 * Space complexity: _O(1)_
	 *
	 * @example
	 * ```js
	 * map.set('a', { a: 1 });
	 * ```
	 *
	 * @param key - The key to set the value for
	 * @param value - The value to set
	 *
	 * @returns The map
	 */
	set(key: K, value: V): this {
		this.map.set(key, new WeakRef(value));

		return this;
	}

	/**
	 * Get an iterable of the values in the map.
	 *
	 * Time complexity: _O(n)_
	 *
	 * Space complexity: _O(1)_
	 *
	 * @example
	 * ```js
	 * for (const value of map.values()) {
	 * 	console.log(value);
	 * }
	 * ```
	 *
	 * @returns An iterable of the values in the map
	 */
	*values(): IterableIterator<V> {
		for (const key of this.map.keys()) {
			const maybeValue = this.get(key);

			if (maybeValue !== undefined) {
				yield maybeValue;
			}
		}
	}

	/**
	 * Get an iterable of the keys in the map.
	 *
	 * Time complexity: _O(n)_
	 *
	 * Space complexity: _O(1)_
	 *
	 * @example
	 * ```js
	 * for (const key of map.keys()) {
	 * 	console.log(key);
	 * }
	 * ```
	 *
	 * @returns An iterable of the keys in the map
	 */
	*keys(): IterableIterator<K> {
		for (const key of this.map.keys()) {
			if (this.has(key)) {
				yield key;
			}
		}
	}

	/**
	 * Get an iterable of the entries in the map.
	 *
	 * Time complexity: _O(n)_
	 *
	 * Space complexity: _O(1)_
	 *
	 * @example
	 * ```js
	 * for (const [key, value] of map.entries()) {
	 * 	console.log(key, value);
	 * }
	 * ```
	 *
	 * @returns An iterable of the entries in the map
	 */
	*entries(): IterableIterator<[K, V]> {
		for (const [key, weakRef] of this.map.entries()) {
			const maybeValue = weakRef.deref();
			if (maybeValue === undefined) {
				this.map.delete(key);
			} else {
				yield [key, maybeValue];
			}
		}
	}

	/**
	 * Iterate over the entries in the map.
	 *
	 * Time complexity: _O(n)_
	 *
	 * Space complexity: _O(1)_
	 *
	 * @example
	 * ```js
	 * map.forEach((value, key) => {
	 * 	console.log(key, value);
	 * });
	 * ```
	 *
	 * @param callbackfn - The callback to call for each entry
	 * @param thisArg - The `this` value to use when calling the callback
	 */
	forEach(callbackfn: (value: V, key: K, map: this) => void, thisArg?: any): void {
		for (const [key, value] of this.entries()) {
			callbackfn.call(thisArg, value, key, this);
		}
	}
}
