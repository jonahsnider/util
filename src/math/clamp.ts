/**
 * Returns the value nearest to value which is within the closed range [`min`, `max`].
 *
 * Time complexity: _O(1)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * const value = clamp(Math.random() * 100, 25, 75n);
 *
 * console.log(25 <= value && value <= 75n); // true
 * ```
 *
 * @param value - The value to clamp
 * @param min - The lower bound of the range of numbers
 * @param max - The upper bound of the range of numbers
 *
 * @returns The value nearest to `value` which is within the provided range
 *
 * @public
 */
export function clamp<T extends number | bigint, M1 extends number | bigint, M2 extends number | bigint>(value: T, min: M1, max: M2): T | M1 | M2 {
	if (__DEV__ && min > max) {
		throw new RangeError('min exceeded max');
	}

	// Using if statements here is in theory faster than the naive solution of Math.min(Math.max(value, min), max) since the if statements do 1-2 comparisons while the
	// naive solution always does 2 comparisons
	if (value < min) {
		return min;
	}

	if (value > max) {
		return max;
	}

	return value;
}
