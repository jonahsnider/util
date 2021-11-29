/**
 * Check if `a` and `b` are disjoint.
 * For best performance `a` should have more elements than `b`.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(1)_
 *
 * @param a - First iterable
 * @param b - Second iterable
 *
 * @returns `true` if `a` and `b` are disjoint
 *
 * @public
 * @category Set
 */
export function isDisjoint<T>(a: Iterable<T>, b: Iterable<T>): boolean {
	if (a === b) {
		return false;
	}

	const set: ReadonlySet<T> = a instanceof Set ? a : new Set(a);

	for (const element of b) {
		if (set.has(element)) {
			return false;
		}
	}

	return true;
}
