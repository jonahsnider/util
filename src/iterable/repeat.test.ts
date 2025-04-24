import {repeat} from './repeat.js';

it('repeats', () => {
	expect([...repeat('a', 3)]).toStrictEqual(['a', 'a', 'a']);
	expect([...repeat('a', 0)]).toStrictEqual([]);
});
