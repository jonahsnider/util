/** @private */
const firstCharacter = /^./;

/**
 * Capitalizes the first letter of a string
 *
 * @example
 * ```
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
 * ```
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

/** A 2-dimensional table of type `T`. */
export type Table<T> = T[][];

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

			if (length < row[index].length) {
				lengths[index] = row[index].length;
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
