/**
 * Check if `a` is a superset of `b`.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(1)_
 *
 * @param a - First set
 * @param b - Second set/iterable
 *
 * @see {@link isSubset} for checking if one set is a subset of another
 *
 * @returns `true` if `a` is a superset of `b`, `false` otherwise
 *
 * @public
 * @category Set
 */
export function isSuperset<T>(a: ReadonlySet<T>, b: Iterable<T>): boolean {
	if (a === b) {
		return true;
	}

	for (const element of b) {
		if (!a.has(element)) {
			return false;
		}
	}

	return true;
}
