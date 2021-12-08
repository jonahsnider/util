import {lastIndexOfFirstGroup} from '../iterable/last-index-of-first-group';

/**
 * Removes the leading `start` characters from a string.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(n)_
 *
 * @example
 * ```js
 * trimStart('aabbcc', 'a'); // 'bbcc'
 * ```
 *
 * @param string - The string to trim
 * @param start - The character to remove from the start of `string`
 *
 * @returns A string with the leading `start` characters removed
 *
 * @see {@link (trimEnd:1)} to do the same thing but trim from the end of a string
 *
 * @public
 * @category String
 */
export function trimStart(string: string, start: string): string;
/**
 * Removes the leading `start` characters from an array.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(n)_
 *
 * @example
 * ```js
 * trimStart(['a', 'a', 'b', 'b', 'c', 'c'], 'a'); // ['b', 'b', 'c', 'c']
 * ```
 *
 * @param array - The array to trim
 * @param start - The character to remove from the start of `array`
 *
 * @returns A shallow-copied array with the leading `start` characters removed
 *
 * @see {@link (trimEnd:2)} to do the same thing but trim from the end of an array
 *
 * @public
 * @category Array
 */
export function trimStart<T>(array: readonly T[], start: T): T[];
export function trimStart<T>(base: string | readonly T[], toTrim: string | T): string | T[] {
	// `lastIndexOfStartsWith` consumes the first few elements of the iterable which means you can't use `skip` on `base` since it's been mutated
	const index = lastIndexOfFirstGroup(base, toTrim);

	if (index === -1) {
		if (typeof base === 'string') {
			return base;
		}

		// Return a shallow copy like Array.prototype.slice does
		return [...base];
	}

	return base.slice(index + 1);
}
