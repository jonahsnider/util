export type ResolvedResult<T> = [value: T, error: undefined];
export type RejectedResult<T> = [value: undefined, error: T];
export type Result<T, E> = ResolvedResult<T> | RejectedResult<E>;

/**
 * Settle a promise by returning a tuple of the resolved value or rejected error.
 * This function never rejects.
 *
 * @example
 * ```js
 * const [value, error] = await settled(promise);
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

const DELAY_RESOLVED_VALUE = Symbol('delayResolvedValue');

function delay(ms: number): [timer: NodeJS.Timeout, delay: Promise<typeof DELAY_RESOLVED_VALUE>] {
	let timer: NodeJS.Timeout;

	const promise = new Promise<typeof DELAY_RESOLVED_VALUE>(resolve => {
		timer = setTimeout(() => resolve(DELAY_RESOLVED_VALUE), ms);
	});

	return [timer!, promise];
}

/**
 * Reject if the given promise does not resolve within the given timeout.
 *
 * @param promise - The promise to wait for
 * @param timeoutMs - The timeout in milliseconds
 *
 * @returns The resolved value of the promise
 */
export async function timeout<T>(promise: Promise<T>, timeoutMs: number): Promise<T> {
	const [timer, timeoutPromise] = delay(timeoutMs);
	const resolvedValue = await Promise.race([promise, timeoutPromise]);

	if (resolvedValue === DELAY_RESOLVED_VALUE) {
		throw new Error('Timed out');
	}

	clearTimeout(timer);

	return resolvedValue;
}
