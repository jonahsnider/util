/**
 * Any function.
 *
 * @typeParam P - Parameters type
 * @typeParam R - Return type
 *
 * @see {@link UnknownFunction}
 *
 * @public
 */

// biome-ignore lint/suspicious/noExplicitAny: This is safe
export type AnyFunction<P extends any[] = any[], R = any> = (...args: P) => R;

/**
 * An unknown function.
 *
 * @see {@link AnyFunction}
 *
 * @public
 */
export type UnknownFunction = (...args: unknown[]) => unknown;

/**
 * A number sign.
 *
 * @internal
 */
type Sign = '-' | '+';
export type { Sign as _Sign };

/**
 * A value that can be converted to a Number.
 * @see https://262.ecma-international.org/12.0/#sec-tonumber-applied-to-the-string-type ECMAScript definition of this behavior
 *
 * @public
 */
export type NumberLike =
	| { [Symbol.toPrimitive](hint: 'number'): number }
	| number
	| bigint
	// biome-ignore lint/complexity/noBannedTypes: This is intentional
	| Number
	| boolean
	| `${number | bigint}`
	| `${Sign | ''}${'Infinity'}`
	| null;

/**
 * A value that can be compared numerically using `<`, `>`, `<=`, or `>=`.
 *
 * @public
 * @category Sort
 */
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
 *
 * @public
 */

export type DirectionFn<T> = (element: T) => number;

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort | MDN docs on this function}
 *
 * @public
 * @category Sort
 */

export type CompareFn<T = Comparable> = Exclude<Parameters<T[]['sort']>[0], undefined>;

/**
 * A percentage within `[0, 1]` accurate to 2 decimal places.
 *
 * @public
 */
export type Percentage =
	| 0
	| 0.01
	| 0.02
	| 0.03
	| 0.04
	| 0.05
	| 0.06
	| 0.07
	| 0.08
	| 0.09
	| 0.1
	| 0.11
	| 0.12
	| 0.13
	| 0.14
	| 0.15
	| 0.16
	| 0.17
	| 0.18
	| 0.19
	| 0.2
	| 0.21
	| 0.22
	| 0.23
	| 0.24
	| 0.25
	| 0.26
	| 0.27
	| 0.28
	| 0.29
	| 0.3
	| 0.31
	| 0.32
	| 0.33
	| 0.34
	| 0.35
	| 0.36
	| 0.37
	| 0.38
	| 0.39
	| 0.4
	| 0.41
	| 0.42
	| 0.43
	| 0.44
	| 0.45
	| 0.46
	| 0.47
	| 0.48
	| 0.49
	| 0.5
	| 0.51
	| 0.52
	| 0.53
	| 0.54
	| 0.55
	| 0.56
	| 0.57
	| 0.58
	| 0.59
	| 0.6
	| 0.61
	| 0.62
	| 0.63
	| 0.64
	| 0.65
	| 0.66
	| 0.67
	| 0.68
	| 0.69
	| 0.7
	| 0.71
	| 0.72
	| 0.73
	| 0.74
	| 0.75
	| 0.76
	| 0.77
	| 0.78
	| 0.79
	| 0.8
	| 0.81
	| 0.82
	| 0.83
	| 0.84
	| 0.85
	| 0.86
	| 0.87
	| 0.88
	| 0.89
	| 0.9
	| 0.91
	| 0.92
	| 0.93
	| 0.94
	| 0.95
	| 0.96
	| 0.97
	| 0.98
	| 0.99
	| 1;
