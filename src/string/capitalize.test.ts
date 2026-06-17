import { expect, it } from 'vite-plus/test';
import { capitalize } from './capitalize.js';

it('capitalizes strings', () => {
	expect(capitalize('hello')).toBe('Hello');
});
