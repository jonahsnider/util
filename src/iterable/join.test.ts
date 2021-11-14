import {join} from './join';

it('joins elements', () => {
	expect(join(['a', 'b', 'c'])).toStrictEqual('a,b,c');
	expect(join(['a', 'b', 'c'], '|')).toStrictEqual('a|b|c');
});
