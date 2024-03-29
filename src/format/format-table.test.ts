import type {Table} from '../array';
import {formatTable} from './format-table';

// prettier-ignore
const table: Table<string> = [
  ['55555', '1',    '333'],
  ['4444',  '1',    '22'],
  ['22',    '4444', '333'],
];

it('formats tables', () => {
	// prettier-ignore
	const formatted = [
      '55555 1    333',
      '4444  1    22 ',
      '22    4444 333'
    ].join('\n');

	expect(formatTable(table)).toBe(formatted);
});
