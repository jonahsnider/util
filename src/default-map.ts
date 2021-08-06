import {AnyFunction} from './types';

/**
 * A `Map` that has a default value for missing keys.
 *
 *
 * @example
 * ```js
 * const map = new DefaultMap(0);
 *
 * map.get('a'); // 0
 * ```
 *
 * @example
 * ```js
 * const map = new DefaultMap(key => key.toUpperCase());
 *
 * map.get('a'); // 'A'
 * ```
 */
export class DefaultMap<K, V, D extends V = V> extends Map<K, V> {
	/** If the default value is a function. */
	private readonly defaultValueIsFunction = typeof this.defaultValueOrDefaultValueFn === 'function';

	/**
	 * Create a new `DefaultMap` with a specified default value.
	 *
	 * @param defaultValue - The default value to use for missing keys
	 *
	 * @example
	 * ```js
	 * const map = new DefaultMap(0);
	 * ```
	 */
	constructor(defaultValue: Exclude<D, AnyFunction>, entries?: readonly (readonly [K, V])[] | null);
	/**
	 * Create a new `DefaultMap` with a specified function to generate default values.
	 *
	 * @param defaultValueFn - The function to generate default values
	 *
	 * @example
	 * ```js
	 * const map = new DefaultMap(key => key.toUpperCase());
	 * ```
	 */
	constructor(defaultValueFn: (key: K) => D, entries?: readonly (readonly [K, V])[] | null);
	constructor(private defaultValueOrDefaultValueFn: Exclude<D, AnyFunction> | ((key: K) => D), entries?: readonly (readonly [K, V])[] | null) {
		super(entries);
	}

	/**
	 * Get the value for a given key, or the default value if it's missing.
	 *
	 * @example
	 * ```js
	 * map.get('a');
	 * ```
	 *
	 * @param key - The key to get the value for
	 *
	 * @returns The value for `key`, or the default value if it's missing
	 */
	get(key: K): V | D {
		if (this.has(key)) {
			return super.get(key)!;
		}

		// Compiler limitation
		return this.defaultValueIsFunction ? (this.defaultValueOrDefaultValueFn as any)(key) : this.defaultValueOrDefaultValueFn;
	}
}
