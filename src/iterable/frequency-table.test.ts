import { expect, it } from 'vitest';
import { frequencyTable } from './frequency-table.js';

it('constructs a frequency table', () => {
	const array = [1, 2, 2, 3, 3, 3];

	expect(frequencyTable(array)).toStrictEqual(
		new Map([
			[1, 1],
			[2, 2],
			[3, 3],
		]),
	);
});
