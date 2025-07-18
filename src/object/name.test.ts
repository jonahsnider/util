import { name } from './name.js';

class Test {
	static staticMethod() {}

	method() {}
}

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
