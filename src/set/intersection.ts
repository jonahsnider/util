import {largeToSmall} from '../array/large-to-small';

/**
 * Get the intersection of 2 `Set`s.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(n)_
 *
 * @param a - First `Set`
 * @param b - Second `Set`
 *
 * @returns A new `Set` which is the intersection of `a` and `b`
 *
 * @public
 * @category Set
 */
export function intersection<T>(a: ReadonlySet<T>, b: ReadonlySet<T>): Set<T> {
	if (a === b) {
		return new Set(a);
	}

	const result = new Set<T>();
	const [largest, smallest] = largeToSmall(a, b);

	for (const element of largest) {
		if (smallest.has(element)) {
			result.add(element);
		}
	}

	return result;
}
