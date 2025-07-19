import { padEnd } from './pad-end.js';

it('pads an array', () => {
	const array = [1, 2, 3];

	padEnd(array, 4, 0);

	expect(array).toStrictEqual([1, 2, 3, 0]);
});

it('does nothing when array is long enough', () => {
	const array = [1, 2, 3];

	padEnd(array, 3, 0);

	expect(array).toStrictEqual([1, 2, 3]);
});
