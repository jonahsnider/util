import {expectType} from 'tsd';
import {
	allDuplicates,
	combineIterables,
	count,
	cycle,
	duplicates,
	every,
	find,
	first,
	frequencyTable,
	includes,
	isEmpty,
	join,
	mapRepeat,
	partition,
	repeat,
	some,
} from './iterable';
import {name} from './object';

describe(name(combineIterables), () => {
	it('combines iterables', () => {
		expect([...combineIterables([])]).toStrictEqual([]);
		expect([...combineIterables([1])]).toStrictEqual([1]);
		expect([...combineIterables([1], [2])]).toStrictEqual([1, 2]);
	});
});

describe(name(join), () => {
	it('joins elements', () => {
		expect(join(['a', 'b', 'c'])).toStrictEqual('a,b,c');
		expect(join(['a', 'b', 'c'], '|')).toStrictEqual('a|b|c');
	});
});

describe(name(every), () => {
	it('returns true if every element passes the predicate', () => {
		expect(every([1, 2, 3] as unknown[], (x): x is number => typeof x === 'number')).toBe(true);
		expect(every([1, 2, 3], () => true)).toBe(true);
	});

	it('returns false if some elements fail the predicate', () => {
		expect(every([1, '2', 3], (x): x is number => typeof x === 'number')).toBe(false);
		expect(every([1, 2, 3], () => false)).toBe(false);
	});
});

describe(name(some), () => {
	it('returns true if any element passes the predicate', () => {
		expect(some([1, 2, 3], x => x === 2)).toBe(true);
	});

	it('returns false if every element fails the predicate', () => {
		expect(some([1, 2, 3], x => x === 4)).toBe(false);
	});
});

describe(name(includes), () => {
	it('returns true when relevant', () => {
		expect(includes([1, 2, 3], 2)).toBe(true);
	});

	it('returns false when relevant', () => {
		expect(includes([1, 2, 3], 4)).toBe(false);
	});
});

describe(name(find), () => {
	it('finds elements', () => {
		expect(find([1, 2, 3], x => x === 2)).toBe(2);
	});

	it('returns undefined when no element is found', () => {
		expect(find([1, 2, 3], x => x === 4)).toBe(undefined);
	});
});

describe(name(partition), () => {
	it('partitions an array', () => {
		expect(partition([1, 2, 3, 4, 5, 6], number => number % 2)).toStrictEqual([
			[1, 3, 5],
			[2, 4, 6],
		]);

		const [numbers, strings] = partition(['a', 2, 'b', 3, 'c'], (element): element is number => typeof element === 'number');

		expectType<number[]>(numbers);
		expectType<string[]>(strings);
	});
});

describe(name(first), () => {
	it('returns first element if take is undefined', () => {
		expect(first([1, 2, 3])).toBe(1);
		expect(first([1, 2, 3], undefined)).toBe(1);
	});

	it('takes the specified number of items', () => {
		expect([...first([1, 2, 3], 0)]).toStrictEqual([]);
		expect([...first([1, 2, 3], 2)]).toStrictEqual([1, 2]);
	});

	it('allows array destructuring', () => {
		const [one, two] = first([1, 2, 3], 2);

		expect(one).toBe(1);
		expect(two).toBe(2);
	});

	it('allows handles small arrays and big takes', () => {
		expect([...first([1], 3)]).toStrictEqual([1]);
		expect([...first([], 3)]).toStrictEqual([]);
	});

	it('works with empty iterables', () => {
		// eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
		expect(first([])).toBe(undefined);
	});
});

describe(name(allDuplicates), () => {
	it('returns duplicate elements', () => {
		expect(allDuplicates([1, 2, 2, 2, 3])).toStrictEqual([2, 2]);
	});

	it('returns empty when there are no duplicates', () => {
		expect(allDuplicates([1, 2, 3])).toStrictEqual([]);
		expect(allDuplicates([])).toStrictEqual([]);
	});
});

describe(name(duplicates), () => {
	it('returns duplicate elements', () => {
		expect(duplicates([1, 2, 2, 2, 3])).toStrictEqual(new Set([2]));
	});

	it('returns empty when there are no duplicates', () => {
		expect(duplicates([1, 2, 3])).toStrictEqual(new Set([]));
		expect(duplicates([])).toStrictEqual(new Set([]));
	});
});

describe(name(frequencyTable), () => {
	it('constructs a frequency table', () => {
		const array = [1, 2, 2, 3, 3, 3];

		expect(frequencyTable(array)).toStrictEqual(
			new Map([
				[1, 1],
				[2, 2],
				[3, 3],
			]),
		);
	});
});

describe(name(count), () => {
	it('counts elements', () => {
		expect(count([1, 2, 3])).toBe(3);
	});

	it('counts empty iterables', () => {
		expect(count([])).toBe(0);
	});
});

describe(name(cycle), () => {
	it('cycles an array', () => {
		expect([...cycle(['a', 'b'], 2)]).toStrictEqual(['a', 'b', 'a', 'b']);
	});

	it('cycles an empty array', () => {
		expect([...cycle([], 2)]).toStrictEqual([]);
	});
});

describe(name(repeat), () => {
	it('repeats', () => {
		expect([...repeat('a', 3)]).toStrictEqual(['a', 'a', 'a']);
		expect([...repeat('a', 0)]).toStrictEqual([]);
	});
});

describe(name(mapRepeat), () => {
	it('repeats', () => {
		expect([...mapRepeat(i => i, 3)]).toStrictEqual([0, 1, 2]);
		expect([...mapRepeat(i => i, 0)]).toStrictEqual([]);
	});
});

describe(name(isEmpty), () => {
	it('returns true for empty iterables', () => {
		expect(isEmpty([])).toBe(true);

		const array: unknown[] = [];
		if (isEmpty(array)) {
			for (const element of array) {
				expectType<never>(element);
			}
		}
	});

	it('returns false for non-empty iterables', () => {
		expect(isEmpty([1, 2, 3])).toBe(false);
	});
});
