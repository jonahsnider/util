import {Comparable} from './types';

/**
 * A range between 2 values.
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
	 *
	 * @param iterable - The iterable to create a range from
	 *
	 * @returns A new range
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

	/**
	 * Check whether a given range contains this range.
	 *
	 * @example
	 * ```js
	 * const a = new Range(0, 100);
	 * const b = new Range(25, 75);
	 *
	 * a.isSuperrange(b); // false
	 * b.isSuperrange(a); // true
	 * ```
	 *
	 * @param range - Range to compare
	 *
	 * @returns Whether this range is contained within the other one
	 */
	isSuperrange(range: Range): boolean {
		return range === this || (this.lower! >= range.lower! && this.upper! <= range.upper!);
	}

	/**
	 * Check whether this range contains the given range
	 *
	 * @example
	 * ```js
	 * const a = new Range(0, 100);
	 * const b = new Range(25, 75);
	 *
	 * a.isSubRange(b); // true
	 * b.isSubRange(a); // false
	 * ```
	 *
	 * @param range - Range to compare
	 *
	 * @returns Whether this range contains the given range
	 */
	isSubrange(range: Range): boolean {
		return range === this || (this.lower! <= range.lower! && this.upper! >= range.upper!);
	}

	/**
	 * Check whether a given range has the same lower and upper bounds as this one.
	 *
	 * @example
	 * ```js
	 * const a = new Range(0, 100);
	 * const b = new Range(0, 100);
	 *
	 * a.equals(a); // true
	 * a.equals(b); // true
	 * ```
	 *
	 * @example
	 * ```js
	 * const a = new Range(0, 100);
	 * const b = new Range(150, 150);
	 *
	 * a.equals(b); // true
	 * ```
	 *
	 * @param range - Range to compare
	 *
	 * @returns Whether the other range has the same lower and upper bounds as this one
	 */
	equals(range: Range): boolean {
		return range === this || (this.lower === range.lower && this.upper === range.upper);
	}
}
