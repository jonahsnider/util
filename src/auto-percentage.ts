/**
 * A class to help with specific use-cases where you are using a percentage (ex. `1 / n`) but don't know `n` until runtime.
 *
 * @example
 * ```js
 * const autoPercentage = new AutoPercentage();
 *
 * const steps = [
 * 	{ name: 'init', progress: autoPercentage.percentage() },
 * 	{ name: 'modify', progress: autoPercentage.percentage() },
 * 	{ name: 'verify', progress: autoPercentage.percentage() },
 * 	{ name: 'cleanup', progress: 0 }
 * ];
 *
 * let progress = 0;
 *
 * for (const step of steps) {
 * 	if (progress === 1) {
 * 		return;
 * 	}
 *
 * 	progress += step.progress;
 *
 * 	console.log(`${step.name} finished - job is ${Math.round(progress * 100)}% complete`);
 * }
 * ```
 *
 * @public
 */
export class AutoPercentage {
	private _count = 0;

	/**
	 * Increment and get the percentage.
	 *
	 * Time complexity: _O(1)_
	 *
	 * Space complexity: _O(1)_
	 *
	 * @example
	 * ```js
	 * const autoPercentage = new AutoPercentage();
	 *
	 * const a = autoPercentage.percentage();
	 *
	 * Number(a); // 1
	 *
	 * const b = autoPercentage.percentage();
	 *
	 * Number(a); // 0.5
	 * Number(b); // 0.5
	 * ```
	 *
	 * @returns The percentage
	 */
	percentage(): {[Symbol.toPrimitive](): number} {
		this._count++;
		return {[Symbol.toPrimitive]: () => 1 / this._count};
	}

	/**
	 * Increment and get the number of times the percentage has been incremented.
	 *
	 * Time complexity: _O(1)_
	 *
	 * Space complexity: _O(1)_
	 *
	 * @example
	 * ```js
	 * const autoPercentage = new AutoPercentage();
	 *
	 * const a = autoPercentage.count();
	 *
	 * Number(a); // 1
	 *
	 * const b = autoPercentage.count();
	 *
	 * Number(a); // 2
	 * Number(b); // 2
	 * ```
	 *
	 * @returns The number of times this percentage has been incremented
	 */
	count(): {[Symbol.toPrimitive](): number} {
		this._count++;
		return {[Symbol.toPrimitive]: () => this._count};
	}
}
