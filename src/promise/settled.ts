/**
 * A result type for a `Promise` that resolved.
 *
 * @public
 */
export type ResolvedResult<T> = [value: T, error: undefined];
/**
 * A result type for a `Promise` that rejected.
 *
 * @public
 */
export type RejectedResult<T> = [value: undefined, error: T];
/**
 * A result type to represent a resolved or rejected `Promise`.
 * @public
 */
export type Result<T, E> = ResolvedResult<T> | RejectedResult<E>;
/**
 * Settle a promise by returning a tuple of the resolved value or rejected error.
 * This function never rejects.
 *
 * Time complexity: _O(1)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * const [value, error] = await settled(promise);
 * ```
 *
 * @param promise - The promise to settle
 *
 * @returns A tuple of the resolved value or rejected error
 *
 * @public
 */
export async function settled<E, T>(promise: PromiseLike<T>): Promise<Result<T, E>> {
	try {
		return [await promise, undefined];
	} catch (error: unknown) {
		return [undefined, error as E];
	}
}
