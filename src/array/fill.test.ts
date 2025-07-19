import { fill } from './fill.js';

it('fills arrays', () => {
	expect(fill(3, 'a')).toStrictEqual(['a', 'a', 'a']);
});
