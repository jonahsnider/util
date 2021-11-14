import {name} from '../object';
import {fill} from './fill';

describe(name(fill), () => {
	it('fills arrays', () => {
		expect(fill('a', 3)).toStrictEqual(['a', 'a', 'a']);
	});
});
