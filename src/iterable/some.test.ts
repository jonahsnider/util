import {some} from './some.js';
import {includes} from './includes.js';

it('returns true if any element passes the predicate', () => {
	expect(some([1, 2, 3], x => x === 2)).toBe(true);
});

it('returns false if every element fails the predicate', () => {
	expect(some([1, 2, 3], x => x === 4)).toBe(false);
});

it('returns true when relevant', () => {
	expect(includes([1, 2, 3], 2)).toBe(true);
});

it('returns false when relevant', () => {
	expect(includes([1, 2, 3], 4)).toBe(false);
});
