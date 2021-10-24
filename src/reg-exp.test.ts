import {regExpUnion} from './reg-exp';
import {name} from './object';

describe(name(regExpUnion), () => {
	it('creates a working regular expression', () => {
		expect(regExpUnion()).toEqual(/(?:)/);
		expect(regExpUnion(/[a-z]/, /\d/)).toEqual(/([a-z])|(\d)/);
	});
});
