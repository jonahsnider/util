import { DefaultMap } from './default-map.js';

describe(`${DefaultMap.name}#${DefaultMap.prototype.get.name}`, () => {
	it('gets values', () => {
		const map = new DefaultMap(2, [['a', 1]]);

		expect(map.get('a')).toBe(1);
	});

	it('gets default values', () => {
		const map = new DefaultMap<string, unknown, number>(1, [
			['a', null],
			['b', undefined],
		]);

		expect(map.get('a')).toBe(null);
		expect(map.get('b')).toBe(undefined);
		expect(map.get('c')).toBe(1);
	});

	it('gets default values with a function', () => {
		const map = new DefaultMap<string, unknown, number>(
			(key) => {
				expect(key).toBe('c');

				return 1;
			},
			[
				['a', null],
				['b', undefined],
			],
		);

		expect(map.get('a')).toBe(null);
		expect(map.get('b')).toBe(undefined);
		expect(map.get('c')).toBe(1);
	});
});
