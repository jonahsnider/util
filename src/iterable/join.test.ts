import {join} from './join.js';

it('joins elements', () => {
	expect(join(['a', 'b', 'c'])).toStrictEqual('a,b,c');
	expect(join(['a', 'b', 'c'], '|')).toStrictEqual('a|b|c');
});
