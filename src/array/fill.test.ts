import {fill} from './fill.js';

it('fills arrays', () => {
	expect(fill('a', 3)).toStrictEqual(['a', 'a', 'a']);
});
