/**
 * Get a set representing the difference of `a` and `b` (`a \ b`).
 * The order of parameters matters.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(n)_
 *
 * @param a - First iterable
 * @param b - Second iterable
 *
 * @returns A new set which is the difference of `a` and `b`
 *
 * @public
 * @category Set
 */
export function difference<T>(a: Iterable<T>, b: Iterable<T>): Set<T> {
	if (a === b) {
		return new Set();
	}

	const result = new Set(a);

	for (const element of b) {
		result.delete(element);
	}

	return result;
}
