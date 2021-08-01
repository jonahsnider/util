import {combineIterables, every, find, includes, join, some} from './iterable';

describe(combineIterables.name, () => {
	it('combines iterables', () => {
		expect([...combineIterables([])]).toStrictEqual([]);
		expect([...combineIterables([1])]).toStrictEqual([1]);
		expect([...combineIterables([1], [2])]).toStrictEqual([1, 2]);
	});
});

describe(join.name, () => {
	it('joins elements', () => {
		expect(join(['a', 'b', 'c'])).toStrictEqual('a,b,c');
		expect(join(['a', 'b', 'c'], '|')).toStrictEqual('a|b|c');
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

describe(includes.name, () => {
	it('returns true when relevant', () => {
		expect(includes([1, 2, 3], 2)).toBe(true);
	});

	it('returns false when relevant', () => {
		expect(includes([1, 2, 3], 4)).toBe(false);
	});
});

describe(find.name, () => {
	it('finds elements', () => {
		expect(find([1, 2, 3], x => x === 2)).toBe(2);
	});

	it('returns undefined when no element is found', () => {
		expect(find([1, 2, 3], x => x === 4)).toBe(undefined);
	});
});
