import {name} from '../object';
import {uncapitalize} from './uncapitalize';

describe(name(uncapitalize), () => {
	it('uncapitalizes strings', () => {
		expect(uncapitalize('Hello')).toBe('hello');
	});
});
