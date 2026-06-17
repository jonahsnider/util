import { expectNotType, expectType } from 'tsd';
import { expect, it } from 'vite-plus/test';
import { sample } from './sample.js';

// Compilation tests
expectType<undefined>(sample([]));
expectType<undefined>(sample([] as const));
expectNotType<any>(sample([]));
expectType<1 | undefined>(sample([1]));

it('selects items', () => {
	expect(sample([1])).toBe(1);
	expect(sample([])).toBe(undefined);
	const letters = ['a', 'b', 'c'];
	expect(letters).toContain(sample(letters));
});
