/**
 * Generate a random number within the given bounds.
 *
 * Time complexity: _O(1)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * const value = random(0, 10);
 *
 * 0 <= value && value < 10;
 * ```
 *
 * @param min - Lower bound (inclusive) of the output range
 * @param max - Upper bound (exclusive) of the output range
 *
 * @returns A random number within the given bounds
 *
 * @public
 * @category Math
 */
export function random(min: number, max: number): number {
	if (min > max) {
		throw new RangeError('min exceeded max');
	}

	return Math.random() * (max - min) + min;
}
