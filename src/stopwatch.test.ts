import { name } from './object/index.js';
import { Stopwatch } from './stopwatch.js';

describe(`${name(Stopwatch)}.started`, () => {
	it('reports when a stopwatch is started', () => {
		const stopwatch = new Stopwatch();

		expect(stopwatch.started).toBe(false);

		stopwatch.start();

		expect(stopwatch.started).toBe(true);

		stopwatch.end();

		expect(stopwatch.started).toBe(true);
	});
});

describe(name(Stopwatch, Stopwatch.start), () => {
	it('starts a stopwatch', () => {
		const stopwatch = Stopwatch.start();

		expect(stopwatch.started).toBe(true);
		expect(stopwatch.end()).toBeGreaterThan(0);
	});
});

describe(name(Stopwatch, Stopwatch.prototype.start), () => {
	it('starts the stopwatch', () => {
		const stopwatch = new Stopwatch();

		stopwatch.start();

		expect(stopwatch.end()).toBeGreaterThan(0);
	});
});

describe(name(Stopwatch, Stopwatch.prototype.end), () => {
	it('ends the stopwatch', () => {
		const stopwatch = new Stopwatch();

		expect(stopwatch.end).toThrow();

		stopwatch.start();

		expect(stopwatch.end()).toBeGreaterThan(0);
		expect(stopwatch.end()).toBeLessThan(3000);
		expect(typeof stopwatch.end()).toBe('number');
	});
});
