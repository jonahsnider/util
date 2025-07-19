import { normaldist } from './normaldist.js';

it('calculates normal distribution', () => {
	expect(normaldist(0, 1, 0)).toBeCloseTo(0.3989);
});
