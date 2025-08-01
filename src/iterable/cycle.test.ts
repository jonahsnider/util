import { cycle } from './cycle.js';

it('cycles an array', () => {
	expect([...cycle(['a', 'b'], 2)]).toStrictEqual(['a', 'b', 'a', 'b']);
});

it('cycles an empty array', () => {
	expect([...cycle([], 2)]).toStrictEqual([]);
});
