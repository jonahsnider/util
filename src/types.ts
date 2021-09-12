/**
 * Any function.
 *
 * @typeParam P - Parameters type
 * @typeParam R - Return type
 */
export type AnyFunction<P extends any[] = any[], R = any> = (...args: P) => R;

type Sign = '-' | '+';

/**
 * A value that can be converted to a Number.
 * @see https://262.ecma-international.org/12.0/#sec-tonumber-applied-to-the-string-type ECMAScript definition of this behavior
 */
export type NumberLike =
	// Totally normal
	| {[Symbol.toPrimitive](hint: 'number'): number}
	| number
	| bigint
	| Number
	// Reasonable
	| boolean
	| `${number | bigint}`
	| `${Sign | ''}${'Infinity'}`
	// Strange
	| null;

/** A value that can be compared numerically using `<`, `>`, `<=`, or `>=`. */
export type Comparable = string | NumberLike;

/**
 * A function used to determine the direction a search algorithm should take when traversing data to find a desired element.
 *
 * @example
 * ```ts
 * function directionFn(value: number) {
 *   const squared = value ** 2;
 *
 *   return squared - 64;
 * }
 * ```
 *
 * @returns `0` when the desired element has been found. A positive number when the desired element appears after the current element. A negative number when
 * the desired element appears before the current element.
 */
export type DirectionFn<T> = (element: T) => number;

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort | MDN docs on this function}
 */
export type CompareFn<T = Comparable> = Exclude<Parameters<Array<T>['sort']>[0], undefined>;
