import type {Table} from './array';

/**
 * Get the lengths of each column in a table.
 * Can include a header.
 *
 * @param table - The table of strings to use for calculations
 *
 * @returns An array of lengths
 *
 * @public
 */
export function maxColumnLength(table: Table<string>): number[] {
	const lengths = table[0].map(column => column.length);

	for (const row of table) {
		for (const [index, {length: columnLength}] of row.entries()) {
			const length = lengths[index];

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
 *
 * @public
 */
export function formatTable(table: Table<string>, delimiter = ' '): string {
	const maxLengths = maxColumnLength(table);

	return table.map(row => row.map((column, index) => column.padEnd(maxLengths[index])).join(delimiter)).join('\n');
}
