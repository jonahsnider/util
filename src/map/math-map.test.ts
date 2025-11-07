import { describe, expect, it } from 'vitest';
import { MathMap } from './math-map.js';

describe(`${MathMap.name}#${MathMap.prototype.add.name}`, () => {
	it('adds values', () => {
		const map = new MathMap<string>(0);

		expect(map.add('a', 1)).toBe(1);
		expect(map).toStrictEqual(new MathMap(0, [['a', 1]]));
		expect(map.add('a', 1)).toBe(2);
		expect(map).toStrictEqual(new MathMap(0, [['a', 2]]));
	});
});

describe(`${MathMap.name}#${MathMap.prototype.subtract.name}`, () => {
	it('subtracts values', () => {
		const map = new MathMap<string>(0);

		expect(map.subtract('a', 1)).toBe(-1);
		expect(map).toStrictEqual(new MathMap(0, [['a', -1]]));
		expect(map.subtract('a', 1)).toBe(-2);
		expect(map).toStrictEqual(new MathMap(0, [['a', -2]]));
	});
});

describe(`${MathMap.name}#${MathMap.prototype.multiply.name}`, () => {
	it('multiplies values', () => {
		const map = new MathMap<string>(1);

		expect(map.multiply('a', 2)).toBe(2);
		expect(map).toStrictEqual(new MathMap(1, [['a', 2]]));
		expect(map.multiply('a', 2)).toBe(4);
		expect(map).toStrictEqual(new MathMap(1, [['a', 4]]));
	});
});

describe(`${MathMap.name}#${MathMap.prototype.divide.name}`, () => {
	it('divides values', () => {
		const map = new MathMap<string>(8);

		expect(map.divide('a', 2)).toBe(4);
		expect(map).toStrictEqual(new MathMap(8, [['a', 4]]));
		expect(map.divide('a', 2)).toBe(2);
		expect(map).toStrictEqual(new MathMap(8, [['a', 2]]));
	});
});

describe(`${MathMap.name}#${MathMap.prototype.pow.name}`, () => {
	it('raises values', () => {
		const map = new MathMap<string>(2);

		expect(map.pow('a', 2)).toBe(4);
		expect(map).toStrictEqual(new MathMap(2, [['a', 4]]));
		expect(map.pow('a', 2)).toBe(16);
		expect(map).toStrictEqual(new MathMap(2, [['a', 16]]));
	});
});

describe(`${MathMap.name}#${MathMap.prototype.sqrt.name}`, () => {
	it('square roots values', () => {
		const map = new MathMap<string>(16);

		expect(map.sqrt('a')).toBe(4);
		expect(map).toStrictEqual(new MathMap(16, [['a', 4]]));
		expect(map.sqrt('a')).toBe(2);
		expect(map).toStrictEqual(new MathMap(16, [['a', 2]]));
	});
});

describe(`${MathMap.name}#${MathMap.prototype.root.name}`, () => {
	it('square roots values', () => {
		const map = new MathMap<string>(16);

		expect(map.root('a', 2)).toBe(4);
		expect(map).toStrictEqual(new MathMap(16, [['a', 4]]));
		expect(map.root('a', 2)).toBe(2);
		expect(map).toStrictEqual(new MathMap(16, [['a', 2]]));
	});

	it('roots values', () => {
		const map = new MathMap<string>(27 ** 3);
		const expectedValue1 = (27 ** 3) ** (1 / 3);
		const expectedValue2 = expectedValue1 ** (1 / 3);

		expect(map.root('a', 3)).toBe(expectedValue1);
		expect(map).toStrictEqual(new MathMap(27 ** 3, [['a', expectedValue1]]));
		expect(map.root('a', 3)).toBe(expectedValue2);
		expect(map).toStrictEqual(new MathMap(27 ** 3, [['a', expectedValue2]]));
	});
});
