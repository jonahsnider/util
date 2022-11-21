import type {EventEmitter} from 'events';

/**
 * An object where keys are the names of events and values are the type signature of the listener function.
 *
 * @example
 * ```ts
 * interface SafeEvents extends EventListeners {
 *   start: () => void;
 *   finish: (error: Error) => void;
 * }
 * ```
 *
 * @public
 * @category Typed EventEmitter
 */
export type EventListeners = Record<Parameters<EventEmitter['on']>[0], Parameters<EventEmitter['on']>[1]>;

/**
 * Built-in events on all `EventEmitter`s.
 *
 * @internal
 * @category Typed EventEmitter
 */
type BuiltInEvents<T extends EventListeners> = {
	newListener: <E extends keyof T>(eventName: E, listener: T[E]) => ReturnType<Parameters<EventEmitter['on']>[1]>;
	removeListener: <E extends keyof T>(eventName: E, listener: T[E]) => ReturnType<Parameters<EventEmitter['on']>[1]>;
};
export type {BuiltInEvents as _BuiltInEvents};

/**
 * Typed event emitter with no built in events.
 *
 * @internal
 * @category Typed EventEmitter
 */
type BaseTypedEventEmitter<T extends EventListeners> = {
	addListener<E extends keyof T>(eventName: E, listener: T[E]): this;
	emit<E extends keyof T>(eventName: E, ...args: Parameters<T[E]>): ReturnType<EventEmitter['emit']>;
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
} & EventEmitter;
export type {BaseTypedEventEmitter as _BaseTypedEventEmitter};

/**
 * A type-checked `EventEmitter`.
 *
 * @param T - The event names and listener signatures
 *
 * @example
 * ```ts
 * import { EventEmitter } from 'events';
 *
 * type Events = {
 * 	success: () => void;
 * 	error: (error: Error) => void;
 * };
 *
 * class TypedClass extends (EventEmitter as new () => TypedEventEmitter<Events>) {}
 * ```
 *
 * @public
 * @category Typed EventEmitter
 */
export type TypedEventEmitter<T extends EventListeners = Record<never, never>> = Record<string, unknown> & BaseTypedEventEmitter<T & BuiltInEvents<T>>;
