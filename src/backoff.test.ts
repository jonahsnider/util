import {ExponentialBackoff} from './backoff';

describe('ExponentialBackoff', () => {
	describe('ExponentialBackoff', () => {
		it('finishes with events', () => {
			const exponentialBackoff = new ExponentialBackoff(0);

			expect(exponentialBackoff.attempts).toBe(0);
			exponentialBackoff.start();

			let finished = false;
			exponentialBackoff
				.on('attempt', attempts => {
					if (finished) {
						throw new Error('');
					}

					expect(attempts).toBe(exponentialBackoff.attempts);
					expect(exponentialBackoff.attempts).toBe(1);

					exponentialBackoff.finish();
				})
				.on('finish', attempts => {
					expect(attempts).toBe(exponentialBackoff.attempts);
					expect(exponentialBackoff.attempts).toBe(1);
				});

			expect(exponentialBackoff.attempts).toBe(1);
		});

		it('finishes with async', async () => {
			const exponentialBackoff = new ExponentialBackoff(0);

			expect(exponentialBackoff.attempts).toBe(0);

			exponentialBackoff.start();

			for await (const [attempts] of exponentialBackoff) {
				expect(attempts).toBe(exponentialBackoff.attempts);
				expect(exponentialBackoff.attempts).toBe(1);

				exponentialBackoff.finish();
			}

			expect(exponentialBackoff.attempts).toBe(1);
			await exponentialBackoff.finished();
			expect(exponentialBackoff.attempts).toBe(1);
		});
	});
});
