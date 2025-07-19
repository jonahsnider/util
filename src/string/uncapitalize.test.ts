import { uncapitalize } from './uncapitalize.js';

it('uncapitalizes strings', () => {
	expect(uncapitalize('Hello')).toBe('hello');
});
