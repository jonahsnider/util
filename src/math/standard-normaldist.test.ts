import {standardNormaldist} from './standard-normaldist.js';
import {normaldist} from './normaldist.js';

it('calculates normal distribution', () => {
	expect(standardNormaldist(0)).toBe(normaldist(0, 1, 0));
});
