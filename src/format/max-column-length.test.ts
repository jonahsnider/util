import type {Table} from '../array';
import {maxColumnLength} from './max-column-length';

// prettier-ignore
const table: Table<string> = [
  ['55555', '1',    '333'],
  ['4444',  '1',    '22'],
  ['22',    '4444', '333'],
];

it('finds the longest columns', () => {
	expect(maxColumnLength(table)).toStrictEqual([5, 4, 3]);
});
