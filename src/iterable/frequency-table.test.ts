import {name} from '../object';
import {frequencyTable} from './frequency-table';

describe(name(frequencyTable), () => {
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
});
