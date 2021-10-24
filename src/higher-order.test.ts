import {invert, not, thunkify} from './higher-order';
import {nullish} from './nullish';
import {name} from './object';

describe(name(not), () => {
	it('negates booleans', () => {
		expect(not(() => true)()).toBe(false);
		expect(not(() => false)()).toBe(true);

		expect([0, null, '', undefined, false].filter(not(nullish))).toStrictEqual([0, '', false]);
	});
});

function sort(a: number, b: number) {
	return a - b;
}

describe(name(invert), () => {
	it('inverts numbers', () => {
		expect(invert(() => 1)()).toBe(-1);
		expect(invert(() => -1)()).toBe(1);
		expect(invert(() => 0)()).toBe(-0);
		expect(invert(() => -0)()).toBe(0);

		expect(invert(sort)(10, 5)).toBe(-5);
	});

	it('inverts bigints', () => {
		expect(invert(() => 1n)()).toBe(-1n);
		expect(invert(() => -1n)()).toBe(1n);
		expect(invert(() => 0n)()).toBe(-0n);
		expect(invert(() => -0n)()).toBe(0n);
	});
});

describe(name(thunkify), () => {
	it('thunks', () => {
		const f = jest.fn(() => 123);
		const g = thunkify(f);

		expect(g()).toBe(123);
		expect(g()).toBe(123);
		expect(f).toHaveBeenCalledTimes(1);
	});

	it('works with promises that resolve', () => {
		const f = jest.fn(async () => Promise.resolve(123));
		const g = thunkify(f);

		void expect(g()).resolves.toBe(123);
		void expect(g()).resolves.toBe(123);
		expect(f).toHaveBeenCalledTimes(1);
	});

	it('works with promises that reject', () => {
		const f = jest.fn(async () => Promise.reject(new Error('abc')));
		const g = thunkify(f);

		void expect(g()).rejects.toThrow('abc');
		void expect(g()).rejects.toThrow('abc');
		expect(f).toHaveBeenCalledTimes(1);
	});
});
