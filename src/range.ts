import {Comparable} from './types';

/**
 * A range between two values.
 */
export class Range {
	/**
	 * Create a new range from 2 values.
	 *
	 * @param lower The lower bound of this range
	 * @param upper The upper bound of this range
	 *
	 * @throws If `lower` is greater than `upper`
	 *
	 * @example
	 * ```js
	 * const range = new Range(100, 200);
	 * ```
	 */
	constructor(public lower: Comparable, public upper: Comparable) {
		if (lower! > upper!) {
			throw new RangeError('lower must be less than upper');
		}
	}

	/**
	 * Create a new range from the first 2 values of an iterable.
	 *
	 * @example
	 * ```js
	 * const range = Range.from([100, 200]);
	 * ```
	 */
	static from(iterable: Iterable<Comparable>): Range {
		const [lower, upper] = iterable;

		return new Range(lower, upper);
	}

	/**
	 * Returns `true` if `value` is within `this.lower` and `this.upper`, false otherwise.
	 * The `>=` and `<=` operators are used to compare `value`.
	 *
	 * @example
	 * ```js
	 * const range = new Range(100, 200);
	 *
	 * console.log(range.has(150)); // true
	 * console.log(range.has(300)); // false
	 * ```
	 */
	has(value: Comparable): boolean {
		return value! >= this.lower! && value! <= this.upper!;
	}

  /**
   * An iterable that contains `this.lower` and `this.upper`.
   * 
   * @example
   * ```js
   * const [lower, upper] = range; 
   * ```
   */
	*[Symbol.iterator](): IterableIterator<Comparable> {
		yield this.lower;
		yield this.upper;
	}
}
