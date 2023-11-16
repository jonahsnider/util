import {type CompareFn} from '../../types';

/**
 * Sort an array using multiple compare functions.
 * Elements are sorted which each compare function in the order they were provided.
 * If two elements are equal according to a compare function, the next compare function is used.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(n)_
 *
 * @example
 * ```js
 * const array = [
 *   {a: 1, b: 2},
 *   {a: 1, b: 1},
 *   {a: 2, b: 2},
 *   {a: 2, b: 1},
 * ];
 *
 * array.sort(
 *   Sort.combine(
 *     Sort.descending(x => x.b),
 *     Sort.descending(x => x.a),
 *   ),
 * );
 *
 * console.log(array);
 * [
 *   {a: 2, b: 2},
 *   {a: 1, b: 2},
 *   {a: 2, b: 1},
 *   {a: 1, b: 1},
 * ]
 * ```
 *
 * @param compareFns - Compare functions to use
 *
 * @returns A compare function that combines the provided compare functions
 *
 * @public
 * @category Sort
 */
export function combine<T>(...compareFns: ReadonlyArray<CompareFn<T>>): CompareFn<T> {
	return (a, b) => {
		for (const compareFn of compareFns) {
			const result = compareFn(a, b);

			if (result > 0 || result < 0) {
				return result;
			}
		}

		return 0;
	};
}
