import {iteratorToIterable} from './iterator-to-iterable';
import {skip} from './skip';

it('skips the first elements of an iterable', () => {
	expect([...iteratorToIterable(skip([1, 2, 3, 4, 5], 2))]).toStrictEqual([3, 4, 5]);
});

it('does nothing when count is negative', () => {
	expect([...iteratorToIterable(skip([1, 2, 3, 4, 5], -2))]).toStrictEqual([1, 2, 3, 4, 5]);
});

it('does nothing when count is 0', () => {
	expect([...iteratorToIterable(skip([1, 2, 3, 4, 5], 0))]).toStrictEqual([1, 2, 3, 4, 5]);
});

it('returns an empty iterable when count is larger than the size of the iterable', () => {
	expect([...iteratorToIterable(skip([1, 2, 3, 4, 5], 100))]).toStrictEqual([]);
});
