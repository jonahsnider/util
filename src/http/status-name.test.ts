import {Status} from './status';
import {StatusName} from './status-name';

describe('StatusName', () => {
	it('has entries for all status codes', () => {
		const expected = Object.values(Status).filter((element): element is Status => typeof element === 'number');

		const actual = Object.values(StatusName).filter((element): element is StatusName => typeof element === 'number');

		expect(actual).toStrictEqual(expected);
	});
});
