import {Table} from './';
import {formatTable, maxColumnLength} from './format';

// prettier-ignore
const table: Table<string> = [
  ['55555', '1',    '333'],
  ['4444',  '1',    '22'],
  ['22',    '4444', '333'],
];

describe(maxColumnLength.name, () => {
	it('finds the longest columns', () => {
		expect(maxColumnLength(table)).toStrictEqual([5, 4, 3]);
	});
});

describe(formatTable.name, () => {
	it('formats tables', () => {
		// prettier-ignore
		const formatted = [
      '55555 1    333',
      '4444  1    22 ',
      '22    4444 333'
    ].join('\n');

		expect(formatTable(table)).toBe(formatted);
	});
});
