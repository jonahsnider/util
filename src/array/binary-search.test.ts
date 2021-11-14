import {binarySearch} from './binary-search';

it('searches', () => {
	const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	function directionFn(value: number) {
		if (value > 5) {
			return 1;
		}

		if (value < 5) {
			return -1;
		}

		return 0;
	}

	expect(binarySearch(array, directionFn)).toBe(5);
	expect(binarySearch(array.slice(1), directionFn)).toBe(5);

	// eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
	expect(binarySearch([], () => 1)).toBe(undefined);
});
