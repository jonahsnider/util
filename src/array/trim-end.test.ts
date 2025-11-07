import { describe, expect, it } from 'vitest';
import { trimEnd } from './trim-end.js';

const STRING = 'aabbaa';
const ARRAY = ['a', 'a', 'b', 'b', 'a', 'a'] as const;

describe('strings', () => {
	it('trims the start', () => {
		expect(trimEnd(STRING, 'a')).toBe('aabb');
	});

	it("does nothing when the end doesn't match", () => {
		expect(trimEnd(STRING, 'b')).toBe(STRING);
	});
});

describe('arrays', () => {
	it('trims the end', () => {
		expect(trimEnd(ARRAY, 'a')).toEqual(['a', 'a', 'b', 'b']);
	});

	it("does nothing when the end doesn't match", () => {
		expect(trimEnd(ARRAY, 'b')).toEqual(ARRAY);
	});
});
