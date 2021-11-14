import {fill} from './fill';

it('fills arrays', () => {
	expect(fill('a', 3)).toStrictEqual(['a', 'a', 'a']);
});
