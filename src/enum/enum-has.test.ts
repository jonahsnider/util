import { expect, it } from 'vite-plus/test';
import { enumHas } from './enum-has.js';

// oxlint-disable typescript/no-duplicate-enum-values -- Duplicate values are the behavior under test
enum Enum {
	A = 1,
	B = 'str',
	C = 'str',
	D = 1,
	E = 2,
}
// oxlint-enable typescript/no-duplicate-enum-values

it('returns true', () => {
	expect(enumHas(Enum, 1)).toBe(true);
	expect(enumHas(Enum, 'str')).toBe(true);
});

it('returns false', () => {
	expect(enumHas(Enum, 0)).toBe(false);
	expect(enumHas(Enum, 'other')).toBe(false);
});
