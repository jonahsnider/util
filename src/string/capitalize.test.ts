import {name} from '../object';
import {capitalize} from './capitalize';

describe(name(capitalize), () => {
	it('capitalizes strings', () => {
		expect(capitalize('hello')).toBe('Hello');
	});
});
