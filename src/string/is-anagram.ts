import {identical} from '../identical/index.js';
import {frequencyTable} from '../iterable/index.js';

/**
 * Check if 2 strings are anagrams of each other.
 * Case-sensitive.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(n)_
 *
 * @example
 * ```js
 * isAnagram('abc', 'cba'); // true
 * ```
 *
 * @example
 * ```js
 * isAnagram('abc', 'Cba'); // false
 * ```
 *
 * @param a - First string to compare
 * @param b - Second string to compare
 *
 * @returns Whether the strings are anagrams of each other
 *
 * @public
 * @category String
 */
export function isAnagram<T>(a: ArrayLike<T> & Iterable<T>, b: ArrayLike<T> & Iterable<T>): boolean {
	if (a === b) {
		return true;
	}

	if (a.length !== b.length) {
		return false;
	}

	const aFreqTable = frequencyTable(a);
	const bFreqTable = frequencyTable(b);

	return identical(aFreqTable, bFreqTable);
}
