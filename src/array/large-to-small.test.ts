import {name} from '../object';
import {largeToSmall} from './large-to-small';

describe(name(largeToSmall), () => {
	it('arranges by length', () => {
		expect(largeToSmall({id: 0, length: 0}, {id: 1, length: 0})).toStrictEqual([
			{id: 0, length: 0},
			{id: 1, length: 0},
		]);

		expect(largeToSmall({length: 1}, {length: 0})).toStrictEqual([{length: 1}, {length: 0}]);
		expect(largeToSmall({length: 0}, {length: 1})).toStrictEqual([{length: 1}, {length: 0}]);
	});

	it('arranges by size', () => {
		expect(largeToSmall({id: 0, size: 0}, {id: 1, size: 0})).toStrictEqual([
			{id: 0, size: 0},
			{id: 1, size: 0},
		]);

		expect(largeToSmall({size: 1}, {size: 0})).toStrictEqual([{size: 1}, {size: 0}]);
		expect(largeToSmall({size: 0}, {size: 1})).toStrictEqual([{size: 1}, {size: 0}]);
	});

	it('throws on bad input', () => {
		// @ts-expect-error Readonly global
		global.__DEV__ = false;
		expect(() =>
			// @ts-expect-error Missing properties
			largeToSmall({}, {}),
		).toThrow();

		// @ts-expect-error Readonly global
		global.__DEV__ = true;
		expect(() =>
			// @ts-expect-error Missing properties
			largeToSmall({}, {}),
		).toThrow();
	});
});
