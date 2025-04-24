import {iteratorToIterable} from './iterator-to-iterable.js';

it('creates an iterable that returns the iterator', () => {
	const iterable = [1, 2, 3];
	const iterator = iterable[Symbol.iterator]();

	expect(iteratorToIterable(iterator)[Symbol.iterator]()).toBe(iterator);
});
