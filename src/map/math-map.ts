import { DefaultMap } from './default-map.js';

// TODO: Allow bigints as well
type V = number;

/**
 * A {@link DefaultMap} with methods for performing basic math operations that mutate the data.
 *
 * @alpha
 */
export class MathMap<K> extends DefaultMap<K, V> {
	/**
	 * Add an addend to the value for a given key.
	 *
	 * @example
	 * ```js
	 * map.add('a', 1);
	 * ```
	 *
	 * @param key - The key to update the value of
	 * @param addend - The value to add to the current value
	 *
	 * @returns The updated value
	 */
	add(key: K, addend: V): V {
		const newValue = this.get(key) + addend;

		this.set(key, newValue);

		return newValue;
	}

	/**
	 * Subtract a subtrahend from the value for a given key.
	 *
	 * @example
	 * ```js
	 * map.subtract('a', 1);
	 * ```
	 *
	 * @param key - The key to update the value of
	 * @param subtrahend - The value to subtract from the current value
	 *
	 * @returns The updated value
	 */
	subtract(key: K, subtrahend: V): V {
		const newValue = this.get(key) - subtrahend;

		this.set(key, newValue);

		return newValue;
	}

	/**
	 * Multiply a multiplicand by the value for a given key.
	 *
	 * @example
	 * ```js
	 * map.multiply('a', 1);
	 * ```
	 *
	 * @param key - The key to update the value of
	 * @param multiplicand - The value to multiply the current value by
	 *
	 * @returns The updated value
	 */
	multiply(key: K, multiplicand: V): V {
		const newValue = this.get(key) * multiplicand;

		this.set(key, newValue);

		return newValue;
	}

	/**
	 * Divide the value for a given key by a divisor.
	 *
	 * @example
	 * ```js
	 * map.divide('a', 1);
	 * ```
	 *
	 * @param key - The key to update the value of
	 * @param divisor - The value to divide the current value by
	 *
	 * @returns The updated value
	 */
	divide(key: K, divisor: V): V {
		const newValue = this.get(key) / divisor;

		this.set(key, newValue);

		return newValue;
	}

	/**
	 * Raise the value for a given key to an exponent.
	 *
	 * @example
	 * ```js
	 * map.pow('a', 2);
	 * ```
	 *
	 * @param key - The key to update the value of
	 * @param exponent - The exponent to raise the current value to
	 *
	 * @returns The updated value
	 */
	pow(key: K, exponent: V): V {
		const newValue = this.get(key) ** exponent;

		this.set(key, newValue);

		return newValue;
	}

	/**
	 * Square root of the value for a given key.
	 *
	 * @example
	 * ```js
	 * map.sqrt('a');
	 * ```
	 *
	 * @param key - The key to get the square root of
	 *
	 * @returns The square root of the value for `key`
	 */
	sqrt(key: K): V {
		const newValue = Math.sqrt(this.get(key));

		this.set(key, newValue);

		return newValue;
	}

	/**
	 * Take the _n_th root of the value for a given key.
	 *
	 * @example
	 * ```js
	 * map.root('a', 2);
	 * ```
	 *
	 * @param key - The key to get the _n_th root of
	 * @param root - The root to get
	 *
	 * @returns The nth root of the value for `key`
	 */
	root(key: K, root: V): V {
		if (root === 2) {
			return this.sqrt(key);
		}

		const newValue = this.get(key) ** (1 / root);

		this.set(key, newValue);

		return newValue;
	}
}
