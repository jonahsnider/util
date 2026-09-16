import { expect, it, vitest } from 'vitest';
import { thunkify } from './thunkify.js';

it('thunks', () => {
	const f = vitest.fn(() => 123);
	const g = thunkify(f);

	expect(g()).toBe(123);
	expect(g()).toBe(123);
	expect(f).toHaveBeenCalledTimes(1);
});

it('works with promises that resolve', async () => {
	const f = vitest.fn(async () => 123);
	const g = thunkify(f);

	await expect(g()).resolves.toBe(123);
	await expect(g()).resolves.toBe(123);
	expect(f).toHaveBeenCalledTimes(1);
});

it('works with promises that reject', async () => {
	const f = vitest.fn(async () => {
		throw new Error('abc');
	});
	const g = thunkify(f);

	await expect(g()).rejects.toThrow('abc');
	await expect(g()).rejects.toThrow('abc');
	expect(f).toHaveBeenCalledTimes(1);
});
