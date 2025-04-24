import {truncate} from './truncate.js';

it('truncates long strings', () => {
	expect(truncate('hello', 3)).toBe('hel');
});

it("doesn't truncate short strings", () => {
	expect(truncate('hello', 10)).toBe('hello');
});

it('appends a suffix when provided', () => {
	expect(truncate('hello', 3, '...')).toBe('hel...');
});
