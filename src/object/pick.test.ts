import {pick} from './pick';

it('picks keys from a plain object', () => {
	expect(pick({a: 1, b: 2, c: 3}, ['a', 'b'])).toStrictEqual({a: 1, b: 2});
});

it('picks keys from an array', () => {
	expect(pick([1, 2, 3], [0, 1])).toStrictEqual({0: 1, 1: 2});
});

it('picks keys from an array with tuple type', () => {
	const tuple = [1, 2, 3] as const;
	expect(pick(tuple, [0, 1])).toStrictEqual({0: 1, 1: 2});
});

it('picks when the same key is specified several times', () => {
	expect(pick({a: 1, b: 2, c: 3}, ['a', 'b', 'a'])).toStrictEqual({a: 1, b: 2});
});

it('picks when the same key is specified several times in an array', () => {
	expect(pick([1, 2, 3], [0, 1, 0])).toStrictEqual({0: 1, 1: 2});
});

it('picks from an empty object', () => {
	expect(pick({}, [])).toStrictEqual({});
});
