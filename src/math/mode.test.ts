import {mode} from './mode';

it('calculates the mode', () => {
	expect(mode([])).toStrictEqual([]);
	expect(mode([1])).toStrictEqual([1]);
	expect(mode([1, 3, 6, 6, 6, 6, 7, 7, 12, 12, 17])).toStrictEqual([6]);
	expect(mode([1, 2, 2, 3, 4, 7, 9])).toStrictEqual([2]);
	expect(mode([1, 1, 2, 4, 4])).toStrictEqual([1, 4]);
});
