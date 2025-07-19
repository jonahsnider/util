import { timeout } from './timeout.js';

it('returns the resolved value', async () => {
	const promise = Promise.resolve(1);

	return expect(timeout(promise, Number.POSITIVE_INFINITY)).resolves.toBe(1);
});

it('rejects if the given promise rejects', async () => {
	const error = new Error('test');
	const promise = Promise.reject(error);

	return expect(timeout(promise, Number.POSITIVE_INFINITY)).rejects.toBe(error);
});

it('times out if the given promise never resolves', async () => {
	const promise = new Promise(() => {});

	return expect(timeout(promise, 1)).rejects.toThrow(new Error('Timed out'));
});
