import {regExpUnion} from './reg-exp';

it('creates a working regular expression', () => {
	expect(regExpUnion()).toEqual(/(?:)/);
	expect(regExpUnion(/[a-z]/, /\d/)).toEqual(/([a-z])|(\d)/);
});
