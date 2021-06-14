import {regExpUnion} from './';

describe(regExpUnion.name, () => {
	it('creates a working regular expression', () => {
		expect(regExpUnion()).toEqual(new RegExp(''));
		expect(regExpUnion(/[a-z]/, /\d/)).toEqual(/([a-z])|(\d)/);
	});
});
