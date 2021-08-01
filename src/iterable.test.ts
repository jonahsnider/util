import {combineIterables, every, join, some} from './iterable';

describe(join.name, () => {
	it('joins elements', () => {
		expect(join(['a', 'b', 'c'])).toStrictEqual('a,b,c');
		expect(join(['a', 'b', 'c'], '|')).toStrictEqual('a|b|c');
	});
});

describe(combineIterables.name, () => {
	it('combines iterables', () => {
		expect([...combineIterables([])]).toStrictEqual([]);
		expect([...combineIterables([1])]).toStrictEqual([1]);
		expect([...combineIterables([1], [2])]).toStrictEqual([1, 2]);
	});
});

describe(every.name, () => {
	it('returns true if every element passes the predicate', () => {
		expect(every([1, 2, 3] as unknown[], (x): x is number => typeof x === 'number')).toBe(true);
		expect(every([1, 2, 3], () => true)).toBe(true);
	});

	it('returns false if some elements fail the predicate', () => {
		expect(every([1, '2', 3], (x): x is number => typeof x === 'number')).toBe(false);
		expect(every([1, 2, 3], () => false)).toBe(false);
	});
});

describe(some.name, () => {
	it('returns true if any element passes the predicate', () => {
		expect(some([1, 2, 3], x => x === 2)).toBe(true);
	});

	it('returns true if any element passes the predicate', () => {
		expect(some([1, 2, 3], x => x === 2)).toBe(true);
	});
});
