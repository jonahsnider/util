/* eslint-disable prefer-promise-reject-errors */

import {name} from '../object';
import {settled} from './settled';

describe(name(settled), () => {
	it('returns the resolved value', async () => {
		const promise = Promise.resolve(1);

		return expect(settled(promise)).resolves.toStrictEqual([1, undefined]);
	});

	it('returns the rejected value', async () => {
		const promise = Promise.reject(1);

		return expect(settled(promise)).resolves.toStrictEqual([undefined, 1]);
	});
});
