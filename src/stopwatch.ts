/* eslint-disable node/prefer-global/process */

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
 *
 * @public
 */
export class Stopwatch {
	/**
	 * Create a new stopwatch and start it.
	 *
	 * Time complexity: _O(1)_
	 *
	 * Space complexity: _O(1)_
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

	private startTime?: bigint;

	/**
	 * If this stopwatch was started at any some point.
	 * This will return `true` even if the stopwatch is stopped.
	 *
	 * Time complexity: _O(1)_
	 *
	 * Space complexity: _O(1)_
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
	 * Start recording the duration of this stopwatch.
	 *
	 * Time complexity: _O(1)_
	 *
	 * Space complexity: _O(1)_
	 *
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
	 * Time complexity: _O(1)_
	 *
	 * Space complexity: _O(1)_
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
