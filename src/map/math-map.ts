import {DefaultMap} from './default-map';

// TODO: Allow bigints as well
type V = number;

/**
 * @alpha
 */
export class MathMap<K> extends DefaultMap<K, V> {
	add(key: K, addend: V): V {
		const newValue = this.get(key) + addend;

		this.set(key, newValue);

		return newValue;
	}

	subtract(key: K, subtrahend: V): V {
		return this.add(key, -subtrahend);
	}

	multiply(key: K, multiplicand: V): V {
		const newValue = this.get(key) * multiplicand;

		this.set(key, newValue);

		return newValue;
	}

	divide(key: K, divisor: V): V {
		const newValue = this.get(key) / divisor;

		this.set(key, newValue);

		return newValue;
	}

	pow(key: K, exponent: V): V {
		const newValue = this.get(key) ** exponent;

		this.set(key, newValue);

		return newValue;
	}

	sqrt(key: K): V {
		const newValue = Math.sqrt(this.get(key));

		this.set(key, newValue);

		return newValue;
	}

	root(key: K, root: V): V {
		if (root === 2) {
			return this.sqrt(key);
		}

		const newValue = this.get(key) ** (1 / root);

		this.set(key, newValue);

		return newValue;
	}
}
