import {expectNotType, expectType} from 'tsd';
import {sample} from './sample';

// Compilation tests
// eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
expectType<undefined>(sample([]));
// eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
expectType<undefined>(sample([] as const));
// eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
expectNotType<any>(sample([]));
expectType<1 | undefined>(sample([1]));

it('selects items', () => {
	expect(sample([1])).toBe(1);
	// eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
	expect(sample([])).toBe(undefined);
	const letters = ['a', 'b', 'c'];
	expect(letters).toContain(sample(letters));
});
