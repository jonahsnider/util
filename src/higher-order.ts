import {AnyFunction, NumberLike} from './types';

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
 */
export function not<T extends (...params: any[]) => boolean>(fn: T): T {
	return ((...params) => !fn(...params)) as T;
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
 */
export function invert<T extends (...params: any[]) => NumberLike>(fn: T): T {
	return ((...params) => -fn(...params)!) as T;
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
 */
export function thunkify<T extends AnyFunction>(fn: T): (...params: Parameters<T>) => ReturnType<T> {
	let called = false;
	let result: ReturnType<T>;

	return (...params: Parameters<T>): ReturnType<T> => {
		if (!called) {
			called = true;

			result = fn(...params);
		}

		return result;
	};
}
