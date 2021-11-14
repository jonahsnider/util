import {name} from '../object';
import {isAnagram} from './is-anagram';

describe(name(isAnagram), () => {
	it('returns true for anagrams', () => {
		expect(isAnagram('abc', 'cba')).toBe(true);
		expect(isAnagram('', '')).toBe(true);
	});

	it('returns false for non-anagrams', () => {
		expect(isAnagram('abc', 'aa')).toBe(false);
		expect(isAnagram('abc', 'abcc')).toBe(false);
	});
});
