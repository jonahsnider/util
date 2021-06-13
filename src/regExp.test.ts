import {regExpUnion} from './regExp';

describe(regExpUnion.name, () => {
	it('creates a working regular expression', () => {
		expect(regExpUnion(/[a-z]/, /\d/)).toEqual(/([a-z])|(\d)/);
	});
});
