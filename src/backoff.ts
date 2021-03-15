import {EventEmitter} from 'events';
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
