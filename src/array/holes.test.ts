import {holes} from './holes.js';

it('finds holes', () => {
	// eslint-disable-next-line no-sparse-arrays
	expect(holes([, ,])).toStrictEqual([0, 1]);
	// eslint-disable-next-line no-sparse-arrays
	expect(holes([0, , 2])).toStrictEqual([1]);
});

it('returns empty array when there are no holes', () => {
	expect(holes([])).toStrictEqual([]);
	expect(holes([0, 1, 2])).toStrictEqual([]);
	expect(holes([0, undefined, 2])).toStrictEqual([]);
});
