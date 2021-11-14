/**
 * Check if `a` is a subset of `b`.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(1)_
 *
 * @param a - First set/iterable
 * @param b - Second set
 *
 * @see {@link isSuperset} for checking if one set is a superset of another
 *
 * @returns `true` if `a` is a subset of `b`, `false` otherwise
 *
 * @public
 */
export function isSubset<T>(a: Iterable<T>, b: ReadonlySet<T>): boolean {
	if (a === b) {
		return true;
	}

	for (const element of a) {
		if (!b.has(element)) {
			return false;
		}
	}

	return true;
}
