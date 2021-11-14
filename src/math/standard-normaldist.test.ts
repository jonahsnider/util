import {standardNormaldist} from './standard-normaldist';
import {normaldist} from './normaldist';

it('calculates normal distribution', () => {
	expect(standardNormaldist(0)).toBe(normaldist(0, 1, 0));
});
