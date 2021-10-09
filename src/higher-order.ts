import type {NumberLike} from './types';

/**
 * Create a new function that calls the provided `fn` and negates the result.
 *
 * @example
 * ```js
 * import { nullish } from '@jonahsnider/util';
 *
 * const array = [0, null, '', undefined, false];
 *
 * array.filter(not(nullish)); // [0, '', false]
 * ```
 *
 * @param fn - Function to negate the return value of
 *
 * @returns The inverted return value of `fn`
 *
 * @public
 */
export function not<T extends (...parameters: any[]) => boolean>(fn: T): T {
	return ((...parameters) => !fn(...parameters)) as T;
}

/**
 * Create a new function taht calls the provided `fn` and then inverts the sign of the result.
 *
 * @example
 * ```js
 * function sort(a, b) {
 *   return a - b;
 * }
 *
 * const inverted = invert(sort);
 *
 * inverted(10, 5); // -5
 * ```
 *
 * @param fn - Function to invert return value of
 *
 * @returns The inverted return value of `fn`
 *
 * @public
 */
export function invert<T extends (...parameters: any[]) => NumberLike>(fn: T): T {
	return ((...parameters) => -fn(...parameters)!) as T;
}

/**
 * Create a new function that calls the provided `fn` with the given arguments.
 * After the first call the return value will be cached and returned again, meaning you technically only need to pass the arguments the first time.
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
 */
export function thunkify<T extends (...args: unknown[]) => unknown>(fn: T): (...parameters: Parameters<T>) => ReturnType<T> {
	let wasCalled = false;
	let result: ReturnType<T>;

	return (...parameters: Parameters<T>): ReturnType<T> => {
		if (!wasCalled) {
			wasCalled = true;

			result = fn(...parameters) as ReturnType<T>;
		}

		return result;
	};
}
