/**
 * Create a new function that calls the provided `fn` with the given arguments.
 * After the first call the return value will be cached and returned again, meaning you technically only need to pass the arguments the first time.
 *
 * Time complexity: _O(1)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * function add(a, b) {
 *  return a + b;
 * }
 *
 * const thunk = thunkify(add);
 *
 * thunk(1, 2); // 3
 * thunk(3, 4); // 3
 * ```
 *
 * @param fn - The function to thunkify
 *
 * @returns A function that returns whatever the first call of `fn` returns for the given arguments
 *
 * @public
 * @category Higher order
 */
// eslint-disable-next-line unicorn/prevent-abbreviations
export function thunkify<T extends (...args: unknown[]) => unknown>(func: T): (...parameters: Parameters<T>) => ReturnType<T> {
	let wasCalled = false;
	let result: ReturnType<T>;

	return (...parameters: Parameters<T>): ReturnType<T> => {
		if (!wasCalled) {
			wasCalled = true;

			result = func(...parameters) as ReturnType<T>;
		}

		return result;
	};
}
