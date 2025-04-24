/* eslint-disable @typescript-eslint/naming-convention */

import {omit} from './omit.js';

it('omits keys from a plain object', () => {
	expect(omit({a: 1, b: 2, c: 3}, ['c'])).toStrictEqual({a: 1, b: 2});
});

it('omits keys from an array', () => {
	expect(omit([1, 2, 3], [2])).toStrictEqual({0: 1, 1: 2});
});

it('omits keys from an array with tuple type', () => {
	const tuple = [1, 2, 3] as const;
	expect(omit(tuple, [2])).toStrictEqual({0: 1, 1: 2});
});

it('omits when the same key is specified several times', () => {
	expect(omit({a: 1, b: 2, c: 3}, ['c', 'c'])).toStrictEqual({a: 1, b: 2});
});

it('omits when the same key is specified several times in an array', () => {
	expect(omit([1, 2, 3], [2, 2])).toStrictEqual({0: 1, 1: 2});
});

it('omits from an empty object', () => {
	expect(omit({}, [])).toStrictEqual({});
});

it('omits with non-string keys', () => {
	const three = Symbol('3');

	expect(omit({'1': 'a', 2: 'b', [three]: 'c', 4: 'd'}, ['1', 2, three])).toStrictEqual({4: 'd'});
});
