import { expect, it } from 'vitest';
import { lines } from './lines.js';

it('splits strings into lines', () => {
	expect(lines('')).toStrictEqual(['']);
	expect(lines(' ')).toStrictEqual([' ']);
	expect(lines('\n')).toStrictEqual(['', '']);
	expect(lines('\r\n')).toStrictEqual(['', '']);

	expect(lines('a\r\nb')).toStrictEqual(['a', 'b']);
	expect(lines('a\r\n\nb')).toStrictEqual(['a', '', 'b']);

	expect(lines('a\r\nb\nc')).toStrictEqual(['a', 'b', 'c']);
	expect(lines('\ra\r\nb\nc\n')).toStrictEqual(['', 'a', 'b', 'c', '']);
});
