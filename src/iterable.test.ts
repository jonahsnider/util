import {join} from './iterable';

describe(join.name, () => {
	it('joins elements', () => {
		expect(join(['a', 'b', 'c'])).toStrictEqual('a,b,c');
		expect(join(['a', 'b', 'c'], '|')).toStrictEqual('a|b|c');
	});
});
