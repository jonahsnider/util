import { capitalize } from './capitalize.js';

it('capitalizes strings', () => {
	expect(capitalize('hello')).toBe('Hello');
});
