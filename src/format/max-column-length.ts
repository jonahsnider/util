import type {Table} from '../array';

/**
 * Get the lengths of each column in a table.
 * Can include a header.
 *
 * Time complexity: _O(n)_ where _n_ is the number of rows * columns.
 *
 * Space complexity: _O(n)_
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
