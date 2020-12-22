import {Stopwatch} from './stopwatch';

describe('Stopwatch', () => {
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
			expect(stopwatch.end()).toBeGreaterThan(0n);
		});
	});

	describe('Stopwatch#start', () => {
		it('starts the stopwatch', () => {
			const stopwatch = new Stopwatch();

			stopwatch.start();

			expect(stopwatch.end()).toBeGreaterThan(0n);
		});
	});

	describe('Stopwatch#end', () => {
		it('ends the stopwatch', () => {
			const stopwatch = new Stopwatch();

			expect(stopwatch.end).toThrow();

			stopwatch.start();

			expect(stopwatch.end()).toBeGreaterThan(0n);
			expect(typeof stopwatch.end()).toBe('bigint');
		});
	});
});
