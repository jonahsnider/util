import {name} from '../object';
import {findIndexAll} from './find-index-all';

describe(name(findIndexAll), () => {
	it('finds all indexes', () => {
		expect(findIndexAll([1, 2, 1, 3, 1], element => element === 1)).toStrictEqual([0, 2, 4]);
	});
});
