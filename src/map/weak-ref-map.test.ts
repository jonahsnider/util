import {name} from '../object';
import {WeakRefMap} from './weak-ref-map';

type Value = {foo: number};

describe(name(WeakRefMap), () => {
	it('works with no entries', () => {
		const map = new WeakRefMap<string, Value>();

		expect(map.has('a')).toBe(false);
	});

	it('works with entries', () => {
		const values = [{foo: 1}, {foo: 2}, {foo: 3}];

		const map = new WeakRefMap<string, Value>([
			['a', values[0]],
			['b', values[1]],
		]);

		expect(map.has('a')).toBe(true);
		expect(map.has('b')).toBe(true);
		expect(map.has('c')).toBe(false);
	});
});

describe(name(WeakRefMap, WeakRefMap.prototype.clear), () => {
	it('clears the map', () => {
		const values = [{foo: 1}, {foo: 2}, {foo: 3}];

		const map = new WeakRefMap<string, Value>([
			['a', values[0]],
			['b', values[1]],
		]);

		map.clear();

		expect(map.has('a')).toBe(false);
		expect(map.has('b')).toBe(false);
		expect(map.has('c')).toBe(false);
	});
});

describe(name(WeakRefMap, WeakRefMap.prototype.delete), () => {
	it('deletes a value', () => {
		const values = [{foo: 1}, {foo: 2}, {foo: 3}];

		const map = new WeakRefMap<string, Value>([['a', values[0]]]);

		expect(map.delete('a')).toBe(true);
		expect(map.delete('b')).toBe(false);
	});
});

describe(name(WeakRefMap, WeakRefMap.prototype.has), () => {
	it('checks if a value exists', () => {
		const values = [{foo: 1}, {foo: 2}, {foo: 3}];

		const map = new WeakRefMap<string, Value>([['a', values[0]]]);

		expect(map.has('a')).toBe(true);
		expect(map.has('b')).toBe(false);
	});
});

describe(name(WeakRefMap, WeakRefMap.prototype.get), () => {
	it('gets a value', () => {
		const values = [{foo: 1}, {foo: 2}, {foo: 3}];

		const map = new WeakRefMap<string, Value>([['a', values[0]]]);

		expect(map.get('a')).toBe(values[0]);
		expect(map.get('b')).toBe(undefined);
	});
});

describe(name(WeakRefMap, WeakRefMap.prototype.set), () => {
	it('sets a value', () => {
		const values = [{foo: 1}, {foo: 2}, {foo: 3}];

		const map = new WeakRefMap<string, Value>();

		map.set('a', values[0]);
		map.set('b', values[1]);

		expect(map.get('a')).toBe(values[0]);
		expect(map.get('b')).toBe(values[1]);

		map.set('b', values[2]);
		expect(map.get('b')).toBe(values[2]);
	});
});

describe(name(WeakRefMap, WeakRefMap.prototype.values), () => {
	it('gets values', () => {
		const values = [{foo: 1}, {foo: 2}, {foo: 3}];

		const map = new WeakRefMap<string, Value>([
			['a', values[0]],
			['b', values[1]],
		]);

		expect(new Set(map.values())).toStrictEqual(new Set([values[0], values[1]]));
	});
});

describe(name(WeakRefMap, WeakRefMap.prototype.entries), () => {
	it('gets entries', () => {
		const values = [{foo: 1}, {foo: 2}, {foo: 3}];

		const map = new WeakRefMap<string, Value>([
			['a', values[0]],
			['b', values[1]],
		]);

		expect(new Set(map.entries())).toStrictEqual(
			new Set([
				['a', values[0]],
				['b', values[1]],
			]),
		);
	});

	it('exposes a Symbol.iterator interface', () => {
		const values = [{foo: 1}, {foo: 2}, {foo: 3}];

		const map = new WeakRefMap<string, Value>([
			['a', values[0]],
			['b', values[1]],
		]);

		expect(new Set(map)).toStrictEqual(
			new Set([
				['a', values[0]],
				['b', values[1]],
			]),
		);
	});
});

describe(name(WeakRefMap, WeakRefMap.prototype.keys), () => {
	it('gets keys', () => {
		const values = [{foo: 1}, {foo: 2}, {foo: 3}];

		const map = new WeakRefMap<string, Value>([
			['a', values[0]],
			['b', values[1]],
		]);

		expect(new Set(map.keys())).toStrictEqual(new Set(['a', 'b']));
	});
});

describe(name(WeakRefMap, WeakRefMap.prototype.forEach), () => {
	it('iterates over values', () => {
		const values = [{foo: 1}, {foo: 2}, {foo: 3}];

		const map = new WeakRefMap<string, Value>([
			['a', values[0]],
			['b', values[1]],
		]);

		const result: Value[] = [];

		for (const value of map.values()) {
			result.push(value);
		}

		expect(new Set(result)).toStrictEqual(new Set([values[0], values[1]]));
	});
});

describe(`${name(WeakRefMap)}.prototype[Symbol.toStringTag]`, () => {
	it('returns the correct value', () => {
		const map = new WeakRefMap<string, Value>();

		expect(map[Symbol.toStringTag]).toBe('WeakRefMap');
	});
});
