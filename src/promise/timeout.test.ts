/* eslint-disable prefer-promise-reject-errors */

import {name} from '../object';
import {timeout} from './timeout';

describe(name(timeout), () => {
	it('returns the resolved value', async () => {
		const promise = Promise.resolve(1);

		return expect(timeout(promise, Number.POSITIVE_INFINITY)).resolves.toBe(1);
	});

	it('rejects if the given promise rejects', async () => {
		const promise = Promise.reject(1);

		return expect(timeout(promise, Number.POSITIVE_INFINITY)).rejects.toBe(1);
	});

	it('times out if the given promise never resolves', async () => {
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		const promise = new Promise(() => {});

		return expect(timeout(promise, 1)).rejects.toThrow(new Error('Timed out'));
	});
});
