import {expectNotType, expectType} from 'tsd';
import {binarySearch, chunk, duplicates, first, frequencyTable, largeToSmall, partition, reverse, sample, shuffle} from './array';
import {stddev} from './math';

// Compilation tests
expectType<undefined>(sample([]));
expectType<undefined>(sample([] as const));
expectNotType<any>(sample([]));
expectType<1 | undefined>(sample([1]));

describe(sample.name, () => {
	it('selects items', () => {
		expect(sample([1])).toBe(1);
		expect(sample([])).toBe(undefined);
		const letters = ['a', 'b', 'c'];
		expect(sample(letters)).toStrictEqual(expect.anything());
	});
});

const iterations = 1e5;

describe(shuffle.name, () => {
	it('shuffles arrays', () => {
		// Testing randomness is always fun
		// If you get unlucky this test will fail
		// Try running it again
		// If you are really unlucky it'll continue to fail

		const array = ['a', 'b', 'c', 'd'];
		const frequencies = {
			abcd: 0,
			abdc: 0,
			acbd: 0,
			acdb: 0,
			adbc: 0,
			adcb: 0,
			bacd: 0,
			badc: 0,
			bcad: 0,
			bcda: 0,
			bdac: 0,
			bdca: 0,
			cabd: 0,
			cadb: 0,
			cbad: 0,
			cbda: 0,
			cdab: 0,
			cdba: 0,
			dabc: 0,
			dacb: 0,
			dbac: 0,
			dbca: 0,
			dcab: 0,
			dcba: 0
		};

		for (let i = 0; i < iterations; i++) {
			shuffle(array);

			const result = array.join('') as keyof typeof frequencies;

			frequencies[result]++;
		}

		expect(stddev(Object.values(frequencies))).toBeCloseTo(0, -3e6 * iterations);

		expect(shuffle([])).toBe(undefined);
	});

	it('shuffles without mutation when configured', () => {
		const array = [1];
		const shuffled = shuffle(array, false);

		expect(shuffled).not.toBe(array);
		expect(shuffled).toStrictEqual(array);
	});
});

describe(binarySearch.name, () => {
	it('searches', () => {
		const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

		function directionFn(value: number) {
			if (value > 5) {
				return 1;
			} else if (value < 5) {
				return -1;
			} else {
				return 0;
			}
		}

		expect(binarySearch(array, directionFn)).toBe(5);
		expect(binarySearch(array.slice(1), directionFn)).toBe(5);

		expect(binarySearch([], () => 1)).toBe(undefined);
	});
});

describe(chunk.name, () => {
	it('chunks', () => {
		const array = [1, 2, 3, 4, 5, 6];

		expect(chunk(array, 2)).toStrictEqual([
			[1, 2],
			[3, 4],
			[5, 6]
		]);

		expect(chunk(array, 5)).toStrictEqual([[1, 2, 3, 4, 5], [6]]);

		expect(chunk(array, 100)).toStrictEqual([array]);

		expect(chunk([1, 2, 3], 3)).toStrictEqual([[1], [2], [3]]);
	});
});

describe(frequencyTable.name, () => {
	it('constructs a frequency table', () => {
		const array = [1, 2, 2, 3, 3, 3];

		expect(frequencyTable(array)).toStrictEqual(
			new Map([
				[1, 1],
				[2, 2],
				[3, 3]
			])
		);
	});
});

describe(reverse.name, () => {
	it('reverses an array', () => {
		expect(reverse([1, 2, 3])).toStrictEqual([3, 2, 1]);
		expect(reverse([1, 2])).toStrictEqual([2, 1]);
		expect(reverse([1])).toStrictEqual([1]);
		expect(reverse([])).toStrictEqual([]);

		const array = [1];
		expect(reverse(array)).not.toBe(array);
	});

	it('reverses an iterable', () => {
		expect(reverse(new Set([1, 2, 3]))).toStrictEqual([3, 2, 1]);
		expect(reverse(new Set([1, 2]))).toStrictEqual([2, 1]);
		expect(reverse(new Set([1]))).toStrictEqual([1]);
		expect(reverse(new Set([]))).toStrictEqual([]);

		const set = new Set([1]);
		expect(reverse(set)).not.toBe(set);
	});
});

describe(partition.name, () => {
	it('partitions an array', () => {
		expect(partition([1, 2, 3, 4, 5, 6], num => num % 2)).toStrictEqual([
			[1, 3, 5],
			[2, 4, 6]
		]);
	});
});

describe(first.name, () => {
	it('returns first element if take is undefined', () => {
		expect(first([1, 2, 3])).toStrictEqual(1);
	});

	it('takes the specified number of items', () => {
		expect(first([1, 2, 3], 2)).toStrictEqual([1, 2]);
	});

	it('allows array destructuring', () => {
		const [one, two] = first([1, 2, 3], 2);

		expect(one).toBe(1);
		expect(two).toBe(2);
	});

	it('allows handles small arrays and big takes', () => {
		expect(first([1], 3)).toStrictEqual([1]);
		expect(first([], 3)).toStrictEqual([]);
	});
});

describe(duplicates.name, () => {
	it('returns duplicate elements', () => {
		expect(duplicates([1, 2, 2, 3])).toStrictEqual([2]);
	});

	it('returns empty when there are no duplicates', () => {
		expect(duplicates([1, 2, 3])).toStrictEqual([]);
		expect(duplicates([])).toStrictEqual([]);
	});
});

describe(largeToSmall.name, () => {
	it('arranges by length', () => {
		expect(largeToSmall({id: 0, length: 0}, {id: 1, length: 0})).toStrictEqual([
			{id: 0, length: 0},
			{id: 1, length: 0}
		]);

		expect(largeToSmall({length: 1}, {length: 0})).toStrictEqual([{length: 1}, {length: 0}]);
		expect(largeToSmall({length: 0}, {length: 1})).toStrictEqual([{length: 1}, {length: 0}]);
	});

	it('arranges by size', () => {
		expect(largeToSmall({id: 0, size: 0}, {id: 1, size: 0})).toStrictEqual([
			{id: 0, size: 0},
			{id: 1, size: 0}
		]);

		expect(largeToSmall({size: 1}, {size: 0})).toStrictEqual([{size: 1}, {size: 0}]);
		expect(largeToSmall({size: 0}, {size: 1})).toStrictEqual([{size: 1}, {size: 0}]);
	});
});
