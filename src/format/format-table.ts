import type { Table } from '../array/index.js';
import { maxColumnLength } from './max-column-length.js';

/**
 * Format a table into a string of equally sized columns.
 *
 * Time complexity: _O(n)_ where _n_ is the number of rows * columns.
 *
 * Space complexity: _O(n)_
 *
 * @param table - Table to format
 * @param delimiter - Delimiter to use in columns
 *
 * @returns A formatted string representation of the table
 *
 * @public
 * @category Format
 */
export function formatTable(table: Table<string>, delimiter = ' '): string {
	const maxLengths = maxColumnLength(table);

	return table.map((row) => row.map((column, index) => column.padEnd(maxLengths[index])).join(delimiter)).join('\n');
}
