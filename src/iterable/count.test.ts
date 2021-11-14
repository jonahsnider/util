import {count} from './count';

it('counts elements', () => {
	expect(count([1, 2, 3])).toBe(3);
});

it('counts empty iterables', () => {
	expect(count([])).toBe(0);
});
