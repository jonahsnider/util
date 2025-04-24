import {find} from './find.js';

it('finds elements', () => {
	expect(find([1, 2, 3], x => x === 2)).toBe(2);
});

it('returns undefined when no element is found', () => {
	expect(find([1, 2, 3], x => x === 4)).toBe(undefined);
});
