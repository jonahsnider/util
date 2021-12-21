import {harmonicMean} from './harmonic-mean';

it('calculates the harmonic mean', () => {
	expect(harmonicMean([1, 4, 4])).toBe(2);
});
