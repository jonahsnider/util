/**
 * Helper to record the amount of time elapsed between 2 points during execution.
 *
 * @example
 * ```js
 * const stopwatch = new Stopwatch();
 *
 * stopwatch.start();
 *
 * const elapsed = stopwatch.end();
 * ```
 *
 * @example
 * ```js
 * const stopwatch = Stopwatch.start();
 *
 * const elapsed = stopwatch.end();
 * ```
 */
export class Stopwatch {
	private startTime?: bigint;

	/**
	 * If this stopwatch was started at any some point.
	 * This will return `true` even if the stopwatch is stopped.
	 *
	 * @example
	 * ```js
	 * const stopwatch = new Stopwatch();
	 * console.log(stopwatch.started); // false
	 *
	 * stopwatch.start();
	 * console.log(stopwatch.started); // true
	 * ```
	 */
	get started(): boolean {
		return this.startTime !== undefined;
	}

	/**
	 * Create a new stopwatch and start it.
	 *
	 * @example
	 * ```js
	 * const stopwatch = Stopwatch.start();
	 * ```
	 */
	static start(): Stopwatch {
		const stopwatch = new this();

		stopwatch.start();

		return stopwatch;
	}

	/**
	 * Start recording the duration of this stopwatch.
	 * @example
	 * ```js
	 * stopwatch.start();
	 * ```
	 */
	start(): void {
		this.startTime = process.hrtime.bigint();
	}

	/**
	 * Return the duration elapsed since the start.
	 *
	 * @example
	 * ```js
	 * const elapsed = stopwatch.end();
	 * ```
	 *
	 * @returns The amount of time elapsed in milliseconds.
	 */
	end(): number {
		if (__DEV__ && this.startTime === undefined) {
			throw new Error('This timer was not started');
		}

		return Number(process.hrtime.bigint() - this.startTime!) / 1_000_000;
	}
}
