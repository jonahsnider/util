import {name} from '../object';
import {isWhitespace} from './is-whitespace';

describe(name(isWhitespace), () => {
	it('returns true for empty strings', () => {
		expect(isWhitespace('')).toBe(true);
	});

	it('returns true for whitespace', () => {
		expect(isWhitespace(' ')).toBe(true);
		expect(isWhitespace('\n')).toBe(true);
		expect(isWhitespace('\r\n')).toBe(true);
	});

	it('returns false for non-whitespace', () => {
		expect(isWhitespace('a')).toBe(false);
		expect(isWhitespace('   a   ')).toBe(false);

		expect(isWhitespace('0')).toBe(false);
	});
});
