import type {EventEmitter} from 'events';

/**
 * An object where keys are the names of events and values are the type signature of the listener function.
 *
 * Listener functions should probably have a return type of `any` or `unknown` for best compatibility (`@types/node` uses `any`).
 *
 * @example
 * ```ts
 * interface SafeEvents extends EventListeners {
 *   start: () => unknown;
 *   finish: (error: Error) => unknown;
 * }
 * ```
 */
export type EventListeners = Record<Parameters<EventEmitter['on']>[0], Parameters<EventEmitter['on']>[1]>;

interface BuiltInEvents<T extends EventListeners> {
	newListener: <E extends keyof T>(eventName: E, listener: T[E]) => ReturnType<Parameters<EventEmitter['on']>[1]>;
	removeListener: <E extends keyof T>(eventName: E, listener: T[E]) => ReturnType<Parameters<EventEmitter['on']>[1]>;
}

/**
 * Typed event emitter with no built in events.
 */
interface BaseTypedEventEmitter<T extends EventListeners> extends EventEmitter {
	addListener<E extends keyof T>(event: E, listener: T[E]): this;
	emit<E extends keyof T>(event: E, ...args: Parameters<T[E]>): ReturnType<EventEmitter['emit']>;
	eventNames(): Array<Exclude<keyof T, number>>;
	listenerCount(eventName: keyof T): ReturnType<EventEmitter['listenerCount']>;
	listeners<E extends keyof T>(eventName: E): Array<T[E]>;
	off<E extends keyof T>(eventName: E, listener: T[E]): this;
	on<E extends keyof T>(eventName: E, listener: T[E]): this;
	once<E extends keyof T>(eventName: E, listener: T[E]): this;
	prependListener<E extends keyof T>(eventName: E, listener: T[E]): this;
	prependOnceListener<E extends keyof T>(eventName: E, listener: T[E]): this;
	removeAllListeners(eventName?: keyof T): this;
	removeListener<E extends keyof T>(eventName: E, listener: T[E]): this;
	rawListeners<E extends keyof T>(eventName: E): Array<T[E]>;
}

/**
 * A type-checked `EventEmitter`.
 *
 * @param T - The event names and listener signatures
 *
 * @example
 * ```ts
 * import { EventEmitter } from 'events';
 *
 * class SafeEmitter extends EventEmitter implements TypedEventEmitter<{
 *   start: () => unknown;
 *   finish: (error: Error) => unknown;
 * }> {}
 * ```
 */
export type TypedEventEmitter<T extends EventListeners = {}> = BaseTypedEventEmitter<T & BuiltInEvents<T>>;
