import {name} from '../object';
import {standardNormaldist} from './standard-normaldist';
import {normaldist} from './normaldist';

describe(name(standardNormaldist), () => {
	it('calculates normal distribution', () => {
		expect(standardNormaldist(0)).toBe(normaldist(0, 1, 0));
	});
});
