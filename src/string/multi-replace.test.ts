import {multiReplace} from './multi-replace.js';

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
	// eslint-disable-next-line @typescript-eslint/naming-convention
	expect(multiReplace('', {'': 'a'})).toBe('');
});

it("doesn't modify strings when not given replacements", () => {
	expect(multiReplace('a b c', {})).toBe('a b c');
});
