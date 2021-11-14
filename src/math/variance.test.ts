import {variance} from './variance';

it('calculates variance', () => {
	expect(variance([1, 1, 1])).toBe(0);
	expect(variance([1, 2, 3])).toBe(1);
	expect(variance([1, 3, 5])).toBe(4);
});
