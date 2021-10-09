import {expectNotType, expectType} from 'tsd';
import {
	binarySearch,
	chunk,
	fill,
	findIndexAll,
	holes,
	indexOfAll,
	largeToSmall,
	mapFill,
	padEnd,
	padStart,
	pull,
	pullAll,
	replace,
	replaceAll,
	sample,
	shuffle,
} from './array';
import {relativeStddev} from '.';

// Compilation tests
// eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
expectType<undefined>(sample([]));
// eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
expectType<undefined>(sample([] as const));
// eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
expectNotType<any>(sample([]));
expectType<1 | undefined>(sample([1]));

describe(sample.name, () => {
	it('selects items', () => {
		expect(sample([1])).toBe(1);
		// eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
		expect(sample([])).toBe(undefined);
		const letters = ['a', 'b', 'c'];
		expect(letters).toContain(sample(letters));
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
			dcba: 0,
		};

		for (let count = 0; count < iterations; count++) {
			shuffle(array);

			const result = array.join('') as keyof typeof frequencies;

			frequencies[result]++;
		}

		const values = Object.values(frequencies);
		expect(relativeStddev(values)).toBeCloseTo(0, 1);

		// eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
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
			}

			if (value < 5) {
				return -1;
			}

			return 0;
		}

		expect(binarySearch(array, directionFn)).toBe(5);
		expect(binarySearch(array.slice(1), directionFn)).toBe(5);

		// eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
		expect(binarySearch([], () => 1)).toBe(undefined);
	});
});

describe(chunk.name, () => {
	it('chunks', () => {
		const array = [1, 2, 3, 4, 5, 6];

		expect(chunk(array, 2)).toStrictEqual([
			[1, 2],
			[3, 4],
			[5, 6],
		]);

		expect(chunk(array, 5)).toStrictEqual([[1, 2, 3, 4, 5], [6]]);

		expect(chunk(array, 100)).toStrictEqual([array]);

		expect(chunk([1, 2, 3], 3)).toStrictEqual([[1], [2], [3]]);
	});
});

describe(largeToSmall.name, () => {
	it('arranges by length', () => {
		expect(largeToSmall({id: 0, length: 0}, {id: 1, length: 0})).toStrictEqual([
			{id: 0, length: 0},
			{id: 1, length: 0},
		]);

		expect(largeToSmall({length: 1}, {length: 0})).toStrictEqual([{length: 1}, {length: 0}]);
		expect(largeToSmall({length: 0}, {length: 1})).toStrictEqual([{length: 1}, {length: 0}]);
	});

	it('arranges by size', () => {
		expect(largeToSmall({id: 0, size: 0}, {id: 1, size: 0})).toStrictEqual([
			{id: 0, size: 0},
			{id: 1, size: 0},
		]);

		expect(largeToSmall({size: 1}, {size: 0})).toStrictEqual([{size: 1}, {size: 0}]);
		expect(largeToSmall({size: 0}, {size: 1})).toStrictEqual([{size: 1}, {size: 0}]);
	});

	it('throws on bad input', () => {
		// @ts-expect-error Readonly global
		global.__DEV__ = false;
		expect(() =>
			// @ts-expect-error Missing properties
			largeToSmall({}, {}),
		).toThrow();

		// @ts-expect-error Readonly global
		global.__DEV__ = true;
		expect(() =>
			// @ts-expect-error Missing properties
			largeToSmall({}, {}),
		).toThrow();
	});
});

describe(holes.name, () => {
	it('finds holes', () => {
		// eslint-disable-next-line no-sparse-arrays
		expect(holes([, ,])).toStrictEqual([0, 1]);
		// eslint-disable-next-line no-sparse-arrays
		expect(holes([0, , 2])).toStrictEqual([1]);
	});

	it('returns empty array when there are no holes', () => {
		expect(holes([])).toStrictEqual([]);
		expect(holes([0, 1, 2])).toStrictEqual([]);
		expect(holes([0, undefined, 2])).toStrictEqual([]);
	});
});

describe(pull.name, () => {
	it('pulls from an array', () => {
		const array = [1, 2, 3];

		expect(pull(array, 2)).toStrictEqual([2]);
		expect(array).toStrictEqual([1, 3]);

		expect(pull(array, 2)).toStrictEqual([]);
		expect(array).toStrictEqual([1, 3]);
	});

	it('works with empty arrays', () => {
		const array: never[] = [];

		expect(pull(array, 2)).toStrictEqual([]);
		expect(array).toStrictEqual([]);
	});

	it("works when element isn't found", () => {
		const array = [1, 2, 3];

		expect(pull(array, 4)).toStrictEqual([]);
		expect(array).toStrictEqual([1, 2, 3]);
	});
});

describe(pullAll.name, () => {
	it('pulls all elements from an array', () => {
		const array = [1, 2, 1, 2, 2, 3, 2, 3];

		expect(pullAll(array, 2)).toStrictEqual([2, 2, 2, 2]);
		expect(array).toStrictEqual([1, 1, 3, 3]);

		expect(pullAll(array, 2)).toStrictEqual([]);
		expect(array).toStrictEqual([1, 1, 3, 3]);
	});

	it('works with empty arrays', () => {
		const array: never[] = [];

		expect(pullAll(array, 2)).toStrictEqual([]);
		expect(array).toStrictEqual([]);
	});

	it("works when element isn't found", () => {
		const array = [1, 2, 3];

		expect(pullAll(array, 4)).toStrictEqual([]);
		expect(array).toStrictEqual([1, 2, 3]);
	});
});

describe(replace.name, () => {
	it('replaces elements from an array', () => {
		const array = [1, 2, 3];

		expect(replace(array, 1, 2)).toBe(0);
		expect(array).toStrictEqual([2, 2, 3]);

		expect(replace(array, 1, 2)).toBe(-1);
		expect(array).toStrictEqual([2, 2, 3]);
	});

	it('works with empty arrays', () => {
		const array: never[] = [];

		expect(replace<number>(array, 1, 2)).toBe(-1);
		expect(array).toStrictEqual([]);
	});

	it("works when element isn't found", () => {
		const array = [1, 2, 3];

		expect(replace(array, 4, 2)).toBe(-1);
		expect(array).toStrictEqual([1, 2, 3]);
	});
});

describe(replaceAll.name, () => {
	it('replaces all elements from an array', () => {
		const array = [1, 2, 1, 3];

		expect(replaceAll(array, 1, 2)).toBe(2);
		expect(array).toStrictEqual([2, 2, 2, 3]);

		expect(replaceAll(array, 1, 2)).toBe(0);
		expect(array).toStrictEqual([2, 2, 2, 3]);
	});

	it('works with empty arrays', () => {
		const array: never[] = [];

		expect(replaceAll<number>(array, 1, 2)).toBe(0);
		expect(array).toStrictEqual([]);
	});

	it("works when element isn't found", () => {
		const array = [1, 2, 3];

		expect(replaceAll(array, 4, 2)).toBe(0);
		expect(array).toStrictEqual([1, 2, 3]);
	});
});

describe(fill.name, () => {
	it('fills arrays', () => {
		expect(fill('a', 3)).toStrictEqual(['a', 'a', 'a']);
	});
});

describe(mapFill.name, () => {
	it('fills arrays', () => {
		expect(mapFill(i => i, 3)).toStrictEqual([0, 1, 2]);
	});
});

describe(padStart.name, () => {
	it('pads an array', () => {
		const array = [1, 2, 3];

		padStart(array, 4, 0);

		expect(array).toStrictEqual([0, 1, 2, 3]);
	});

	it('does nothing when array is long enough', () => {
		const array = [1, 2, 3];

		padStart(array, 3, 0);

		expect(array).toStrictEqual([1, 2, 3]);
	});
});

describe(padEnd.name, () => {
	it('pads an array', () => {
		const array = [1, 2, 3];

		padEnd(array, 4, 0);

		expect(array).toStrictEqual([1, 2, 3, 0]);
	});

	it('does nothing when array is long enough', () => {
		const array = [1, 2, 3];

		padEnd(array, 3, 0);

		expect(array).toStrictEqual([1, 2, 3]);
	});
});

describe(indexOfAll.name, () => {
	it('finds all indexes', () => {
		expect(indexOfAll([1, 2, 1, 3, 1], 1)).toStrictEqual([0, 2, 4]);
	});

	it('works with empty arrays', () => {
		expect(indexOfAll([], 1)).toStrictEqual([]);
	});

	it("works when element isn't found", () => {
		expect(indexOfAll([1, 2, 3], 4)).toStrictEqual([]);
	});
});

describe(findIndexAll.name, () => {
	it('finds all indexes', () => {
		expect(findIndexAll([1, 2, 1, 3, 1], element => element === 1)).toStrictEqual([0, 2, 4]);
	});
});
