import {settled} from './promise';

describe(settled.name, () => {
	it('returns the resolved value', () => {
		const promise = Promise.resolve(1);

		expect(settled(promise)).resolves.toStrictEqual([1, undefined]);
	});

	it('returns the rejected value', () => {
		const promise = Promise.reject(1);

		expect(settled(promise)).resolves.toStrictEqual([undefined, 1]);
	});
});
