import { geometricMean } from './geometric-mean.js';

it('calculates the geometric mean', () => {
	expect(geometricMean([1, 2, 3, 4])).toBe(24 ** (1 / 4));
});
