import {relativeStddev} from '../math';

import {shuffle} from './shuffle';

const iterations = 1e5;

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
