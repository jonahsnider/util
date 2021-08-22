/**
 * Any function.
 *
 * @typeParam P - Parameters type
 * @typeParam R - Return type
 */
export type AnyFunction<P extends any[] = any[], R = any> = (...args: P) => R;

/** A value that can be compared numerically using `<`, `>`, `<=`, or `>=`. */
export type Comparable = string | number | bigint | boolean | null | {[Symbol.toPrimitive](hint: 'number'): number};

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
