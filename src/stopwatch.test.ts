import {Stopwatch} from './stopwatch';

describe(Stopwatch.name, () => {
	describe('Stopwatch#started', () => {
		it('reports when a stopwatch is started', () => {
			const stopwatch = new Stopwatch();

			expect(stopwatch.started).toBe(false);

			stopwatch.start();

			expect(stopwatch.started).toBe(true);

			stopwatch.end();

			expect(stopwatch.started).toBe(true);
		});
	});

	describe('Stopwatch.start', () => {
		it('starts a stopwatch', () => {
			const stopwatch = Stopwatch.start();

			expect(stopwatch.started).toBe(true);
			expect(stopwatch.end()).toBeGreaterThan(0);
		});
	});

	describe('Stopwatch#start', () => {
		it('starts the stopwatch', () => {
			const stopwatch = new Stopwatch();

			stopwatch.start();

			expect(stopwatch.end()).toBeGreaterThan(0);
		});
	});

	describe('Stopwatch#end', () => {
		it('ends the stopwatch', () => {
			const stopwatch = new Stopwatch();

			// @ts-expect-error Assigning to readonly global
			global.__DEV__ = false;
			expect(stopwatch.end).toThrow();
			// @ts-expect-error Assigning to readonly global
			global.__DEV__ = true;
			expect(stopwatch.end).toThrow();

			stopwatch.start();

			expect(stopwatch.end()).toBeGreaterThan(0);
			expect(stopwatch.end()).toBeLessThan(3000);
			expect(typeof stopwatch.end()).toBe('number');
		});
	});
});
