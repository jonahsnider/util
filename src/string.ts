import {identical} from './identical';
import {frequencyTable} from './iterable';

/**
 * Capitalizes the first letter of a string.
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
 */
export function capitalize<T extends string>(text: T): Capitalize<T> {
	const firstCharacter = text.charAt(0).toUpperCase();

	return `${firstCharacter}${text.slice(firstCharacter.length)}` as Capitalize<T>;
}

/**
 * Uncapitalizes the first letter of a string.
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
 */
export function uncapitalize<T extends string>(text: T): Uncapitalize<T> {
	const firstCharacter = text.charAt(0).toLowerCase();

	return `${firstCharacter}${text.slice(firstCharacter.length)}` as Uncapitalize<T>;
}

/**
 * Truncate text to a certain length, optionally appending a suffix when truncated.
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
 */
export function truncate<T extends string>(text: T, maxLength: number, suffix = ''): T | `${string}${typeof suffix}` {
	if (text.length > maxLength) {
		return `${text.slice(0, maxLength)}${suffix}` as `${string}${typeof suffix}`;
	}

	return text;
}

/**
 * A string replacement function, but specialized for doing multiple replacements in a single pass through the input string.
 *
 * Based off [Nim's `strutils.multiReplace`](https://nim-lang.org/docs/strutils.html#multiReplace%2Cstring%2Cvarargs%5B%5D).
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
 */
export function multiReplace(string: string, replacements: Record<string, string>): string {
	const replacementsIterable: Array<[sub: string, by: string]> = Object.entries(replacements);
	let result = '';
	let index = 0;

	while (index < string.length) {
		foundReplace: do {
			for (const [searchValue, replaceValue] of replacementsIterable) {
				if (string.slice(index).startsWith(searchValue)) {
					result += replaceValue;
					index += searchValue.length;
					break foundReplace;
				}
			}

			result += string[index++];
		} while (false);
	}

	return result;
}

/**
 * Get each line in a string with leading and trailing whitespace removed.
 * Works with LF and CRLF line endings.
 *
 * @example
 * ```js
 * lines('a\nb\nc'); // ['a', 'b', 'c']
 * ```
 *
 * @param string - String to get the lines of
 *
 * @returns An array of lines with leading and trailing whitespace removed
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
 */
export function isAnagram(a: string, b: string): boolean {
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
 */
export function isWhitespace(string: string): boolean {
	return !notWhitespaceRegExp.test(string);
}
