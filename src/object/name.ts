import type {AnyFunction} from '../types.js';

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
