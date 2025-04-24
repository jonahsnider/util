import {enumHas} from './enum-has.js';

enum Enum {
	A = 1,
	B = 'str',
	// eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
	C = 'str',
	// eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
	D = 1,
	E = 2,
}

it('returns true', () => {
	expect(enumHas(Enum, 1)).toBe(true);
	expect(enumHas(Enum, 'str')).toBe(true);
});

it('returns false', () => {
	expect(enumHas(Enum, 0)).toBe(false);
	expect(enumHas(Enum, 'other')).toBe(false);
});
