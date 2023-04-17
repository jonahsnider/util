import {expectType} from 'tsd';
import {isEmpty} from './is-empty';

it('returns true for empty iterables', () => {
	expect(isEmpty([])).toBe(true);

	const array: unknown[] = [];
	if (isEmpty(array)) {
		for (const element of array) {
			expectType<never>(element);
		}
	}
});

it('returns false for non-empty iterables', () => {
	expect(isEmpty([1, 2, 3])).toBe(false);
});
