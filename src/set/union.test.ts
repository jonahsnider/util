import {name} from '../object';
import {union} from './union';

describe(name(union), () => {
	it('creates a union Set', () => {
		const set = new Set([1, 2, 3]);

		expect(union(set, set)).toStrictEqual(set);
		expect(union(set, set)).not.toBe(set);

		expect(union([], [])).toStrictEqual(new Set());

		expect(union([1], [])).toStrictEqual(new Set([1]));
		expect(union([], [2])).toStrictEqual(new Set([2]));

		expect(union([1], [2])).toStrictEqual(new Set([1, 2]));
	});
});
