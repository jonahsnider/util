import {identical} from './identical';
import {frequencyTable} from './iterable';

/**
 * Capitalizes the first letter of a string.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(n)_
 *
 * @example
 * ```js
 * capitalize('hello'); // 'Hello'
 * ```
 *
 * @param text - Text to capitalize
 *
 * @see {@link uncapitalize} for the inverse operation
 *
 * @returns Capitalized string
 *
 * @public
 */
export function capitalize<T extends string>(text: T): Capitalize<T> {
	const firstCharacter = text.charAt(0).toUpperCase();

	return `${firstCharacter}${text.slice(firstCharacter.length)}` as Capitalize<T>;
}

/**
 * Uncapitalizes the first letter of a string.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(n)_
 *
 * @example
 * ```js
 * uncapitalize('HELLO'); // hELLO
 * ```
 *
 * @param text - Text to uncapitalize
 *
 * @see {@link capitalize} for the inverse operation
 *
 * @returns Uncapitalized string
 *
 * @public
 */
export function uncapitalize<T extends string>(text: T): Uncapitalize<T> {
	const firstCharacter = text.charAt(0).toLowerCase();

	return `${firstCharacter}${text.slice(firstCharacter.length)}` as Uncapitalize<T>;
}

/**
 * Truncate text to a certain length, optionally appending a suffix when truncated.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(n)_
 *
 * @example
 * ```js
 * truncate('hello, world', 5, '...'); // 'hello...'
 * ```
 *
 * @param text - Text to truncate
 * @param maxLength - Maximum length before text is truncated
 * @param suffix - Suffix to append if text was truncated
 *
 * @returns Truncated text
 *
 * @public
 */
export function truncate<T extends string>(text: T, maxLength: number, suffix = ''): T | `${string}${typeof suffix}` {
	if (text.length > maxLength) {
		return `${text.slice(0, maxLength)}${suffix}`;
	}

	return text;
}

/**
 * A string replacement function, but specialized for doing multiple replacements in a single pass through the input string.
 *
 * Based off [Nim's `strutils.multiReplace`](https://nim-lang.org/docs/strutils.html#multiReplace%2Cstring%2Cvarargs%5B%5D).
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(n)_
 *
 * @example
 * ```js
 * multiReplace('a b c', {a: 'c', c: 'a'}); // 'c b a'
 * ```
 *
 * @param string - The string to replace values in
 * @param replacements - An object of replacements where keys are the search values and values are the replacement values
 *
 * @returns A new string with the replacements applied
 *
 * @public
 */
export function multiReplace(string: string, replacements: Record<string, string>): string {
	const replacementsIterable: Iterable<[sub: string, by: string]> = Object.entries(replacements);
	let result = '';
	let index = 0;

	while (index < string.length) {
		/* eslint-disable no-labels */
		foundReplace: {
			for (const [searchValue, replaceValue] of replacementsIterable) {
				if (string.slice(index).startsWith(searchValue)) {
					result += replaceValue;
					index += searchValue.length;
					break foundReplace;
				}
			}

			result += string[index++];
		}
		/* eslint-enable no-labels */
	}

	return result;
}

/**
 * Get each line in a string with leading and trailing whitespace removed.
 * Works with LF and CRLF line endings.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(n)_
 *
 * @example
 * ```js
 * lines('a\nb\nc'); // ['a', 'b', 'c']
 * ```
 *
 * @param string - String to get the lines of
 *
 * @returns An array of lines with leading and trailing whitespace removed
 *
 * @public
 */
export function lines(string: string): string[] {
	return string
		.split('\n')
		.map(line => line.trim())
		.filter(line => line.length > 0);
}

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

const notWhitespaceRegExp = /\S/;

/**
 * Check whether a string is empty or whitespace.
 *
 * Time complexity: _O(1)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * isWhitespace(' \n '); // true
 * ```
 *
 * @example
 * ```js
 * isWhitespace(''); // true
 * ```
 *
 * @param string - String to check
 *
 * @returns Whether the string is whitespace
 *
 * @public
 */
export function isWhitespace(string: string): boolean {
	return !notWhitespaceRegExp.test(string);
}
