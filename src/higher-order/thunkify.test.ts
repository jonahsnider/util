import { thunkify } from './thunkify.js';

it('thunks', () => {
	const f = vitest.fn(() => 123);
	const g = thunkify(f);

	expect(g()).toBe(123);
	expect(g()).toBe(123);
	expect(f).toHaveBeenCalledTimes(1);
});

it('works with promises that resolve', () => {
	const f = vitest.fn(async () => 123);
	const g = thunkify(f);

	void expect(g()).resolves.toBe(123);
	void expect(g()).resolves.toBe(123);
	expect(f).toHaveBeenCalledTimes(1);
});

it('works with promises that reject', () => {
	const f = vitest.fn(async () => {
		throw new Error('abc');
	});
	const g = thunkify(f);

	void expect(g()).rejects.toThrow('abc');
	void expect(g()).rejects.toThrow('abc');
	expect(f).toHaveBeenCalledTimes(1);
});
