const DELAY_RESOLVED_VALUE = Symbol('delayResolvedValue');
function delay(ms: number): [timer: NodeJS.Timeout, delay: PromiseLike<typeof DELAY_RESOLVED_VALUE>] {
	let timer: NodeJS.Timeout;

	const promise = new Promise<typeof DELAY_RESOLVED_VALUE>((resolve) => {
		timer = setTimeout(() => {
			resolve(DELAY_RESOLVED_VALUE);
		}, ms);
	});

	// biome-ignore lint/style/noNonNullAssertion: The timer will be defined at this point
	return [timer!, promise];
}

/**
 * Reject if the given promise does not resolve within the given timeout.
 *
 * Time complexity: _O(1)_
 *
 * Space complexity: _O(1)_
 *
 * @param promise - The promise to wait for
 * @param timeoutMs - The timeout in milliseconds
 *
 * @returns The resolved value of the promise
 *
 * @public
 * @category Promise
 */
export async function timeout<T>(promise: PromiseLike<T>, timeoutMs: number): Promise<T> {
	const [timer, timeoutPromise] = delay(timeoutMs);
	let resolvedValue: T | typeof DELAY_RESOLVED_VALUE;

	try {
		resolvedValue = await Promise.race([promise, timeoutPromise]);
	} finally {
		clearTimeout(timer);
	}

	if (resolvedValue === DELAY_RESOLVED_VALUE) {
		throw new Error('Timed out');
	}

	return resolvedValue;
}
