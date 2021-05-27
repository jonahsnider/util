import {regExpUnion} from './regExp';

describe('regExpUnion', () => {
	it('creates a working regular expression', () => {
		expect(regExpUnion(/[a-z]/, /\d/)).toEqual(/([a-z])|(\d)/);
	});
});
