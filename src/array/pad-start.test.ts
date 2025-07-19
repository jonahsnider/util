import { padStart } from './pad-start.js';

it('pads an array', () => {
	const array = [1, 2, 3];

	padStart(array, 4, 0);

	expect(array).toStrictEqual([0, 1, 2, 3]);
});

it('does nothing when array is long enough', () => {
	const array = [1, 2, 3];

	padStart(array, 3, 0);

	expect(array).toStrictEqual([1, 2, 3]);
});
