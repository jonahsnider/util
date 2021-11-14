import {random} from './random';

/**
 * Generate a random integer within the given bounds.
 *
 * Time complexity: _O(1)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * randomInt(0, 3); // 0, 1, or 2
 * ```
 *
 * @param min - Lower bound (inclusive) of the output range
 * @param max - Upper bound (exclusive) of the output range
 *
 * @returns A random integer within the given bounds
 *
 * @public
 */
export function randomInt(min: number, max: number): number {
	if (__DEV__ && min > max) {
		throw new RangeError('min exceeded max');
	}

	return Math.floor(random(Math.ceil(min), Math.floor(max)));
}
