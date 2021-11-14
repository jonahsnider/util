import {uncapitalize} from './uncapitalize';

it('uncapitalizes strings', () => {
	expect(uncapitalize('Hello')).toBe('hello');
});
