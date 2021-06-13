import {Table} from './array';
import {capitalize, formatTable, maxColumnLength, multiReplace, truncate, uncapitalize} from './format';

describe(capitalize.name, () => {
	it('capitalizes strings', () => {
		expect(capitalize('hello')).toBe('Hello');
	});
});

describe(uncapitalize.name, () => {
	it('uncapitalizes strings', () => {
		expect(uncapitalize('Hello')).toBe('hello');
	});
});

describe(truncate.name, () => {
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

describe(multiReplace.name, () => {
	it('replaces strings', () => {
		expect(multiReplace('a b c', {a: 'c', c: 'a'})).toBe('c b a');
	});

	it('replaces strings with differing search value & replacement value lengths', () => {
		expect(multiReplace('a b c', {a: 'ccc', c: 'aaa'})).toBe('ccc b aaa');
		expect(multiReplace('aaa b ccc', {aaa: 'c', ccc: 'a'})).toBe('c b a');
	});

	it('handles empty strings', () => {
		expect(multiReplace('', {})).toBe('');
		expect(multiReplace('', {a: 'c', c: 'a'})).toBe('');
		expect(multiReplace('', {'': 'a'})).toBe('');
	});

	it("doesn't modify strings when not given replacements", () => {
		expect(multiReplace('a b c', {})).toBe('a b c');
	});
});
