import type {AnyFunction} from '../types';

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
	 * If the default value is a function.
	 */
	private readonly defaultValueIsFunction: boolean;

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
	constructor(defaultValue: Exclude<D, AnyFunction>, entries?: ConstructorParameters<MapConstructor>[0] | null);
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
	// eslint-disable-next-line @typescript-eslint/unified-signatures
	constructor(defaultValueFn: (key: K) => D, entries?: ConstructorParameters<MapConstructor>[0] | null);
	constructor(
		private readonly defaultValueOrDefaultValueFn: Exclude<D, AnyFunction> | ((key: K) => D),
		entries?: ConstructorParameters<MapConstructor>[0] | null,
	) {
		// @ts-expect-error The types to allow constructing via an Iterable don't work for some reason
		super(entries);

		this.defaultValueIsFunction = typeof defaultValueOrDefaultValueFn === 'function';
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
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
		return this.defaultValueIsFunction ? (this.defaultValueOrDefaultValueFn as any)(key) : this.defaultValueOrDefaultValueFn;
	}
}
