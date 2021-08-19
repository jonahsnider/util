import {isAnagram, capitalize, lines, multiReplace, truncate, uncapitalize} from './string';

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

describe(lines.name, () => {
	it('splits strings into lines', () => {
		expect(lines('')).toStrictEqual([]);
		expect(lines(' ')).toStrictEqual([]);
		expect(lines('\n')).toStrictEqual([]);
		expect(lines('\r\n')).toStrictEqual([]);

		expect(lines('a\r\nb')).toStrictEqual(['a', 'b']);
		expect(lines('a\r\n\nb')).toStrictEqual(['a', 'b']);

		expect(lines('a\r\nb\nc')).toStrictEqual(['a', 'b', 'c']);
		expect(lines('\ra\r\nb\nc\n')).toStrictEqual(['a', 'b', 'c']);
	});
});

describe(isAnagram.name, () => {
	it('returns true for anagrams', () => {
		expect(isAnagram('abc', 'cba')).toBe(true);
		expect(isAnagram('', '')).toBe(true);
	});

	it('returns false for non-anagrams', () => {
		expect(isAnagram('abc', 'aa')).toBe(false);
		expect(isAnagram('abc', 'abcc')).toBe(false);
	});
});
