import {name} from '../object';
import {product} from './product';

describe(name(product), () => {
	it('multiplies numbers', () => {
		expect([2, 3].reduce(product)).toBe(6);
	});

	it('multiplies bigints', () => {
		expect([2n, 3n].reduce(product)).toBe(6n);
	});
});
