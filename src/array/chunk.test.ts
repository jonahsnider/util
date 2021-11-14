import {name} from '../object';
import {chunk} from './chunk';

describe(name(chunk), () => {
	it('chunks', () => {
		const array = [1, 2, 3, 4, 5, 6];

		expect(chunk(array, 2)).toStrictEqual([
			[1, 2],
			[3, 4],
			[5, 6],
		]);

		expect(chunk(array, 5)).toStrictEqual([[1, 2, 3, 4, 5], [6]]);

		expect(chunk(array, 100)).toStrictEqual([array]);

		expect(chunk([1, 2, 3], 3)).toStrictEqual([[1], [2], [3]]);
	});
});
