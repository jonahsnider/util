import type {AnyFunction} from '../types.js';

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
 *
 * @public
 * @category Map
 */
export class DefaultMap<K, V, D extends V = V> extends Map<K, V> {
	/**
	 * Create a new `DefaultMap` with a specified default value.
	 *
	 * Time complexity: _O(n)_
	 *
	 * Space complexity: _O(n)_
	 *
	 * @param defaultValue - The default value to use for missing keys
	 *
	 * @example
	 * ```js
	 * const map = new DefaultMap(0);
	 * ```
	 */
	// eslint-disable-next-line @typescript-eslint/no-restricted-types
	constructor(defaultValue: Exclude<D, AnyFunction>, entries?: ConstructorParameters<MapConstructor>[0]);
	/**
	 * Create a new `DefaultMap` with a specified function to generate default values.
	 *
	 * Time complexity: _O(n)_
	 *
	 * Space complexity: _O(n)_
	 *
	 * @param defaultValueFn - The function to generate default values
	 *
	 * @example
	 * ```js
	 * const map = new DefaultMap(key => key.toUpperCase());
	 * ```
	 */
	// eslint-disable-next-line @typescript-eslint/no-restricted-types
	constructor(defaultValueFunction: (key: K) => D, entries?: ConstructorParameters<MapConstructor>[0] | null);
	constructor(
		private readonly defaultValueOrDefaultValueFunction: Exclude<D, AnyFunction> | ((key: K) => D),
		entries?: ConstructorParameters<MapConstructor>[0],
	) {
		// @ts-expect-error The types to allow constructing via an Iterable don't work for some reason
		super(entries);
	}

	/**
	 * Get the value for a given key, or the default value if it's missing.
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
	 * @returns The value for `key`, or the default value if it's missing
	 */
	get(key: K): V | D {
		if (this.has(key)) {
			return super.get(key)!;
		}

		// Compiler limitation
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		return typeof this.defaultValueOrDefaultValueFunction === 'function'
			? // eslint-disable-next-line @typescript-eslint/no-unsafe-call
				(this.defaultValueOrDefaultValueFunction as any)(key)
			: this.defaultValueOrDefaultValueFunction;
	}
}
