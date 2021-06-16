/**
 * Create a new function that calls the provided `fn` and negates the result.
 *
 * @example
 * ```ts
 * import {nullish} from '@jonahsnider/util';
 *
 * [0, null, '', undefined, false].filter(not(nullish)); // [0, '', false]
 * ```
 *
 * @param fn - Function to negate the return value of
 *
 * @returns The inverted return value of `fn`
 */
export function not<T extends (...params: any[]) => boolean>(fn: T): T {
	return ((...params) => !fn(...params)) as T;
}
