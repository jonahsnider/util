import {name} from '../object';
import {normaldist} from './normaldist';

describe(name(normaldist), () => {
	it('calculates normal distribution', () => {
		expect(normaldist(0, 1, 0)).toBeCloseTo(0.3989);
	});
});
