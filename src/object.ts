import type {AnyFunction} from './types.js';

/**
 * @returns `T` if `T` is not a union type, `never` otherwise.
 *
 * @internal
 */
export type NonUnion<T, U extends T = T> = (T extends T ? (U extends T ? false : true) : never) extends false ? T : never;

/**
 * Create a copy of an object with a key renamed.
 *
 * Time complexity: _O(1)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * const object = { a: 1 };
 *
 * rename(object, 'a', 'b'); // { b: 1 }
 * ```
 *
 * @param object - The object you are renaming a key of
 * @param oldKey - The key to rename
 * @param newKey - The new name for the key
 *
 * @returns A shallow-copied object with the key name updated
 *
 * @public
 */
export function rename<T, K1 extends keyof T, K2 extends PropertyKey>(
	target: T,
	oldKey: NonUnion<K1>,
	newKey: NonUnion<K2>,
): Omit<T, K1 | K2> & Record<K2, T[K1]>;
export function rename<T, K1 extends keyof T, K2 extends PropertyKey>(object: T, oldKey: K1, newKey: K1 | K2): Omit<T, K1 | K2> & Record<string, T[K1]> {
	if (oldKey === newKey) {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		return {...object} as any;
	}

	const {[oldKey]: _, ...result} = {...object, [newKey]: object[oldKey]};

	// This logic can be rewritten to remove the need for a type assertion, but would require 2 iterations over result instead of 1
	// eslint-disable-next-line @typescript-eslint/no-unsafe-return
	return result as any;
}

/**
 * Get a string name for a class method.
 *
 * Time complexity: _O(1)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * class Class {
 * 	 static staticMethod() {}
 * }
 *
 * name(Class, Class.staticMethod); // 'Class.staticMethod'
 * ```
 *
 * @example
 * ```js
 * class Class {
 * 	 instanceMethod() {}
 * }
 *
 * name(Class, Class.prototype.instanceMethod); // 'Class#staticMethod'
 * ```
 *
 * @param ctor - The class to use as the first part of the name
 * @param method - The method to use as the second part of the name
 *
 * @returns A string name for the method
 *
 * @public
 */
export function name(ctor: new (...args: any[]) => any, method: AnyFunction): `${string}${'.' | '#'}${string}`;
/**
 * Get the name of a function or class.
 *
 * Time complexity: _O(1)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * function func() {}
 *
 * name(func); // 'func'
 * ```
 *
 * @example
 * ```js
 * class Class {}
 *
 * name(Class); // 'Class'
 * ```
 *
 * @param func - The function or class to get the name for
 *
 * @returns The name of `func`
 *
 * @public
 */
export function name(func: (new (...args: any[]) => any) | AnyFunction): string;
export function name(ctorOrFunc: AnyFunction | (new (...args: any[]) => any), func?: AnyFunction): string {
	if (func) {
		const className = name(ctorOrFunc);

		const separator = func.name in ctorOrFunc ? '.' : '#';

		return `${className}${separator}${func.name}`;
	}

	return ctorOrFunc.name;
}
