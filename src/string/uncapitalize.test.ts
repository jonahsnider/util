import { expect, it } from 'vite-plus/test';
import { uncapitalize } from './uncapitalize.js';

it('uncapitalizes strings', () => {
	expect(uncapitalize('Hello')).toBe('hello');
});
