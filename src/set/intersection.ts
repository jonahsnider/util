import {largeToSmall} from '../array/large-to-small';

/**
 * Get the intersection of 2 `Set`s.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(n)_
 *
 * @param a - First set
 * @param b - Second set
 *
 * @returns A new set which is the intersection of `a` and `b`
 *
 * @public
 * @category Set
 */
export function intersection<T>(a: ReadonlySet<T>, b: ReadonlySet<T>): Set<T> {
	if (a === b) {
		return new Set(a);
	}

	const result: Set<T> = new Set();
	const [largest, smallest] = largeToSmall(a, b);

	for (const element of largest) {
		if (smallest.has(element)) {
			result.add(element);
		}
	}

	return result;
}
