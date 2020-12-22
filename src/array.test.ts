import {expectNotType, expectType} from 'tsd';
import {sample, shuffle, stddev} from '.';

// Compilation tests
expectType<undefined>(sample([]));
expectType<undefined>(sample([] as const));
expectNotType<any>(sample([]));
expectType<1>(sample([1]));

describe('sample', () => {
	it('selects items', () => {
		expect(sample([1])).toBe(1);
		expect(sample([])).toBe(undefined);
		const letters = ['a', 'b', 'c'];
		expect(sample(letters)).toStrictEqual(expect.anything());
	});
});

const iterations = 1e5;

describe('shuffle', () => {
	it('shuffles arrays', () => {
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
