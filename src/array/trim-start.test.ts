import { describe, expect, it } from 'vitest';
import { trimStart } from './trim-start.js';

const STRING = 'aabbaa';
const ARRAY = ['a', 'a', 'b', 'b', 'a', 'a'] as const;

describe('strings', () => {
	it('trims the start', () => {
		expect(trimStart(STRING, 'a')).toBe('bbaa');
	});

	it("does nothing when the start doesn't match", () => {
		expect(trimStart(STRING, 'b')).toBe(STRING);
	});
});

describe('arrays', () => {
	it('trims the start', () => {
		expect(trimStart(ARRAY, 'a')).toEqual(['b', 'b', 'a', 'a']);
	});

	it("does nothing when the start doesn't match", () => {
		expect(trimStart(ARRAY, 'b')).toEqual(ARRAY);
	});
});
