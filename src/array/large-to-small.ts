/**
 * An object with a `length` property.
 * @internal
 */
type ObjectWithLength = {length: number};
export {ObjectWithLength as _ObjectWithLength};

/**
 * An object with a `size` property.
 * @internal
 */
type ObjectWithSize = {size: number};
export {ObjectWithSize as _ObjectWithSize};

/**
 * A tuple of two elements arranged so the largest element is first and the smallest is last.
 *
 * @internal
 */
type ArrangedLargestToSmallest<A, B> = [largest: A, smallest: B] | [largest: B, smallest: A];
export {ArrangedLargestToSmallest as _ArrangedLargestToSmallest};

/**
 * Arrange 2 objects in a tuple by their length.
 * Useful for situations where you are iterating `a` or `b` depending on which is larger.
 *
 * Time complexity: _O(1)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * const a = [1, 2];
 * const b = [1, 2, 3];
 *
 * const [largest, smallest] = largeToSmall(a, b);
 *
 * console.log(largest); // [1, 2, 3]
 * console.log(smallest); // [1, 2]
 * ```
 *
 * @param a - First object
 * @param b - Second object
 *
 * @throws If `a` does not have a `length` or `size` property
 *
 * @public
 */
export function largeToSmall<A extends ObjectWithLength, B extends ObjectWithLength>(a: A, b: B): ArrangedLargestToSmallest<A, B>;
/**
 * Arrange 2 objects in a tuple by their size.
 * Useful for situations where you are iterating `a` or `b` depending on which is larger.
 *
 * Time complexity: _O(1)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * const a = new Set([1, 2]);
 * const b = new Set([1, 2, 3]);
 *
 * const [largest, smallest] = largeToSmall(a, b);
 *
 * console.log(largest); // Set(3) { 1, 2, 3 }
 * console.log(smallest); // Set(2) { 1, 2 }
 * ```
 *
 * @param a - First object
 * @param b - Second object
 *
 * @throws If `a` does not have a `length` or `size` property
 *
 * @public
 */
export function largeToSmall<A extends ObjectWithSize, B extends ObjectWithSize>(a: A, b: B): ArrangedLargestToSmallest<A, B>;
export function largeToSmall<A extends ObjectWithSize | ObjectWithLength, B extends ObjectWithSize | ObjectWithLength>(
	a: A,
	b: B,
): ArrangedLargestToSmallest<A, B> {
	let key: 'size' | 'length' | undefined;

	if ('size' in a) {
		key = 'size';
	} else if ('length' in a) {
		key = 'length';
	}

	if (!key) {
		throw new RangeError('Expected a to have a size property or a length property');
	}

	// @ts-expect-error We have validated the keys at this point
	if (a[key] < b[key]) {
		return [b, a];
	}

	return [a, b];
}
