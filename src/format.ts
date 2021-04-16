import {Table} from '.';

/** @private */
const firstCharacter = /^./;

/**
 * Capitalizes the first letter of a string
 *
 * @example
 * ```ts
 * capitalize('hello') === 'Hello';
 * ```
 *
 * @param text - Text to capitalize
 *
 * @returns Capitalized string
 */
export function capitalize(text: string): string {
	return text.replace(firstCharacter, firstCharacter => firstCharacter.toUpperCase());
}

/**
 * Truncate text to a certain length, optionally appending a suffix when truncated.
 *
 * @example
 * ```ts
 * truncate('hello, world', 5, '...') === 'hello...';
 * ```
 *
 * @param text - Text to truncate
 * @param maxLength - Maximum length before text is truncated
 * @param suffix - Suffix to append if text was truncated
 *
 * @returns Truncated text
 */
export function truncate(text: string, maxLength: number, suffix?: string): string {
	if (text.length > maxLength) {
		return `${text.slice(0, maxLength)}${suffix ?? ''}`;
	}

	return text;
}

/**
 * Get the lengths of each column in a table.
 * Can include a header.
 *
 * @param table - The table of strings to use for calculations
 *
 * @returns An array of lengths
 */
export function maxColumnLength(table: Table<string>): number[] {
	const lengths = table[0].map(column => column.length);

	for (const row of table) {
		for (let index = 0; index < row.length; index++) {
			const length = lengths[index];
			const {length: columnLength} = row[index];

			if (length < columnLength) {
				lengths[index] = columnLength;
			}
		}
	}

	return lengths;
}

/**
 * Format a table into a string of equally sized columns.
 *
 * @param table - Table to format
 * @param delimiter - Delimiter to use in columns
 *
 * @returns A formatted string representation of the table
 */
export function formatTable(table: Table<string>, delimiter = ' '): string {
	const maxLengths = maxColumnLength(table);

	return table.map(row => row.map((column, index) => column.padEnd(maxLengths[index])).join(delimiter)).join('\n');
}

/**
 * A string replacement function, but specialized for doing multiple replacements in a single pass through the input string.
 *
 * Based off [Nim's `strutils.multiReplace`](https://nim-lang.org/docs/strutils.html#multiReplace%2Cstring%2Cvarargs%5B%5D)
 *
 * @example
 * ```ts
 * multiReplace('a b c', {a: 'c', c: 'a'}) === 'c b a';
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
	let i = 0;

	while (i < string.length) {
		foundReplace: do {
			for (const [searchValue, replaceValue] of replacementsIterable) {
				if (string.slice(i).startsWith(searchValue)) {
					result += replaceValue;
					i += searchValue.length;
					break foundReplace;
				}
			}

			result += string[i++];
		} while (false);
	}

	return result;
}
