import {EventEmitter} from 'events';
import {random} from './math';
import {TypedEventEmitter} from './typedEventEmitter';

export class Backoff
	extends EventEmitter
	implements
		TypedEventEmitter<{
			attempt: () => unknown;
			finish: () => unknown;
		}> {
	attempts = 0;

	constructor() {
		super();
	}

	start() {
		if (this.attempts > 0) {
			throw new Error('Already started');
		}

		this.attempts++;
		this.emit('attempt');
	}

	finish() {
		this.emit('finish');

		this.removeAllListeners('attempt');
	}
}

/**
 * An exponential backoff controller.
 */
export class ExponentialBackoff extends Backoff {
	jitterAdjusted: {min: number; max: number};
	timer: NodeJS.Timeout;

	/**
	 * Create an exponential backoff controller with a specified base delay.
	 * @param baseDelay - Base delay in milliseconds
	 * @param jitter - The minimum and maximum jitter percentages.
	 */
	constructor(private readonly baseDelay: number, jitter: {min: number; max: number} = {min: 0, max: 0}) {
		super();

		this.jitterAdjusted = {min: jitter.min + 1, max: jitter.max + 1};
		this.timer = this.newTimer();
	}

	private get delay() {
		return this.baseDelay * random(this.jitterAdjusted.min, this.jitterAdjusted.max) * 2 ** this.attempts;
	}

	private newTimer() {
		return setTimeout(() => {
			this.attempts++;

			this.timer = this.newTimer();
			this.emit('attempt');
		}, this.delay);
	}

	public finish() {
		clearTimeout(this.timer);

		super.finish();
	}
}
