import { firstIndexOfLastGroup } from './first-index-of-last-group.js';

/**
 * Removes the trailing `end` characters from a string.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(n)_
 *
 * @example
 * ```js
 * trimEnd('aabbcc', 'c'); // 'aabb'
 * ```
 *
 * @param string - The string to trim
 * @param end - The character to remove from the end of `string`
 *
 * @returns A string with the leading `end` characters removed
 *
 * @see {@link (trimStart:1)} to do the same thing but trim from the start of a string
 *
 * @public
 * @category String
 */
export function trimEnd(string: string, end: string): string;
/**
 * Removes the trailing `end` characters from an array.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(n)_
 *
 * @example
 * ```js
 * trimEnd(['a', 'a', 'b', 'b', 'c', 'c'], 'c'); // ['a', 'a', 'b', 'b']
 * ```
 *
 * @param array - The array to trim
 * @param end - The character to remove from the end of `array`
 *
 * @returns A shallow-copied array with the trailing `start` characters removed
 *
 * @see {@link (trimStart:2)} to do the same thing but trim from the start of an array
 *
 * @public
 * @category Array
 */
export function trimEnd<T>(array: readonly T[], end: T): T[];
export function trimEnd<T>(base: string | readonly T[], toTrim: string | T): string | T[] {
	// `firstIndexOfLastGroup()` consumes the first few elements of the iterable which means you can't use `skip()` on `base` since it's been mutated
	const index = firstIndexOfLastGroup(base, toTrim);

	if (index === -1) {
		if (typeof base === 'string') {
			return base;
		}

		// Return a shallow copy like Array.prototype.slice does
		return [...base];
	}

	return base.slice(0, index);
}
