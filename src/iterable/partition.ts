/**
 * Split an iterable into 2 arrays of elements that passed or failed a provided type guard.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(n)_
 *
 * @example
 * ```js
 * const [numbers, strings] = partition(['a', 1, 'b', 2, 'c', 3], (element): element is number => typeof element === 'number');
 *
 * console.log(numbers); // [1, 2, 3]
 * console.log(strings); // ['a', 'b', 'c']
 * ```
 *
 * @param iterable - The iterable to partition
 * @param typeGuard - The type guard to apply to each element of `iterable`. If the type guard returns a truthy value the element will be added to the `passed`
 * array in the result. Otherwise, it will be added to the `failed` array.
 *
 * @returns A tuple where the 1st element is an array of elements that passed the predicate (`passed`) and the 2nd element are the elements that failed the predicate (`failed`)
 *
 * @public
 * @category Iterable
 */
export function partition<S extends T, T>(iterable: Iterable<T>, typeGuard: (element: T) => element is S): [passed: S[], failed: Array<Exclude<T, S>>];
/**
 * Split an iterable into 2 arrays of elements that passed or failed a provided predicate.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(n)_
 *
 * @example
 * ```js
 * const [odd, even] = partition([1, 2, 3, 4, 5, 6], num => num % 2);
 *
 * console.log(odd); // [1, 3, 5]
 * console.log(even); // [2, 4, 6]
 * ```
 *
 * @param iterable - The iterable to partition
 * @param predicate - The predicate to apply to each element of `iterable`. If the predicate returns a truthy value the element will be added to the `passed`
 * array in the result. Otherwise, it will be added to the `failed` array.
 *
 * @returns A tuple where the 1st element is an array of elements that passed the predicate (`passed`) and the 2nd element are the elements that failed the predicate (`failed`)
 *
 * @public
 * @category Iterable
 */
export function partition<T>(iterable: Iterable<T>, predicate: (value: T, increment: number) => unknown): [passed: T[], failed: T[]];
export function partition<T>(iterable: Iterable<T>, predicate: (value: T, increment: number) => unknown): [passed: T[], failed: T[]] {
	const passed: T[] = [];
	const failed: T[] = [];
	let increment = 0;

	for (const element of iterable) {
		const array = predicate(element, increment++) ? passed : failed;

		array.push(element as any);
	}

	return [passed, failed];
}
