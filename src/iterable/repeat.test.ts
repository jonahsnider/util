import {name} from '../object';
import {repeat} from './repeat';

describe(name(repeat), () => {
	it('repeats', () => {
		expect([...repeat('a', 3)]).toStrictEqual(['a', 'a', 'a']);
		expect([...repeat('a', 0)]).toStrictEqual([]);
	});
});
