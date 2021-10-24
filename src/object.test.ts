import {name, rename} from './object';

describe(rename.name, () => {
	it('renames', () => {
		expect(rename({a: 1, c: 2}, 'a', 'b')).toStrictEqual({b: 1, c: 2});

		expect(rename({a: 1, c: 2}, 'a', 'a')).toStrictEqual({a: 1, c: 2});

		// @ts-expect-error Missing key
		expect(rename({a: 1, c: 2}, 'b', 'a')).toStrictEqual({a: undefined, c: 2});

		const key = Math.random() < 0.5 ? 'a' : 'b';

		rename(
			{a: 1, c: 2},
			'a',
			// @ts-expect-error Potentially missing key
			key,
		);

		rename(
			{a: 1, b: 2},
			// @ts-expect-error Potentially missing key
			key,
			'c',
		);
	});
});

describe(name.name, () => {
	class Test {
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		static staticMethod() {}

		// eslint-disable-next-line @typescript-eslint/no-empty-function
		method() {}
	}

	// eslint-disable-next-line @typescript-eslint/no-empty-function
	function func() {}

	const test = new Test();

	it('names classes', () => {
		expect(name(Test)).toBe('Test');
	});

	it('names class methods', () => {
		expect(name(Test, Test.staticMethod)).toBe('Test.staticMethod');
		expect(name(Test, Test.prototype.method)).toBe('Test#method');
		expect(name(test.method)).toBe('method');

		expect(name(Test, test.method)).toBe('Test#method');
	});

	it('names functions', () => {
		expect(name(func)).toBe('func');
	});
});
