import {count} from './count';

it('counts elements without a predicate', () => {
	expect(count([1, 2, 3])).toBe(3);
});

it('counts empty iterables without a predicate', () => {
	expect(count([])).toBe(0);
});

it('counts elements with a predicate', () => {
	expect(count([1, 2, 3], number => number % 2 === 1)).toBe(2);
});

it('counts empty iterables without a predicate', () => {
	expect(count([], number => number)).toBe(0);
});
