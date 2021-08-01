export type ResolvedResult<T> = [value: T, error: undefined];
export type RejectedResult<T> = [value: undefined, error: T];
export type Result<T, E> = ResolvedResult<T> | RejectedResult<E>;

/**
 * Settle a promise by returning a tuple of the resolved value or rejected error.
 * This function never rejects.
 *
 * @example
 * ```js
 * const [value, error] = settle(promise);
 * ```
 *
 * @param promise - The promise to settle
 *
 * @returns A tuple of the resolved value or rejected error
 */
export async function settled<E, T>(promise: Promise<T>): Promise<Result<T, E>> {
	try {
		return [await promise, undefined];
	} catch (error: unknown) {
		return [undefined, error as E];
	}
}
