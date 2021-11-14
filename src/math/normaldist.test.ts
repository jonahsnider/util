import {normaldist} from './normaldist';

it('calculates normal distribution', () => {
	expect(normaldist(0, 1, 0)).toBeCloseTo(0.3989);
});
