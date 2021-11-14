import {intersection} from './intersection';

it('creates an intersection Set', () => {
	const set = new Set([1, 2, 3]);

	expect(intersection(set, set)).toStrictEqual(set);
	expect(intersection(set, set)).not.toBe(set);

	expect(intersection(new Set(), new Set())).toStrictEqual(new Set());

	expect(intersection(new Set([1, 2]), new Set([2, 3]))).toStrictEqual(new Set([2]));
});
