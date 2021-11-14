import {name} from '../object';
import {sortObject} from './sort-object';

describe(name(sortObject), () => {
	it('sorts', () => {
		const object = {a: 3, c: 1, b: 2};

		const sorted = sortObject(object, (a, b) => a - b);

		expect(sorted).toStrictEqual(Object.entries({c: 1, b: 2, a: 3}));
	});
});
