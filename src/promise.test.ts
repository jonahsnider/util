import {settled, timeout} from './promise';

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

describe(timeout.name, () => {
	it('returns the resolved value', () => {
		const promise = Promise.resolve(1);

		expect(timeout(promise, Infinity)).resolves.toBe(1);
	});

	it('rejects if the given promise rejects', () => {
		const promise = Promise.reject(1);

		expect(timeout(promise, Infinity)).rejects.toBe(1);
	});

	it('times out if the given promise never resolves', () => {
		const promise = new Promise(() => {});

		expect(timeout(promise, 1)).rejects.toBe('Promise timed out');
	});
});
