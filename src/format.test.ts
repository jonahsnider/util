import {capitalize, formatTable, maxColumnLength, Table, truncate} from './format';

describe('capitalize', () => {
	it('capitalizes strings', () => {
		expect(capitalize('hello')).toBe('Hello');
	});
});

describe('truncate', () => {
	it('truncates long strings', () => {
		expect(truncate('hello', 3)).toBe('hel');
	});

	it("doesn't truncate short strings", () => {
		expect(truncate('hello', 10)).toBe('hello');
	});

	it('appends a suffix when provided', () => {
		expect(truncate('hello', 3, '...')).toBe('hel...');
	});
});

// prettier-ignore
const table: Table<string> = [
  ['55555', '1',    '333'],
  ['4444',  '1',    '22'],
  ['22',    '4444', '333'],
];

describe('maxColumnLength', () => {
	it('finds the longest columns', () => {
		expect(maxColumnLength(table)).toStrictEqual([5, 4, 3]);
	});
});

describe('formatTable', () => {
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
