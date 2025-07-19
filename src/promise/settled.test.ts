import { settled } from './settled.js';

it('returns the resolved value', async () => {
	const promise = Promise.resolve(1);

	return expect(settled(promise)).resolves.toStrictEqual([1, undefined]);
});

it('returns the rejected value', async () => {
	const error = new Error('test');
	const promise = Promise.reject(error);

	return expect(settled(promise)).resolves.toStrictEqual([undefined, error]);
});
